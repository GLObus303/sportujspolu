'use client';

import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';

import { useAuth } from '../../context/AuthContext';
import { useEntryModal } from '../../context/EntryModalContext';
import { postMessage } from '../../api/messages';
import { Textarea } from '../Textarea';
import { emailSchema } from './schema';
import { Button } from '../Button';
import { Popup } from './Popup';

type EmailFormProps = {
  eventId: string;
};

type EmailData = {
  text: string;
};

export const EmailForm: React.FC<EmailFormProps> = ({ eventId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPopupInfoOpen, setIsPopupInfoOpen] = useState(false);
  const [status, setStatus] = useState<number>();
  const [pendingEmailData, setPendingEmailData] = useState<EmailData | null>(
    null,
  );

  const { isUserLoggedIn } = useAuth();

  const submitMessage = async (emailData: EmailData) => {
    const messageDataFormatted = {
      ...emailData,
      event_id: eventId,
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
      setIsPopupInfoOpen(true);
      setIsLoading(false);
    }
  };

  const { openEntryModal } = useEntryModal({
    onSignedUp: async () => {
      if (pendingEmailData) {
        await submitMessage(pendingEmailData);
        setPendingEmailData(null);
      }
    },
  });

  const formProps = useForm<EmailData>({
    resolver: yupResolver(emailSchema),
    defaultValues: {
      text: '',
    },
  });

  const onSubmit = async (emailData: EmailData) => {
    if (!isUserLoggedIn) {
      setPendingEmailData(emailData);
      openEntryModal();

      return;
    }

    await submitMessage(emailData);
  };

  const handlePopupClose = () => {
    setIsPopupInfoOpen(false);
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

      {isPopupInfoOpen && <Popup status={status} onClose={handlePopupClose} />}
    </>
  );
};
