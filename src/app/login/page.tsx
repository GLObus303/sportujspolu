'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import nookies from 'nookies';
import { NextPage } from 'next';

import { loginSchema } from './schema';
import { useAuth } from '../../context/AuthContext';
import { loginUser } from '../../api/user';
import { Loading } from '../../components/Loading';
import { AriaLiveErrorMessage } from '../../components/AriaLiveErrorMessage';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { SECONDS_IN_WEEK, Routes } from '../../utils/constants';
import { LoginFormData } from '../../types/Form';
import { AuthWrapper } from '../../components/AuthWrapper';

const LoginPage: NextPage = () => {
  const router = useRouter();
  const { login } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isVisiblePassword, setVisiblePassword] = useState(false);

  const formProps = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formProps;

  const onSubmit = async (formData: LoginFormData) => {
    setIsLoading(true);

    try {
      const response = await loginUser(formData, (error: any) =>
        setErrorMessage(error.message)
      );
      if (response?.token) {
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

  return (
    <AuthWrapper
      headingText="Přihlášení se do"
      subtitleText="Chci se přihlásit přes:"
      formText="přihlašovací"
      redirectText="Ještě nemáš účet?"
      redirectRoute={Routes.REGISTER}
      redirectLinkText="Vytvoř si profil!"
    >
      <FormProvider {...formProps}>
        <form
          className="mt-5 flex w-full max-w-sm flex-col items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            register={register}
            type="email"
            name="email"
            label="Email"
            placeholder="Email"
            errors={errors}
          />
          <PasswordInput
            register={register}
            errors={errors}
            isVisiblePassword={isVisiblePassword}
            togglePasswordVisibility={() =>
              setVisiblePassword(!isVisiblePassword)
            }
          />
          {!isLoading ? (
            <button
              type="submit"
              className="mt-5 h-11 w-40 rounded-md bg-button py-2 text-white hover:text-primary focus:text-primary"
            >
              Přihlásit se
            </button>
          ) : (
            <Loading className="mt-5" />
          )}
          {errorMessage && (
            <AriaLiveErrorMessage
              className="mt-8 text-center"
              errorMessage={errorMessage}
            />
          )}
          <hr className="mt-10 w-100 border-t border-low-contrast" />
        </form>
      </FormProvider>
    </AuthWrapper>
  );
};

export default LoginPage;
