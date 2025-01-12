import { NextPage } from 'next';

import { UserInfo } from '../../../components/UserInfo';
import { UserMessageBox } from './UserMessageBox';
import { Container } from '../../../components/Container';
import { MainHeading } from '../../../components/MainHeading';

const UserPage: NextPage = () => (
  <Container className="relative flex flex-col items-start px-4 md:flex-row md:px-0 gap-5 lg:gap-14">
    <div className="top-[28px] relative md:sticky block w-full md:max-w-lg lg:max-w-md">
      <MainHeading className="md:text-start">Zprávy</MainHeading>
      <UserInfo />
    </div>
    <UserMessageBox />
  </Container>
);

export default UserPage;
