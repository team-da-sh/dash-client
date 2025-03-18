import { useState, useEffect } from 'react';

interface UseDebouncePropTypes {
  value: string;
  delay: number;
}

const useDebounce = ({ value, delay }: UseDebouncePropTypes) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timerID);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
