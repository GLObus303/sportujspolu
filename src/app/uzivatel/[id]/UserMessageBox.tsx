'use client';

import { useState } from 'react';

import { MessageBox } from '../../../components/MessageBox';
import { Loading } from '../../../components/Loading';
import { useEffectAsync } from '../../../hooks/useEffectAsync';
import { getMessages, getRequests } from '../../../api/messages';
import { Message } from '../../../types/Message';
import { useAuth } from '../../../context/AuthContext';

export const UserMessageBox: React.FC = () => {
  const {
    user: { id },
  } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [requests, setRequests] = useState<Message[]>([]);

  useEffectAsync(async () => {
    if (!id) {
      setMessages([]);
      setRequests([]);

      return;
    }

    try {
      const [messagesData, requestsData] = await Promise.all([
        getMessages(),
        getRequests(),
      ]);

      setMessages(messagesData);
      setRequests(requestsData);
    } catch (error) {
      setMessages([]);
      setRequests([]);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) {
    return <Loading className="w-full my-60" />;
  }

  return (
    <MessageBox
      className="mt-10 md:mt-14"
      messages={messages}
      requests={requests}
    />
  );
};
