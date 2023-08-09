'use client';

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (!result?.error) {
      router.push('/');
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form
        className="mt-32 flex flex-col border border-black p-4 md:w-1/3"
        onSubmit={handleSubmit}
      >
        <label className="mb-4 w-full">
          Email:
          <input
            className="mt-2 w-full border border-black p-2"
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <label className="mb-4 w-full">
          Password:
          <input
            className="mt-2 w-full border border-black p-2"
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
        <button
          className="mt-4 border border-black px-4 py-2 hover:bg-gray-100 hover:text-green-500"
          type="submit"
        >
          Log In
        </button>
      </form>
      {error && <p className="pt-5 text-red-500">Špatný email nebo heslo.</p>}
    </div>
  );
};

export default LoginPage;
