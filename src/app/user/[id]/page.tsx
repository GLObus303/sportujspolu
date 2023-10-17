'use client';

import { NextPage } from 'next';

import { useAuth } from '../../../context/AuthContext';

const UserPage: NextPage = () => {
  const { name, email } = useAuth().user;

  return (
    <div className="mt-20">
      User: {name} - {email}
    </div>
  );
};

export default UserPage;
