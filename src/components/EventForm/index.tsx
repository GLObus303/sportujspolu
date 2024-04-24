'use client';

import { format } from 'date-fns';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../Input';
import { Select } from '../Select';
import { Textarea } from '../Textarea';
import { postEvent, updateEvent } from '../../api/events';
import { eventSchema } from './schema';
import { Event } from '../../types/Event';
import { levels, sports } from '../../utils/constants';

type EventFormProps = {
  event?: Event;
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
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = formProps;

  const onSubmit = async (data: CreateEventValues) => {
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

  const watchedLevel = watch('level');

  return (
    <article className="relative mx-5 mr-0 mt-10 flex w-full max-w-xl flex-col rounded-md bg-card text-center shadow-md lg:text-start xl:mr-28 xl:mt-14 xl:px-0">
      <FormProvider {...formProps}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-8 rounded-md bg-card p-7"
        >
          <Input
            register={register}
            type="name"
            name="name"
            label="Název události"
            placeholder="Název události"
            errors={errors}
            {...inputStyles}
          />
          <Textarea
            register={register}
            type="text"
            name="description"
            label="Popis"
            placeholder="Popis"
            errors={errors}
          />
          <Select
            register={register}
            name="sport"
            label="Sport"
            placeholder="Sport"
            options={sports}
            errors={errors}
          />
          <Input
            register={register}
            type="datetime-local"
            name="date"
            label="Kdy proběhne"
            placeholder="Kdy proběhne"
            errors={errors}
            {...inputStyles}
          />
          <Input
            register={register}
            type="text"
            name="location"
            label="Místo konání"
            placeholder="Místo konání"
            errors={errors}
            {...inputStyles}
          />
          <div className="flex w-full flex-row justify-between">
            <span className="text-normal mb-4 pt-3 md:pt-2 md:text-xl">
              Úroveň
            </span>
            <div className="mt-5 flex w-3/5 flex-wrap justify-end gap-4 md:justify-between">
              {levels.map((level) => (
                <label
                  key={level.value}
                  className="flex cursor-pointer items-center"
                >
                  <input
                    {...register('level')}
                    type="radio"
                    value={level.value}
                    className="h-9 w-36 focus:outline-primary"
                  />
                  <span
                    className={`absolute w-36 rounded-full py-2 text-center leading-5 ${
                      watchedLevel === level.value
                        ? 'border border-pistachio bg-pistachio'
                        : 'border border-low-contrast bg-card hover:border-primary'
                    }`}
                  >
                    {level.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <Input
            register={register}
            type="number"
            name="price"
            label="Cena v Kč"
            placeholder="Cena"
            errors={errors}
            {...inputStyles}
          />
          <button
            type="submit"
            className="ml-auto whitespace-nowrap rounded-md bg-button px-5 py-2 text-white hover:text-primary"
          >
            Odeslat
          </button>
        </form>
      </FormProvider>
    </article>
  );
};
