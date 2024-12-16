'use client';

import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import cx from 'classnames';
import { format } from 'date-fns';

import { Input } from '../Input';
import { Select } from '../Select';
import { Textarea } from '../Textarea';
import { deleteEvent, postEvent, updateEvent } from '../../api/events';
import { eventSchema } from './schema';
import { Event } from '../../types/Event';
import { Routes, levelLabels, sportsOptions } from '../../constants';
import { DeleteIcon } from '../icons/DeleteIcon';

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

export const EventForm: React.FC<EventFormProps> = ({ event }) => {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const router = useRouter();

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

  const onSubmit = (data: CreateEventValues) => {
    const dateTimeIso = format(new Date(data.date), "yyyy-MM-dd'T'HH:mm:ss'Z'");

    const eventDataFormatted = {
      ...data,
      date: dateTimeIso,
    };

    if (event?.id) {
      updateEvent(eventDataFormatted, event.id);
    } else {
      postEvent(eventDataFormatted);
    }
  };

  const openDeleteConfirmation = () => {
    setIsConfirmationModalOpen(!isConfirmationModalOpen);
  };

  const handleDelete = () => {
    deleteEvent(event?.id || '');
    router.push(Routes.DASHBOARD);
  };

  const watchedLevel = watch('level');

  return (
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
                <label key={value} className="flex cursor-pointer items-center">
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
            {isConfirmationModalOpen ? (
              <button
                type="button"
                onClick={handleDelete}
                className="flex flex-row whitespace-nowrap rounded-md border border-secondary px-5 py-2 text-base text-secondary hover:text-secondary"
              >
                <DeleteIcon className="mr-2.5 fill-secondary hover:animate-shake motion-reduce:hover:animate-none" />{' '}
                Smazat navždy
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className={cx(
                    'mx-11 flex flex-row items-center fill-button py-1 text-sm hover:fill-secondary',
                    { hidden: !event?.id },
                  )}
                  aria-label="Smazat událost"
                  onClick={openDeleteConfirmation}
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
  );
};
