'use client';

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setError] = useState('');

  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await signIn('credentials', {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (response?.status === 200) {
        router.push('/');
      }
    } catch (error) {
      setError('Špatný email nebo heslo.');
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
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className="mb-4 w-full">
          Password:
          <input
            className="mt-2 w-full border border-black p-2"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
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
      {errorMessage && <p className="pt-5 text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default LoginPage;
