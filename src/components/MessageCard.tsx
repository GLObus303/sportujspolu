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
import { OwnerRequestType, UserRequestType } from '../types/Message';
import { approveMessageRequest } from '../api/messages';
import { Button } from './Button';

const getMessageStatus = (isApproved: boolean | null) => {
  switch (isApproved) {
    case null:
      return 'čeká na schválení';

    case true:
      return 'Schváleno';

    case false:
      return 'Zamítnuto';
  }
};

type MessageCardProps = {
  message: OwnerRequestType | UserRequestType;
};

export const MessageCard: React.FC<MessageCardProps> = ({ message }) => {
  const {
    approved,
    approvedAt,
    createdAt,
    eventId,
    eventLevel,
    eventLocation,
    eventSport,
    eventName,
    eventOwnerName,
    id,
    requesterName,
    text,
  } = message;

  const [isApproved, setIsApproved] = useState(approved);
  const [updatedRequesterEmail, setUpdatedRequesterEmail] = useState(
    'requesterEmail' in message && message.requesterEmail,
  );

  const handleApprove = async () => {
    try {
      const response = await approveMessageRequest(id, { approved: true });

      setIsApproved(true);
      setUpdatedRequesterEmail(response?.requesterEmail);
    } catch (error) {
      setIsApproved(false);
    }
  };

  const handleReject = () => {
    try {
      approveMessageRequest(id, { approved: false });

      setIsApproved(false);
    } catch (error) {
      setIsApproved(null);
    }
  };

  const formattedDate = formatDate(createdAt);
  const formattedTime = formatTime(createdAt);

  const sportLabel = getSportLabel(eventSport);
  const levelLabel = levelLabels[eventLevel];

  const category = slugifyCategory(
    `${sportLabel} ${eventLocation} ${levelLabel}`,
  );

  const messageType = requesterName ? 'received' : 'sent';
  const isSentType = messageType === 'sent';

  const email = isSentType
    ? ('eventOwnerEmail' in message && message.eventOwnerEmail) || ''
    : updatedRequesterEmail || '';

  return (
    <li>
      <article className="relative w-full bg-card rounded-md shadow-md flex flex-col">
        <div className="flex">
          <Link
            href={`${Routes.EVENT}/${category}/${eventId}`}
            className="w-full flex-1 p-5 flex flex-col"
          >
            <p className="text-xl font-medium">
              {isSentType
                ? `Vaše žádost k účasti na akci '${eventName}'`
                : `${requesterName} má zájem o vaši akci '${eventName}'`}
            </p>
            <p className="text-dark-gray text-sm">
              Zpráva ze dne {formattedDate} {formattedTime}
            </p>
            <p className="my-auto mt-4">{text}</p>
          </Link>

          <div className="p-5 flex flex-col text-sm items-end gap-4 justify-start">
            {isApproved === null && !isSentType ? (
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
                {getMessageStatus(isApproved)}
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
              {isSentType
                ? `${eventOwnerName} schvaluje žádost a zasílá svou emailovou adresu. Nyní můžete sportovat spolu!`
                : `${requesterName}, zájemce o akci '${eventName}', vás nyní může kontaktovat, nebo zájemci napište na e-mail.`}
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
