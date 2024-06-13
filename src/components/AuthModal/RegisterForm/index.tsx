'use client';

import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';

import { registerSchema } from './schema';
import { registerUser } from '../../../api/user';
import { Loading } from '../../Loading';
import { Input } from '../../Input';
import { PasswordInput } from '../../PasswordInput';
import { AriaLiveErrorMessage } from '../../AriaLiveErrorMessage';
import { RegisterFormData } from '../../../types/Form';
import { AuthWrapper } from '../../AuthWrapper';
import { Button } from '../../Button';

type RegisterFormProps = {
  onToggleForm: () => void;
};

export const RegisterForm: React.FC<RegisterFormProps> = ({ onToggleForm }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const formProps = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (formData: RegisterFormData) => {
    setIsLoading(true);

    try {
      await registerUser(formData, (error: any) =>
        setErrorMessage(error.message),
      );

      onToggleForm();
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
      onToggleForm={onToggleForm}
      redirectButtonText="Přihlaš se!"
    >
      <FormProvider {...formProps}>
        <form
          className="mt-5 flex w-full max-w-sm flex-col items-center text-start text-base"
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
          <hr className="mt-10 w-full border-t border-low-contrast md:w-100" />
        </form>
      </FormProvider>
    </AuthWrapper>
  );
};
