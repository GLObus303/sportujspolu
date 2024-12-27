'use client';

import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import nookies from 'nookies';

import { useAuth } from '../../../context/AuthContext';
import { loginSchema } from './schema';
import { loginUser } from '../../../api/user';
import { Loading } from '../../Loading';
import { AriaLiveErrorMessage } from '../../AriaLiveErrorMessage';
import { Input } from '../../Input';
import { PasswordInput } from '../../PasswordInput';
import { SECONDS_IN_WEEK, ERROR_MESSAGE } from '../../../constants';
import { LoginFormData } from '../../../types/Form';
import { AuthWrapper } from '../../AuthWrapper';
import { Button } from '../../Button';

type LoginFormProps = {
  onToggleForm: () => void;
};

export const LoginForm: React.FC<LoginFormProps> = ({ onToggleForm }) => {
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
        maxAge: SECONDS_IN_WEEK,
      });

      login(response.token);
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
      onToggleForm={onToggleForm}
      redirectButtonText="Vytvoř si profil!"
    >
      <FormProvider {...formProps}>
        <form
          className="mt-5 flex w-full max-w-sm flex-col items-center text-start text-base"
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
          <hr className="mt-10 w-full border-t border-low-contrast md:w-100" />
        </form>
      </FormProvider>
    </AuthWrapper>
  );
};
