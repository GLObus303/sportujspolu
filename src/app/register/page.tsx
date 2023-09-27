'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import cx from 'classnames';
import Link from 'next/link';

import { api } from '../../client';
import { Loading } from '../../components/ui/Loading';
import { GoogleIcon } from '../../components/ui/icons/GoogleIcon';
import { FacebookIcon } from '../../components/ui/icons/FacebookIcon';
import { EyeIcon } from '../../components/ui/icons/EyeIcon';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errorMessage, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const isDisabled = Boolean(emailError || passwordError || passwordError);

  const validateEmail = () => {
    if (
      !formData.email ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
      setEmailError('Zadejte prosím validní email.');

      return false;
    }
    setEmailError('');
    setError('');

    return true;
  };

  const validatePassword = () => {
    if (!formData.password || formData.password.length < 3) {
      setPasswordError('Password should be at least 3 characters');

      return false;
    }
    setPasswordError('');
    setError('');

    return true;
  };

  const validateForm = () => {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    return isEmailValid && isPasswordValid;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await api.post('user/register', {
        json: formData,
      });

      if (response?.status === 200) {
        router.push('/login');
      }
    } catch (error) {
      setError('Správně vyplňte údaje');
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center pt-20">
      <h1 className="text-xl font-semibold">
        Registrace do <span className="text-primary">SportujSpolu</span>
      </h1>
      <p className="mt-4">Chci se přihlásit přes:</p>
      <ul className="my-5 flex">
        <li>
          <button onClick={() => window.alert('🚀 Feature coming soon! 🌟')}>
            <FacebookIcon className="mx-3 transform transition-transform duration-200 ease-in-out hover:scale-115 hover:fill-primary" />
          </button>
        </li>
        <li>
          <button onClick={() => window.alert('🚀 Feature coming soon! 🌟')}>
            <GoogleIcon className="mx-3 transform transition-transform duration-200 ease-in-out hover:scale-115 hover:fill-primary" />
          </button>
        </li>
      </ul>
      <hr className="w-100 border-t border-light-gray" />
      {!errorMessage ? (
        <p className="pt-5">Zadat registrační údaje:</p>
      ) : (
        <p className="mt-5 text-secondary">{errorMessage}</p>
      )}
      <form className="mt-5 flex flex-col items-center" onSubmit={handleSubmit}>
        <label className="w-full">
          <span className="sr-only">Jméno</span>
          <input
            className={cx(
              'w-full border px-5 py-3 placeholder-dark-gray focus:outline-none',
              {
                'border-primary': formData.name,
                'border-secondary': errorMessage,
                'border-medium-gray': !formData.name,
              },
            )}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
        </label>
        <label className="w-full">
          <span className="sr-only">Email</span>
          <input
            className={cx(
              'mt-8 w-full border px-5 py-3 placeholder-dark-gray focus:outline-none',
              {
                'border-primary':
                  formData.email && !emailError && !errorMessage,
                'border-red-500': emailError || errorMessage,
                'border-medium-gray': !emailError && !formData.email,
              },
            )}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={validateEmail}
            placeholder="Email"
            required
          />
          {emailError && (
            <p className="absolute pt-1 text-xs text-secondary">{emailError}</p>
          )}
        </label>
        <label className="mb-8 w-full">
          <span className="sr-only">Heslo</span>
          <input
            className={cx(
              'mt-8 w-full border py-3 pl-5 pr-10 placeholder-dark-gray focus:outline-none',
              {
                'border-primary':
                  formData.password && !passwordError && !errorMessage,
                'border-red-500': passwordError || errorMessage,
                'border-medium-gray': !passwordError && !formData.password,
              },
            )}
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            onBlur={validatePassword}
            placeholder="Password"
            required
          />
          <button onClick={() => setShowPassword(!showPassword)} type="button">
            <EyeIcon
              className={cx(
                'transfotm absolute h-5 w-5 -translate-x-8 -translate-y-3 fill-light-gray',
                { 'fill-primary': showPassword },
              )}
            />
          </button>
          {passwordError && (
            <p className="absolute pt-1 text-xs text-secondary">
              {passwordError}
            </p>
          )}
        </label>
        {!isLoading ? (
          <button
            disabled={isDisabled}
            className={cx(
              'w-40 rounded-md px-5 py-2 text-white hover:text-primary',
              {
                'bg-black': !isDisabled,
                'bg-light-gray hover:text-white': isDisabled,
              },
            )}
          >
            Registrovat
          </button>
        ) : (
          <Loading />
        )}
        <hr className="mt-8 w-100 border-t border-light-gray" />
      </form>
      <p className="pt-5 font-light">
        Už máš účet?{' '}
        <Link href="/login" className="font-medium hover:text-primary">
          Přihlaš se!
        </Link>
      </p>
    </section>
  );
};

export default Registration;
