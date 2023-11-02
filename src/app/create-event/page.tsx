'use client';
import { NextPage } from 'next';
import { useState } from 'react';
import cx from 'classnames';
import nookies from 'nookies';

import { postEvent } from '../../api/events';

const CreateEventPage: NextPage = () => {
  const [eventData, setEventData] = useState({
    id: '',
    date: '',
    description: '',
    level: '',
    location: '',
    name: '',
    price: 0,
    sport: '',
  });

  const { token } = nookies.get();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const newValue = name === 'price' ? parseFloat(value) || 0 : value;
    setEventData({ ...eventData, [name]: newValue });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    postEvent(eventData, token);
  };

  return (
    <div className="mt-24 flex flex-col items-center justify-center px-20 text-center md:mt-14 md:px-0 lg:text-start">
      <h1 className="text-2xl font-medium leading-normal lg:text-4xl">
        Create Event
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mt-10 flex w-full max-w-md flex-col space-y-5"
      >
        <input
          name="date"
          type="text"
          placeholder="Date"
          value={eventData.date}
          onChange={handleInputChange}
        />
        <input
          name="description"
          type="text"
          placeholder="Description"
          value={eventData.description}
          onChange={handleInputChange}
        />
        <input
          name="id"
          type="text"
          placeholder="ID"
          value={eventData.id}
          onChange={handleInputChange}
        />
        <input
          name="level"
          type="text"
          placeholder="Level"
          value={eventData.level}
          onChange={handleInputChange}
        />
        <input
          name="location"
          type="text"
          placeholder="Location"
          value={eventData.location}
          onChange={handleInputChange}
        />
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={eventData.name}
          onChange={handleInputChange}
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={eventData.price}
          onChange={handleInputChange}
        />
        <input
          name="sport"
          type="text"
          placeholder="Sport"
          value={eventData.sport}
          onChange={handleInputChange}
        />
        <button
          className={cx(
            'm-auto w-40 rounded-md bg-black px-5 py-2 text-white hover:text-primary focus:text-primary'
          )}
          type="submit"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEventPage;
