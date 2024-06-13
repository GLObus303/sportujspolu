import { NextPage } from 'next';

import { ProfileContent } from './ProfileContent';
import { ProfileIcon } from '../../../components/icons/ProfileIcon';

const UserPage: NextPage = () => (
  <section className="mt-20">
    <article className="relative mt-40 flex flex-col items-center justify-center bg-card shadow-md">
      <figure className="absolute -top-24 left-1/2 flex h-48 w-48 -translate-x-1/2 transform items-center justify-center rounded-full bg-low-contrast">
        <ProfileIcon className="h-32 w-32" />
      </figure>
      <ProfileContent />
    </article>
  </section>
);

export default UserPage;
