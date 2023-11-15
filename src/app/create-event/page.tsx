'use client';

import { NextPage } from 'next';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { postEvent } from '../../api/events';
import { eventSchema } from './schema';

const inputStyles = {
  outerClassName: 'relative flex w-full flex-row justify-between',
  className: 'border-b',
  labelClassName: 'w-3/5 text-start text-normal pt-3 md:pt-2 md:text-xl',
};

type DefaultValues = {
  name: string;
  description: string;
  sport: string;
  date: Date;
  location: string;
  level: string;
  price: number;
};

const CreateEventPage: NextPage = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(eventSchema),
    defaultValues: {
      name: '',
      description: '',
      sport: '',
      location: '',
      level: 'Any',
      price: 0,
    },
  });

  const onSubmit = async (data: DefaultValues) => {
    const dateTimeIso = format(new Date(data.date), "yyyy-MM-dd'T'HH:mm:ss'Z'");

    const eventDataFormatted = {
      ...data,
      date: dateTimeIso,
    };

    postEvent(eventDataFormatted);
  };

  const levels = [
    { value: 'Beginner', label: 'Začátečník' },
    { value: 'Advanced', label: 'Pokročilý' },
    { value: 'Expert', label: 'Expert' },
    { value: 'Any', label: 'Pro každého' },
  ];

  const watchedValues = watch();

  return (
    <div className="flex flex-col items-center justify-center lg:justify-between xl:flex-row xl:items-start">
      <h1 className="mt-24 px-20 text-center text-2xl font-medium leading-normal md:mt-14 md:px-0 xl:text-start xl:text-4xl">
        Vytvořit sportovní událost
      </h1>
      <article className="relative mx-5 mr-0 mt-10 flex w-full max-w-xl flex-col rounded-md bg-white text-center shadow-md lg:text-start xl:mr-28 xl:mt-14 xl:px-0">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-8 rounded-md bg-white p-7"
        >
          <Input
            register={register}
            type="name"
            name="name"
            label="Název události"
            placeholder="Název události"
            errors={errors}
            watchedValue={watchedValues.name}
            {...inputStyles}
          />
          <Textarea
            register={register}
            type="text"
            name="description"
            label="Popis"
            placeholder="Popis"
            errors={errors}
            watchedValue={watchedValues.description}
          />
          <Input
            register={register}
            type="text"
            name="sport"
            label="Sport"
            placeholder="Sport"
            errors={errors}
            watchedValue={watchedValues.sport}
            {...inputStyles}
          />
          <Input
            register={register}
            type="datetime-local"
            name="date"
            label="Kdy proběhne"
            placeholder="Kdy proběhne"
            errors={errors}
            watchedValue={watchedValues.date}
            {...inputStyles}
          />
          <Input
            register={register}
            type="text"
            name="location"
            label="Místo konání"
            placeholder="Místo konání"
            errors={errors}
            watchedValue={watchedValues.location}
            {...inputStyles}
          />
          <div className="flex w-full flex-row justify-between">
            <span className="text-normal mb-4 pt-3 md:pt-2 md:text-xl">
              Pokročilost
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
                      watchedValues.level === level.value
                        ? 'border border-pistachio bg-pistachio'
                        : 'border border-light-gray bg-white hover:border-primary'
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
            watchedValue={watchedValues.price}
            {...inputStyles}
          />
          <button
            type="submit"
            className="ml-auto whitespace-nowrap rounded-md bg-black px-5 py-2 text-white hover:text-primary"
          >
            Vytvořit událost
          </button>
        </form>
      </article>
    </div>
  );
};

export default CreateEventPage;