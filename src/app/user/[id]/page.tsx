'use client';

import { useAuth } from '../../../context/AuthContext';

const User = () => {
  const { user } = useAuth();
  const { name, email } = user;

  return (
    <div className="mt-20">
      User: {name} - {email}
    </div>
  );
};

export default User;
