'use client';

import { useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';

import { Routes } from '../utils/constants';
import { Button } from './Button';
import { patchMessageRequest } from '../api/messages';
import { Message } from '../types/Message';

type MessageRequestCardProps = {
  message: Message;
};

export const MessageRequestCard: React.FC<MessageRequestCardProps> = ({
  message: { id, approved, text, eventId, category },
}) => {
  const [isApproved, setIsApproved] = useState(approved);
  const [requesterEmail, setRequesterEmail] = useState('');

  const handleApprove = async () => {
    try {
      const response = await patchMessageRequest(id, { approved: true });

      if (response) {
        setRequesterEmail(response.requesterEmail);
      }
    } finally {
      setIsApproved(true);
    }
  };

  const handleReject = () => {
    patchMessageRequest(id, { approved: false });
    setIsApproved(false);
  };

  return (
    <li>
      <article
        className={cx('relative w-full rounded-md p-5 shadow-md', {
          'bg-primary': isApproved === true,
          'bg-secondary': isApproved === false,
          'bg-card': isApproved === null,
        })}
      >
        <Link href={`${Routes.EVENT}/${category}/${eventId}`}>
          <div className="w-full rounded-md">
            <p>APPROVED: {`${isApproved}`}</p>
            <p>ID: {`${id}`}</p>
            <p>Event name</p>
            <p>Jméno žadatele</p>
            <p>Email žadatele {requesterEmail}</p>
            <p>{isApproved}</p>
            <p>{text}</p>
          </div>
        </Link>
        <Button onClick={handleApprove} className="mr-5 mt-5">
          Schválit
        </Button>
        <Button onClick={handleReject} className="mt-5" variant="secondary">
          Zamítnout
        </Button>
      </article>
    </li>
  );
};
