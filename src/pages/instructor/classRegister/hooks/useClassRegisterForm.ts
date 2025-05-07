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

      setTimes([...times, newTime]);
    }
  };

  const handleRemoveTime = (index: number) => {
    const updatedTimes = times.filter((_, idx) => idx !== index);
    setTimes(updatedTimes);
  };

  const handleDetailPlace = (e: ChangeEvent<HTMLInputElement>) => {
    setDetailPlace(e.target.value);
  };

  const isButtonActive = () => {
    if (isUndecidedLocation) {
      return imageUrls.imageUrls.length > 0 && selectedTime && times.length > 0;
    }

    return imageUrls.imageUrls.length > 0 && selectedTime && selectedLocation && times.length > 0;
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
