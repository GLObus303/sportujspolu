'use client';

import { useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import Image from 'next/image';

import { Routes, levelLabels } from '../utils/constants';
import { formatDate, formatTime } from '../utils/dateUtils';
import { EmailWithCopy } from './EmailWithCopy';
import { slugifyCategory } from '../utils/slugifyUtils';
import { getSportLabel } from '../utils/functions';
import { Message } from '../types/Message';
import { patchMessageRequest } from '../api/messages';
import { Button } from './Button';

type MessageCardProps = {
  message: Message;
};

export const MessageCard: React.FC<MessageCardProps> = ({ message }) => {
  const {
    id,
    approved,
    approvedAt,
    eventLevel,
    eventSport,
    eventLocation,
    createdAt,
    eventName,
    eventOwnerName,
    eventOwnerEmail,
    requesterName,
    requesterEmail,
    text,
    eventId,
  } = message;
  const [isApproved, setIsApproved] = useState(approved);
  const [updatedRequesterEmail, setUpdatedRequesterEmail] = useState<
    string | undefined
  >(requesterEmail);

  const formattedDate = formatDate(createdAt);
  const formattedTime = formatTime(createdAt);

  const sportLabel = getSportLabel(eventSport);
  const levelLabel = levelLabels[eventLevel];

  const category = slugifyCategory(
    `${sportLabel} ${eventLocation} ${levelLabel}`,
  );

  let messageStatus;

  switch (isApproved) {
    case null:
      messageStatus = 'čeká na schválení';
      break;
    case true:
      messageStatus = 'Schváleno';
      break;
    case false:
      messageStatus = 'Zamítnuto';
      break;
  }

  const messageType = requesterName ? 'received' : 'sent';

  const { email, approvedCaption, messageTitle } =
    messageType === 'sent'
      ? {
          email: eventOwnerEmail,
          approvedCaption: `${eventOwnerName} schvaluje žádost a zasílá svou emailovou adresu. Nyní můžete sportovat spolu!`,
          messageTitle: `Vaše žádost k účasti na akci '${eventName}'`,
        }
      : {
          email: updatedRequesterEmail,
          approvedCaption: `${requesterName}, zájemce o akci '${eventName}', vás nyní může kontaktovat, nebo zájemci napište na e-mail.`,
          messageTitle: `${requesterName} má zájem o vaši akci '${eventName}'`,
        };

  const handleApprove = async () => {
    try {
      const response = await patchMessageRequest(id, { approved: true });

      setIsApproved(true);
      setUpdatedRequesterEmail(response?.requesterEmail);
    } catch (error) {
      setIsApproved(false);
    }
  };

  const handleReject = () => {
    try {
      patchMessageRequest(id, { approved: false });

      setIsApproved(false);
    } catch (error) {
      setIsApproved(null);
    }
  };

  return (
    <li>
      <article className="relative w-full bg-card rounded-md shadow-md flex flex-col">
        <div className="flex">
          <Link
            href={`${Routes.EVENT}/${category}/${eventId}`}
            className="w-full flex-1 p-5 flex flex-col"
          >
            <p className="text-xl font-medium">{messageTitle}</p>
            <p className="text-dark-gray text-sm">
              Zpráva ze dne {formattedDate} {formattedTime}
            </p>
            <p className="my-auto mt-4">{text}</p>
          </Link>

          <div className="p-5 flex flex-col text-sm items-end gap-4 justify-start">
            {isApproved === null && messageType === 'received' ? (
              <div className="gap-4 flex mt-auto flex-col">
                <Button onClick={handleApprove} className="w-full">
                  Schválit
                </Button>
                <Button
                  onClick={handleReject}
                  className="w-full mt-auto"
                  variant="secondary"
                >
                  Zamítnout
                </Button>
              </div>
            ) : (
              <p
                className={cx('text-xm px-4 py-2 rounded-full font-medium', {
                  'text-primary bg-pale-aloe': isApproved === true,
                  'text-secondary bg-soft-cheek': isApproved === false,
                  'text-mandarin bg-baby-fox': isApproved === null,
                })}
              >
                {messageStatus}
              </p>
            )}
          </div>
        </div>

        {isApproved && (
          <div className="mx-5 mb-5 px-5 py-10 bg-pale-aloe w-auto rounded-md flex flex-col items-center justify-center gap-5">
            <Image
              alt=""
              src="/images/icons/message.svg"
              width="40"
              height="30"
            />
            <p className="max-w-md text-center font-medium flex flex-col gap-1">
              {approvedCaption}
              <span className="text-dark-gray text-sm text-center">
                potvrzeno: {formatDate(approvedAt)} {formatTime(approvedAt)}
              </span>
            </p>

            <EmailWithCopy email={email} className="text-xl" />
          </div>
        )}
      </article>
    </li>
  );
};
