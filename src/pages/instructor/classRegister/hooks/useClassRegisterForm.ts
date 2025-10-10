import type { ChangeEvent } from 'react';
import { useState } from 'react';
import type { LocationTypes, RepresentImageUrlsTypes } from '@/pages/instructor/classRegister/types';
// import { ONLY_NUMERIC } from '@/shared/constants/regex';
import { formatToISOString } from '@/shared/utils/timeUtils';

export const useClassRegisterForm = () => {
  const [imageUrls, setImageUrls] = useState<RepresentImageUrlsTypes>({ imageUrls: '' });
  const [isUndecidedLocation, setIsUndecidedLocation] = useState(false);
  const [defaultPlace, setDefaultPlace] = useState('');
  const [submitDefaultPlace, setSubmitDefaultPlace] = useState('');
  const [detailPlace, setDetailPlace] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<LocationTypes | null>(null);

  const [times, setTimes] = useState<{ startTime: string; endTime: string; date: string; duration: number }[]>([]);
  const [startDate, setStartDate] = useState('');
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [ampm, setAmpm] = useState('AM');
  const [selectedTime, setSelectedTime] = useState<number | null>(null);

  const handleImageUploadSuccess = (url: string) => {
    setImageUrls({ imageUrls: url });
  };

  const handleNoneLocationCheck = () => {
    setIsUndecidedLocation((prev) => !prev);
  };

  const handleDefaultPlace = (e: ChangeEvent<HTMLInputElement>) => {
    setDefaultPlace(e.target.value);
  };

  const handleSubmitDefaultPlace = () => {
    setSubmitDefaultPlace(defaultPlace);
  };

  const handleAddTime = () => {
    if (startDate && selectedTime !== null) {
      const { startTime, endTime } = formatToISOString(startDate, hour, minute, ampm, selectedTime);

      const newTime = {
        startTime,
        endTime,
        date: startDate,
        duration: selectedTime,
      };

      const newTimes = [...times, newTime];
      setTimes(newTimes);
      return newTimes;
    }
    return times;
  };

  const handleRemoveTime = (index: number) => {
    const updatedTimes = times.filter((_, idx) => idx !== index);
    setTimes(updatedTimes);
    return updatedTimes;
  };

  const handleDetailPlace = (e: ChangeEvent<HTMLInputElement>) => {
    setDetailPlace(e.target.value);
  };

  const isButtonActive = (externalFormFields?: {
    className?: string;
    detail?: string;
    selectedGenre?: string;
    selectedLevel?: string;
    recommendation?: string;
    maxReservationCount?: string;
    price?: string;
  }) => {
    const isExternalFieldsValid = externalFormFields
      ? !!externalFormFields.className &&
        !!externalFormFields.detail &&
        !!externalFormFields.selectedGenre &&
        !!externalFormFields.selectedLevel &&
        !!externalFormFields.recommendation &&
        !!externalFormFields.maxReservationCount &&
        !!externalFormFields.price
      : true;

    const isInternalFieldsValid = imageUrls.imageUrls.length > 0 && times.length > 0;

    const isLocationValid = isUndecidedLocation || selectedLocation !== null;

    return isExternalFieldsValid && isInternalFieldsValid && isLocationValid;
  };

  return {
    isUndecidedLocation,
    defaultPlace,
    submitDefaultPlace,
    detailPlace,
    imageUrls,
    times,
    hour,
    minute,
    ampm,
    startDate,
    selectedLocation,
    setStartDate,
    setHour,
    setMinute,
    setAmpm,
    setSelectedTime,
    setDefaultPlace,
    selectedTime,
    handleAddTime,
    handleImageUploadSuccess,
    handleNoneLocationCheck,
    handleDefaultPlace,
    handleSubmitDefaultPlace,
    handleDetailPlace,
    handleRemoveTime,
    setImageUrls,
    isButtonActive,
    setSelectedLocation,
  };
};
