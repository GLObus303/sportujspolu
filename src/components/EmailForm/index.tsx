'use client';

import { useState, useEffect, useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';

import { useAuth } from '../../context/AuthContext';
import { useAuthModal } from '../../context/AuthModalContext';
import { sendEmailRequest } from '../../api/messages';
import { Textarea } from '../Textarea';
import { emailSchema } from './schema';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../../constants';

type EmailFormProps = {
  eventId: string;
};

type EmailData = {
  text: string;
};

const getTitle = (status: number | undefined) => {
  switch (status) {
    case 401:
      return ERROR_MESSAGE.AUTHENTICATION_REQUIRED;
    case 409:
      return ERROR_MESSAGE.REQUEST_ALREADY_SENT;
    case 200:
      return SUCCESS_MESSAGE.REQUEST_SENT;
    default:
      return ERROR_MESSAGE.GENERIC_ERROR;
  }
};

export const EmailForm: React.FC<EmailFormProps> = ({ eventId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);
  const [status, setStatus] = useState<number>();
  const [pendingEmailData, setPendingEmailData] = useState<EmailData | null>(
    null,
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
        const response = await sendEmailRequest(messageDataFormatted);

        if (response && !response.error) {
          setStatus(200);
        }

        if (response?.error) {
          setStatus(response.error?.status);
        }
      } finally {
        setIsModalInfoOpen(true);
        setIsLoading(false);
      }
    },
    [eventId],
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

  const handleModalClose = () => {
    setIsModalInfoOpen(false);
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
            label="Zpráva pro pořadatele"
            placeholder="Ahoj, můžeš mi poslat bližší informace..."
          />
          <Button type="submit" disabled={isLoading} className="ml-auto mt-5">
            Zúčastnit se
          </Button>
        </form>
      </FormProvider>

      {isModalInfoOpen && (
        <Modal onClose={handleModalClose}>
          {getTitle(status)}
          <Button className="mx-auto mt-5" onClick={handleModalClose}>
            Zavřít
          </Button>
        </Modal>
      )}
    </>
  );
};
