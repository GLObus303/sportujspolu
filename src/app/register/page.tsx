'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { api } from '../api/client';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
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
      const response = await api.post('user/register', {
        json: formData,
      });

      if (response?.status === 200) {
        router.push('/login');
      }
    } catch (error) {
      setError('Správně vyplňte údaje');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form
        className="mt-32 flex flex-col border border-black p-4 md:w-1/3"
        onSubmit={handleSubmit}
      >
        <label className="mb-4 w-full">
          Name:
          <input
            className="mt-2 w-full border border-black p-2"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label className="mb-4 w-full">
          Email:
          <input
            className="mt-2 w-full border border-black p-2"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
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
          />
        </label>
        <button className="mt-4 border border-black px-4 py-2" type="submit">
          Register
        </button>
      </form>
      {errorMessage && <p className="pt-5 text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default Registration;
