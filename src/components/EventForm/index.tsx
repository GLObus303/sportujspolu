'use client';

import { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import cx from 'classnames';
import { format } from 'date-fns';

import { useAuth } from '../../context/AuthContext';
import { Input } from '../Input';
import { Select } from '../Select';
import { Textarea } from '../Textarea';
import { deleteEvent, postEvent, updateEvent } from '../../api/events';
import { eventSchema } from './schema';
import { Event } from '../../types/Event';
import {
  ERROR_MESSAGE,
  Routes,
  SUCCESS_EVENT,
  levelLabels,
  sportsOptions,
} from '../../constants';
import { DeleteIcon } from '../icons/DeleteIcon';
import { Popup } from '../Popup';
import { useAuthModal } from '../../context/AuthModalContext';
import { Button } from '../Button';

type EventFormProps = {
  event?: Event;
  dateTimeIso?: string;
};

const inputStyles = {
  outerClassName: 'relative flex w-full flex-row justify-between',
  className: 'border-b',
  labelClassName: 'w-3/5 text-start text-normal pt-3 md:pt-2 md:text-xl',
};

type CreateEventValues = {
  name: string;
  description: string;
  sport: string;
  date: Date;
  location: string;
  level: string;
  price: number;
};

const getTitle = (status: number | undefined, isNewEvent?: boolean) => {
  switch (status) {
    case 401:
      return ERROR_MESSAGE.AUTHENTICATION_REQUIRED;
    case 200:
      return isNewEvent ? SUCCESS_EVENT.NEW_EVENT : SUCCESS_EVENT.UPDATE_EVENT;
    default:
      return ERROR_MESSAGE.GENERIC_ERROR;
  }
};

export const EventForm: React.FC<EventFormProps> = ({ event }) => {
  const {
    user: { email },
  } = useAuth();
  const { openAuthModal } = useAuthModal();
  const router = useRouter();

  const [status, setStatus] = useState<number>();
  const [isDeleteForeverVisible, setIsDeleteForeverVisible] = useState(false);
  const [isPopupInfoOpen, setIsPopupInfoOpen] = useState(false);

  const isUserLoggedIn = !!email;

  useEffect(() => {
    if (!isUserLoggedIn) {
      openAuthModal();
    }
  }, [isUserLoggedIn]);

  const formProps = useForm<CreateEventValues>({
    resolver: yupResolver(eventSchema),
    defaultValues: {
      name: event?.name,
      description: event?.description,
      sport: event?.sport,
      location: event?.location,
      level: event?.level,
      price: event?.price,
    },
  });
  const { watch } = formProps;

  const isNewEvent = !event?.id;

  const onSubmit = async (data: CreateEventValues) => {
    const dateTimeIso = format(new Date(data.date), "yyyy-MM-dd'T'HH:mm:ss'Z'");

    const eventDataFormatted = {
      ...data,
      date: dateTimeIso,
    };

    const response = isNewEvent
      ? await postEvent(eventDataFormatted)
      : await updateEvent(eventDataFormatted, event.id);

    if (!response?.error) {
      setStatus(200);
    }

    if (response?.error) {
      setStatus(response.error?.status);
    }

    setIsPopupInfoOpen(true);
  };

  const toggleDeleteConfirmation = () => {
    setIsDeleteForeverVisible(!isDeleteForeverVisible);
  };

  const handleDelete = () => {
    deleteEvent(event?.id || '');
    router.push(Routes.DASHBOARD);
  };

  const handlePopupClose = () => {
    setIsPopupInfoOpen(false);
  };

  const watchedLevel = watch('level');

  return (
    <>
      <article className="relative mx-5 mr-0 mt-10 flex w-full max-w-xl flex-col rounded-md bg-card text-center shadow-md lg:text-start xl:mr-28 xl:mt-14 xl:px-0">
        <FormProvider {...formProps}>
          <form
            onSubmit={formProps.handleSubmit(onSubmit)}
            className="flex flex-col space-y-8 rounded-md bg-card p-7"
          >
            <Input
              type="name"
              name="name"
              label="Název události"
              placeholder="Název události"
              {...inputStyles}
            />
            <Textarea
              name="description"
              label="Popis"
              placeholder="Popis"
              {...inputStyles}
            />
            <Select
              name="sport"
              label="Sport"
              placeholder="Sport"
              options={sportsOptions}
            />
            <Input
              type="datetime-local"
              name="date"
              label="Kdy proběhne"
              placeholder="Kdy proběhne"
              {...inputStyles}
            />
            <Input
              type="text"
              name="location"
              label="Místo konání"
              placeholder="Místo konání"
              {...inputStyles}
            />
            <div className="flex w-full flex-row justify-between">
              <span className="text-normal mb-4 pt-3 md:pt-2 md:text-xl">
                Úroveň
              </span>
              <div className="mt-5 flex w-3/5 flex-wrap justify-end gap-4 md:justify-between">
                {Object.entries(levelLabels).map(([value, label]) => (
                  <label
                    key={value}
                    className="flex cursor-pointer items-center"
                  >
                    <input
                      {...formProps.register('level')}
                      type="radio"
                      value={value}
                      className="h-9 w-36 focus:outline-primary"
                    />
                    <span
                      className={`absolute w-36 rounded-full py-2 text-center leading-5 ${
                        watchedLevel === value
                          ? 'border border-pistachio bg-pistachio'
                          : 'border border-low-contrast bg-card hover:border-primary'
                      }`}
                    >
                      {label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <Input
              type="number"
              name="price"
              label="Cena v Kč"
              placeholder="Cena"
              {...inputStyles}
            />
            <div className="ml-auto flex flex-row items-center justify-center">
              {isDeleteForeverVisible ? (
                <Popup onClose={toggleDeleteConfirmation}>
                  <h2 className="my-5">Po potvrzení nelze akci vrátit zpět.</h2>
                  <Button className="mt-5" onClick={handleDelete}>
                    Smazat navždy
                  </Button>
                </Popup>
              ) : (
                <>
                  <button
                    type="button"
                    className={cx(
                      'mx-11 flex flex-row items-center fill-button py-1 text-sm hover:fill-secondary',
                      { hidden: !event?.id },
                    )}
                    aria-label="Smazat událost"
                    onClick={toggleDeleteConfirmation}
                  >
                    <DeleteIcon className="mt-0.5 hover:animate-shake motion-reduce:hover:animate-none" />
                  </button>
                  <button
                    type="submit"
                    className="whitespace-nowrap rounded-md bg-button px-5 py-2 text-white hover:text-primary"
                  >
                    Odeslat
                  </button>
                </>
              )}
            </div>
          </form>
        </FormProvider>
      </article>
      {isPopupInfoOpen && (
        <Popup onClose={handlePopupClose}>
          {getTitle(status, isNewEvent)}
          {status === 401 && (
            <Button
              className="mt-5"
              onClick={() => {
                openAuthModal();
                handlePopupClose();
              }}
            >
              Přihlásit se
            </Button>
          )}
        </Popup>
      )}
    </>
  );
};
