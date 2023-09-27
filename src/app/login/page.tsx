'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import nookies from 'nookies';
import Link from 'next/link';
import cx from 'classnames';

import { authUser } from '../../client';
import { useAuth } from '../../context/AuthContext';
import { SECONDS_IN_WEEK } from '../../utils/constants';
import { Loading } from '../../components/ui/Loading';
import { GoogleIcon } from '../../components/ui/icons/GoogleIcon';
import { FacebookIcon } from '../../components/ui/icons/FacebookIcon';
import { EyeIcon } from '../../components/ui/icons/EyeIcon';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const { login } = useAuth();

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
      const response = await authUser(formData.email, formData.password);

      if (response.token) {
        nookies.set(null, 'token', response.token, {
          path: '/',
          maxAge: SECONDS_IN_WEEK,
        });
        login(response.token);
        router.push('/');
      }
    } catch (error: any) {
      if (error.response.status === 400) {
        setError('Špatně zadané přihlašovací údaje.');
      } else {
        setError('Něco se pokazilo. Zkuste to prosím znovu později.');
      }
      setIsLoading(false);
    }
  };

  const isDisabled = Boolean(emailError || passwordError || passwordError);

  return (
    <section className="flex flex-col items-center justify-center pt-20">
      <h1 className="text-xl font-semibold">
        Přihlášení se do <span className="text-primary">SportujSpolu</span>
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
        <p className="pt-5">Zadat přihlašovací údaje:</p>
      ) : (
        <p className="mt-5 text-secondary">{errorMessage}</p>
      )}
      <form className="mt-5 flex flex-col items-center" onSubmit={handleSubmit}>
        <label className="w-full">
          <span className="sr-only">Email</span>
          <input
            className={cx(
              'w-full border px-5 py-3 placeholder-dark-gray focus:outline-none',
              {
                'border-primary':
                  formData.email && !emailError && !errorMessage,
                'border-secondary': emailError || errorMessage,
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
              'mt-8 w-full border px-5 py-3 placeholder-dark-gray focus:outline-none',
              {
                'border-primary':
                  formData.password && !passwordError && !errorMessage,
                'border-red-500': passwordError || errorMessage,
                'border-medium-gray': !emailError && !formData.email,
              },
            )}
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            onBlur={() => validatePassword()}
            placeholder="Heslo"
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
              'h-11 w-40 rounded-md py-2 text-white hover:text-primary',
              {
                'bg-black': !isDisabled,
                'bg-light-gray hover:text-white': isDisabled,
              },
            )}
          >
            Přihlásit se
          </button>
        ) : (
          <Loading />
        )}
        <hr className="mt-8 w-100 border-t border-light-gray" />
      </form>

      <p className="pt-5 font-light">
        Ještě nemáš účet?{' '}
        <Link href="/register" className="font-medium hover:text-primary">
          Vytvoř si profil!
        </Link>
      </p>
    </section>
  );
};

export default LoginPage;
