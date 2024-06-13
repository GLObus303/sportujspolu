'use client';

import { useAuth } from '../../../context/AuthContext';
import { MessageRequestCard } from '../../../components/MessageRequestCard';
import { Message } from '../../../types/Message';

export const ProfileContent: React.FC = () => {
  const { messages } = useAuth();

  if (!messages?.length) {
    return null;
  }

  return (
    <section className="w-full pt-5 md:pt-0 md:pl-14 md:max-w-2xl">
      <h1 className="mt-24 px-28 text-center text-2xl font-medium leading-normal md:mt-14 md:px-0 lg:text-start lg:text-4xl">
        Žádosti o zprávy
      </h1>
      <ul className="mt-10 space-y-5 md:mt-14">
        {messages.map((message: Message) => (
          <MessageRequestCard key={message?.id} message={message} />
        ))}
      </ul>
    </section>
  );
};
