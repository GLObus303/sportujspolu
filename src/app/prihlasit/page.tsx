'use client';

import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
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
import { SECONDS_IN_WEEK, Routes, ERROR_MESSAGE } from '../../utils/constants';
import { LoginFormData } from '../../types/Form';
import { AuthWrapper } from '../../components/AuthWrapper';
import { Button } from '../../components/Button';

const LoginPage: NextPage = () => {
  const router = useRouter();
  const { login } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const formProps = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (formData: LoginFormData) => {
    setIsLoading(true);

    try {
      const response = await loginUser(formData);

      if (response?.error?.status === 400) {
        setErrorMessage(ERROR_MESSAGE.BAD_CREDENTIALS_CS);

        return;
      }

      if (!response?.token || !!response?.error) {
        setErrorMessage(ERROR_MESSAGE.GENERIC_ERROR);

        return;
      }

      nookies.set(null, 'token', response.token, {
        path: Routes.DASHBOARD,
        maxAge: SECONDS_IN_WEEK,
      });

      login(response.token);
      router.push(Routes.DASHBOARD);
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
          onSubmit={formProps.handleSubmit(onSubmit)}
        >
          <Input type="email" name="email" label="Email" placeholder="Email" />
          <PasswordInput />
          <AriaLiveErrorMessage
            className="py-4 text-center"
            errorMessage={errorMessage}
          />
          {!isLoading ? (
            <Button type="submit" className="mt-5">
              Přihlásit se
            </Button>
          ) : (
            <Loading className="mt-5" />
          )}
          <hr className="mt-10 w-100 border-t border-low-contrast" />
        </form>
      </FormProvider>
    </AuthWrapper>
  );
};

export default LoginPage;
