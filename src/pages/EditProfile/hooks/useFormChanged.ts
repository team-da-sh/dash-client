import { useEffect, useState } from 'react';

export const useFormChanged = (watchedValues: any[], initialValues: any[]) => {
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    const hasChanged = watchedValues.some((value, idx) => value !== initialValues[idx]);
    setIsChanged(hasChanged);
  }, [...watchedValues, ...initialValues]);

  return isChanged;
};
