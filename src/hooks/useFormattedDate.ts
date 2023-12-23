import { useState, useEffect } from 'react';
import { format } from 'date-fns';

const useFormattedDate = (date: string, formatString: string) => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    if (date) {
      const dateObject = new Date(date);
      setFormattedDate(format(dateObject, formatString));
    }
  }, [date, formatString]);

  return formattedDate;
};

export default useFormattedDate;
