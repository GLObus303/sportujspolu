import { NextPage } from 'next';

import { ProfileContent } from './ProfileContent';
import { UserInfo } from './UserInfo';
import { ProfileIcon } from '../../../components/icons/ProfileIcon';

const UserPage: NextPage = () => (
  <section className="relative flex h-full flex-col md:flex-row px-5">
    <article className="relative md:sticky top-[208px] md:mt-[150px] block h-fit w-full items-center justify-center rounded-md bg-card shadow-md mb-40">
      <figure className="absolute -top-24 left-1/2 flex h-48 w-48 -translate-x-1/2 transform items-center justify-center rounded-full bg-low-contrast">
        <ProfileIcon className="h-32 w-32" />
      </figure>
      <UserInfo />
    </article>
    <ProfileContent />
  </section>
);

export default UserPage;
