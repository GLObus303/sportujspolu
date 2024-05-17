'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
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
import { RegisterFormData } from '../../types/Form';
import { AuthWrapper } from '../../components/AuthWrapper';
import { Button } from '../../components/Button';

const RegisterPage: NextPage = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const formProps = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (formData: RegisterFormData) => {
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

  return (
    <AuthWrapper
      headingText="Registrace do"
      subtitleText="Chci se registrovat přes:"
      formText="registrační"
      redirectText="Už máš účet?"
      redirectRoute={Routes.LOGIN}
      redirectLinkText="Přihlaš se!"
    >
      <FormProvider {...formProps}>
        <form
          className="mt-5 flex w-full max-w-sm flex-col items-center"
          onSubmit={formProps.handleSubmit(onSubmit)}
        >
          <Input type="text" name="name" label="Jméno" placeholder="Jméno" />
          <Input type="email" name="email" label="Email" placeholder="Email" />
          <PasswordInput />
          <PasswordInput label="Potvrzení hesla" name="passwordConfirmation" />
          <AriaLiveErrorMessage
            className="py-4 text-center"
            errorMessage={errorMessage}
          />
          {!isLoading ? (
            <Button type="submit" className="mt-5">
              Registrovat
            </Button>
          ) : (
            <Loading className="mt-5" />
          )}
          <hr className="mt-10 w-full border-t border-low-contrast" />
        </form>
      </FormProvider>
    </AuthWrapper>
  );
};

export default RegisterPage;
