'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { useState } from 'react';
import cx from 'classnames';

import { Textarea } from '../Textarea';
import { emailSchema } from './schema';

type EmailBody = {
  email_body: string;
};

type EmailFormProps = {
  eventName?: string;
};

export const EmailForm: React.FC<EmailFormProps> = ({ eventName }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailData, setEmailData] = useState({
    subject: '',
    mail: '',
    body: { email_body: '' },
  });

  const formProps = useForm<EmailBody>({
    resolver: yupResolver(emailSchema),
    defaultValues: {
      email_body: '',
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formProps;

  const onSubmit = async (body: EmailBody) => {
    const subject = `Registrace na sportovní akci ${eventName}`;
    const mail = 'john.doe';

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body.email_body);

    setEmailData({ subject, mail, body });

    const mailLink = document.createElement('a');
    mailLink.href = `mailto:${mail}?subject=${encodedSubject}&body=${encodedBody}`;
    mailLink.click();

    setTimeout(() => {
      if (window?.document.hasFocus()) {
        setIsModalOpen(!isModalOpen);
      }
    }, 1000);
  };

  return (
    <FormProvider {...formProps}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cx('mt-6 flex flex-col', {
          hidden: isModalOpen,
        })}
      >
        <Textarea
          register={register}
          type="text"
          name="email_body"
          label="Emailová zpráva"
          placeholder="Ahoj, můžeš mi poslat bližší informace..."
          errors={errors}
        />
        <button
          type="submit"
          className="ml-auto mt-5 h-11 w-40 rounded-md bg-button py-2 text-white hover:text-primary focus:text-primary"
        >
          Zúčastnit se
        </button>
      </form>
      <article
        className={cx(
          'relative mt-10 flex flex-col items-center justify-center bg-card p-7 shadow-md',
          {
            hidden: !isModalOpen,
          }
        )}
      >
        <h3 className="mb-6 max-w-md text-center text-lg text-secondary">
          Vypadá to, že váš emailový klient není správně nastaven. Prosím,
          zadejte údaje ručně.
        </h3>
        <table className="text-s mb-6 w-full font-medium">
          <tbody>
            <tr className="border-b border-low-contrast">
              <td className="py-2 md:py-4">Email</td>
              <td className="py-2 font-light md:py-4">{emailData.mail}</td>
            </tr>
            <tr className="border-b border-low-contrast">
              <td className="py-2 md:py-4">Předmět emailu:</td>
              <td className="py-2 font-light md:py-4">{emailData.subject}</td>
            </tr>
            <tr className="border-b border-low-contrast">
              <td className="py-2 md:py-4">Obsah emailu:</td>
              <td className="max-w-md py-2 font-light md:py-4">
                {emailData.body.email_body}
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </FormProvider>
  );
};
