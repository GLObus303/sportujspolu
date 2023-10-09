import cx from 'classnames';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import nookies from 'nookies';

import { schema } from './schema';
import { useAuth } from '../../../context/AuthContext';
import { authUser } from '../../../api/user';
import { Loading } from '../../../components/ui/Loading';
import { AriaLiveErrorMessage } from '../../../components/AriaLiveErrorMessage';
import { Input } from '../../../components/Input';
import { SECONDS_IN_WEEK, Routes } from '../../../utils/constants';
import { FormData } from '../../../types';

export const SignInForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isVisiblePassword, setVisiblePassword] = useState(false);

  const router = useRouter();

  const { login } = useAuth();

  const onSubmit = async (formData: FormData) => {
    setIsLoading(true);

    try {
      const response = (await authUser(formData, (error: any) =>
        setErrorMessage(error.message),
      )) as { token: string };
      if (response.token) {
        nookies.set(null, 'token', response.token, {
          path: Routes.DASHBOARD,
          maxAge: SECONDS_IN_WEEK,
        });
        login(response.token);
        router.push(Routes.DASHBOARD);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const watchedEmail = watch('email', '');
  const watchedPassword = watch('password', '');

  return (
    <form
      className="mt-5 flex w-full max-w-sm flex-col items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        register={register}
        type="email"
        name="email"
        placeholder="Email"
        errors={errors}
        watchedValue={watchedEmail}
      />
      <Input
        register={register}
        isPassword
        name="password"
        placeholder="Heslo"
        errors={errors}
        watchedValue={watchedPassword}
        isVisiblePassword={isVisiblePassword}
        togglePasswordVisibility={() => setVisiblePassword(!isVisiblePassword)}
      />
      {!isLoading ? (
        <button
          type="submit"
          className={cx(
            'h-11 w-40 rounded-md bg-black py-2 text-white hover:text-primary focus:text-primary',
          )}
        >
          Přihlásit se
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
      <hr className="mt-10 w-100 border-t border-light-gray" />
    </form>
  );
};
