'use client';

import cx from 'classnames';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { NextPage } from 'next';

import { registerSchema } from './schema';
import { registerUser } from '../../api/user';
import { Loading } from '../../components/Loading';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { AriaLiveErrorMessage } from '../../components/AriaLiveErrorMessage';
import { Routes } from '../../utils/constants';
import { FormData } from '../../types/Form';
import { AuthWrapper } from '../../components/AuthWrapper';

const RegisterPage: NextPage = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isVisiblePassword, setVisiblePassword] = useState(false);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (formData: FormData) => {
    setIsLoading(true);

    try {
      await registerUser(formData, (error: any) =>
        setErrorMessage(error.message)
      );

      router.push(Routes.LOGIN);
    } finally {
      setIsLoading(false);
    }
  };

  const watchName = watch('name', '');
  const watchedEmail = watch('email', '');
  const watchedPassword = watch('password', '');

  return (
    <AuthWrapper
      headingText="Registrace do"
      subtitleText="Chci se registrovat přes:"
      formText="registrační"
      redirectText="Už máš účet?"
      redirectRoute={Routes.LOGIN}
      redirectLinkText="Přihlaš se!"
    >
      <form
        className="mt-5 flex w-full max-w-sm flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          register={register}
          type="text"
          name="name"
          placeholder="Jméno"
          errors={errors}
          watchedValue={watchName}
        />
        <Input
          register={register}
          type="email"
          name="email"
          placeholder="Email"
          errors={errors}
          watchedValue={watchedEmail}
        />
        <PasswordInput
          register={register}
          errors={errors}
          watchedValue={watchedPassword}
          isVisiblePassword={isVisiblePassword}
          togglePasswordVisibility={() =>
            setVisiblePassword(!isVisiblePassword)
          }
        />
        {!isLoading ? (
          <button
            type="submit"
            className={cx(
              'w-40 rounded-md bg-black px-5 py-2 text-white hover:text-primary focus:text-primary'
            )}
          >
            Registrovat
          </button>
        ) : (
          <Loading />
        )}
        {errorMessage && (
          <AriaLiveErrorMessage
            className="mt-8 text-center"
            errorMessage={errorMessage}
          />
        )}
        <hr className="mt-10 w-full border-t border-light-gray" />
      </form>
    </AuthWrapper>
  );
};

export default RegisterPage;
