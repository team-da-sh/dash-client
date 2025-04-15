import type { ChangeEvent } from 'react';
import { useRef, useState } from 'react';
import type { LocationTypes, RepresentImageUrlsTypes } from '@/pages/instructor/classRegister/types';
import { ONLY_NUMERIC } from '@/shared/constants/regex';
import { formatToISOString } from '@/shared/utils/timeUtils';

export const useClassRegisterForm = () => {
  const explainTextAreaRef = useRef<HTMLTextAreaElement>(null);
  const recommendTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const [className, setClassName] = useState('');
  const [explanation, setExplanation] = useState('');
  const [imageUrls, setImageUrls] = useState<RepresentImageUrlsTypes>({ imageUrls: '' });
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedLevelTitle, setSelectedLevelTitle] = useState<string | null>(null);
  const [recommend, setRecommend] = useState('');
  const [personnel, setPersonnelChange] = useState('');
  const [hasLocation, setHasLocation] = useState(true);
  const [defaultPlace, setDefaultPlace] = useState('');
  const [submitDefaultPlace, setSubmitDefaultPlace] = useState('');
  const [detailPlace, setDetailPlace] = useState('');
  const [amount, setAmount] = useState('');

  const [times, setTimes] = useState<{ startTime: string; endTime: string; date: string; duration: number }[]>([]);
  const [startDate, setStartDate] = useState('');
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [ampm, setAmpm] = useState('AM');
  const [selectedTime, setSelectedTime] = useState<number | null>(null);

  const [selectedLocation, setSelectedLocation] = useState<LocationTypes | null>(null);

  const handleClassNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setClassName(e.target.value);
  };

  const handlePersonnelChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 숫자만 입력되도록
    if (!e.target.value.match(ONLY_NUMERIC)) {
      setPersonnelChange(e.target.value);
    }
  };

  const handleImageUploadSuccess = (url: string) => {
    setImageUrls({ imageUrls: url });
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 숫자만 입력되도록
    if (!e.target.value.match(ONLY_NUMERIC)) {
      setAmount(e.target.value);
    }
  };

  const toggleCategory = (category: string) => {
    setSelectedGenre((prev) => (prev === category ? null : category));
  };

  const handleLevelSelect = (title: string) => {
    setSelectedLevelTitle((prev) => (prev === title ? null : title));
  };

  const handleExplainTextArea = () => {
    const textArea = explainTextAreaRef.current;
    if (textArea) {
      textArea.style.height = '9.8rem';
      textArea.style.height = `${textArea.scrollHeight}px`;
      setExplanation(textArea.value);
    }
  };

  const handleRecommendChange = () => {
    const textArea = recommendTextAreaRef.current;
    if (textArea) {
      textArea.style.height = '9.8rem';
      textArea.style.height = `${textArea.scrollHeight}px`;
      setRecommend(textArea.value);
    }
  };

  const handleHasLocation = () => {
    setHasLocation((prev) => !prev);
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
  const isFormValid = () => {
    if (!hasLocation) {
      return (
        className &&
        explanation &&
        imageUrls.imageUrls.length > 0 &&
        selectedGenre &&
        selectedLevelTitle &&
        selectedTime &&
        recommend &&
        personnel &&
        amount &&
        selectedLocation &&
        times.length > 0
      );
    }

    return (
      className &&
      explanation &&
      imageUrls.imageUrls.length > 0 &&
      selectedGenre &&
      selectedLevelTitle &&
      selectedTime &&
      recommend &&
      personnel &&
      amount &&
      selectedLocation &&
      times.length > 0
    );
  };

  return {
    explainTextAreaRef,
    recommendTextAreaRef,
    className,
    explanation,
    selectedGenre,
    selectedLevelTitle,
    recommend,
    personnel,
    hasLocation,
    defaultPlace,
    submitDefaultPlace,
    detailPlace,
    amount,
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
    handleClassNameChange,
    handlePersonnelChange,
    handleAmountChange,
    handleImageUploadSuccess,
    toggleCategory,
    handleLevelSelect,
    handleExplainTextArea,
    handleRecommendChange,
    handleHasLocation,
    handleDefaultPlace,
    handleSubmitDefaultPlace,
    handleDetailPlace,
    handleRemoveTime,
    setImageUrls,
    isFormValid,
    setSelectedLocation,
  };
};
