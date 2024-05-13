'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { useState } from 'react';

import { postMessage } from '../../api/messages';
import { Textarea } from '../Textarea';
import { textSchema } from './schema';
import { Popup } from '../Popup';
import { PopupContent } from './PopupContent';
import { Button } from '../Button';

type EmailFormProps = {
  event_id: string;
};

type Text = {
  text: string;
};

export const EmailForm: React.FC<EmailFormProps> = ({ event_id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState<number | undefined>(undefined);

  const formProps = useForm({
    resolver: yupResolver(textSchema),
    defaultValues: {
      text: '',
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formProps;

  const onSubmit = async (text: Text) => {
    const messageDataFormatted = {
      ...text,
      event_id,
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
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex flex-col">
          <Textarea
            register={register}
            type="text"
            name="text"
            label="Emailová zpráva"
            placeholder="Ahoj, můžeš mi poslat bližší informace..."
            errors={errors}
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
