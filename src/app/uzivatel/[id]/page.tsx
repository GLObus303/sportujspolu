import { NextPage } from 'next';

import { ProfileContent } from './ProfileContent';
import { getEvent } from '../../../api/events';
import { getFirstQueryParam } from '../../../utils/functions';
import { ProfileIcon } from '../../../components/icons/ProfileIcon';

type UserPageProps = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

const UserPage: NextPage<UserPageProps> = async ({
  params: { id: ownerId },
  searchParams,
}) => {
  const eventId = getFirstQueryParam(searchParams?.event, '');

  const event = await getEvent(eventId);

  const name = event?.owner?.name;

  return (
    <section className="mt-20">
      <article className="relative mt-40 flex flex-col items-center justify-center bg-card shadow-md">
        <figure className="absolute -top-24 left-1/2 flex h-48 w-48 -translate-x-1/2 transform items-center justify-center rounded-full bg-low-contrast">
          <ProfileIcon className="h-32 w-32" />
        </figure>
        <ProfileContent ownerId={ownerId} ownerName={name} />
      </article>
    </section>
  );
};

export default UserPage;
