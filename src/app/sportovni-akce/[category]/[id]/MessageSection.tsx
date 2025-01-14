'use client';

import { useState } from 'react';
import Image from 'next/image';

import { EmailForm } from '../../../../components/EmailForm';
import { useAuth } from '../../../../context/AuthContext';
import { Loading } from '../../../../components/Loading';
import { MessageBox } from '../../../../components/MessageBox';
import { OwnerRequestType } from '../../../../types/Message';
import { getOwnerRequests } from '../../../../api/messages';
import { useEffectAsync } from '../../../../hooks/useEffectAsync';

type MessageSectionProps = {
  eventOwner: {
    id: string;
    image?: string;
    name: string;
  };
  name: string;
  eventId: string;
};

export const MessageSection: React.FC<MessageSectionProps> = ({
  eventOwner: { id: ownerId, image: ownerImage, name: ownerName },
  name,
  eventId,
}) => {
  const {
    user: { id: userId },
  } = useAuth();

  const [ownerRequests, setOwnerRequests] = useState<OwnerRequestType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffectAsync(async () => {
    try {
      const ownerRequestsData = await getOwnerRequests();

      setOwnerRequests(ownerRequestsData);
    } catch (error) {
      setOwnerRequests([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const isViewerOwner = ownerId === userId;

  if (isViewerOwner) {
    const filteredRequests = ownerRequests.filter(
      (request) => request.eventId === eventId,
    );

    return <MessageBox ownerRequest={filteredRequests} />;
  }

  return (
    <section className="w-full">
      <h2 className="flex flex-col px-20 text-center text-xl font-medium leading-normal md:flex-row md:px-0 lg:text-start lg:text-3xl">
        Chceš se zúčastnit? Registruj se na akci!
      </h2>
      <div className="relative mt-10 flex flex-row">
        <figure className="relative mr-4 h-12 w-12">
          <Image
            alt={name}
            src={ownerImage || '/images/running/7.avif'}
            className="rounded-full object-cover"
            sizes="auto"
            fill
          />
        </figure>
        <div className="mr-2">
          <h3 className="items-center text-base md:text-lg">{ownerName}</h3>
          <p className="font-light text-accent">Napiš nyní a sportuj spolu!</p>
        </div>
      </div>
      <EmailForm eventId={eventId} />
    </section>
  );
};
