'use client';

import { useState } from 'react';
import { ReactNode } from 'react'; // Add this import
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';

import { postMessage } from '../../api/messages';
import { Textarea } from '../Textarea';
import { emailSchema } from './schema';
import { Popup } from '../Popup';
import { PopupContent } from './PopupContent';
import { Button } from '../Button';

type EmailFormProps = {
  eventId: string;
};

type EmailData = {
  text: string;
};

export const EmailForm: React.FC<EmailFormProps> = ({ eventId }): ReactNode => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState<number>();

  const formProps = useForm({
    resolver: yupResolver(emailSchema),
    defaultValues: {
      text: '',
    },
  });

  const onSubmit = async (emailData: EmailData) => {
    const messageDataFormatted = {
      ...emailData,
      eventId,
    };

    setIsLoading(true);

    try {
      const response = await postMessage(messageDataFormatted);

      if (response && !response.error) {
        setStatus(200);
      }

      if (response?.error) {
        setStatus(response.error?.status);
      }
    } finally {
      setIsLoading(false);
      setIsModalOpen(true);
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <FormProvider {...formProps}>
        <form
          onSubmit={formProps.handleSubmit(onSubmit)}
          className="mt-6 flex flex-col"
        >
          <Textarea
            name="text"
            label="Emailová zpráva"
            placeholder="Ahoj, můžeš mi poslat bližší informace..."
          />
          <Button type="submit" disabled={isLoading} className="ml-auto mt-5">
            Zúčastnit se
          </Button>
        </form>
      </FormProvider>
      {isModalOpen && (
        <Popup onClose={handleClose}>
          <PopupContent status={status} onClose={handleClose} />
        </Popup>
      )}
    </>
  );
};
