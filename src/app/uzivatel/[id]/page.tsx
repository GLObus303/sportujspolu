import { NextPage } from 'next';

import { UserInfo } from './UserInfo';
import { UserMessageBox } from './UserMessageBox';

const UserPage: NextPage = () => (
  <div className="relative flex flex-col items-start px-4 md:flex-row md:px-0 gap-5 lg:gap-14">
    <div className="top-[28px] relative md:sticky block w-full md:max-w-lg lg:max-w-md">
      <h1 className="mt-24 px-28 text-center text-2xl font-medium leading-normal md:mt-14 md:px-0 md:text-start lg:text-4xl">
        Můj profil
      </h1>
      <UserInfo />
    </div>
    <UserMessageBox />
  </div>
);

export default UserPage;
