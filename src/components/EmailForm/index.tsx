'use client';

import { useState, useEffect, useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';

import { useAuth } from '../../context/AuthContext';
import { useAuthModal } from '../../context/AuthModalContext';
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
    null
  );

  const { isUserLoggedIn } = useAuth();
  const { openAuthModal } = useAuthModal();

  const formProps = useForm<EmailData>({
    resolver: yupResolver(emailSchema),
    defaultValues: {
      text: '',
    },
  });

  const submitMessage = useCallback(
    async (emailData: EmailData) => {
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
        setIsPopupInfoOpen(true);
        setIsLoading(false);
      }
    },
    [eventId]
  );

  useEffect(() => {
    if (isUserLoggedIn && pendingEmailData) {
      submitMessage(pendingEmailData);
    }
  }, [isUserLoggedIn, pendingEmailData, submitMessage]);

  const onSubmit = async (emailData: EmailData) => {
    if (!isUserLoggedIn) {
      setPendingEmailData(emailData);
      openAuthModal();

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
