import { ChangeEvent, useRef, useState } from 'react';

export const useClassRegisterForm = () => {
  const explainTextAreaRef = useRef<HTMLTextAreaElement>(null);
  const scheduleTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const [className, setClassName] = useState('');
  const [explanation, setExplanation] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedLevelTitle, setSelectedLevelTitle] = useState<string | null>(null);
  const [recommend, setRecommend] = useState('');
  const [personnel, setPersonnelChange] = useState('');
  const [defaultPlace, setDefaultPlace] = useState('');
  const [detailPlace, setDetailPlace] = useState('');
  const [amount, setAmount] = useState('');

  const handleClassName = (e: ChangeEvent<HTMLInputElement>) => {
    setClassName(e.target.value);
  };

  const handlePersonnelChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 숫자만 입력되도록
    if (!e.target.value.match(/\D/g)) {
      setPersonnelChange(e.target.value);
    }
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 숫자만 입력되도록
    if (!e.target.value.match(/\D/g)) {
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
    const textArea = scheduleTextAreaRef.current;
    if (textArea) {
      textArea.style.height = '9.8rem';
      textArea.style.height = `${textArea.scrollHeight}px`;
      setRecommend(textArea.value);
    }
  };

  const handleDefaultPlace = () => {
    console.log('여기에 도로명 주소 API 호출');
    // 받은 데이터로 state 설정
    setDefaultPlace('이런 값으로~');
  };

  const handleDetailPlace = (e: ChangeEvent<HTMLInputElement>) => {
    setDetailPlace(e.target.value);
  };

  return {
    explainTextAreaRef,
    scheduleTextAreaRef,
    className,
    explanation,
    selectedGenre,
    selectedLevelTitle,
    recommend,
    personnel,
    defaultPlace,
    detailPlace,
    amount,
    handleClassName,
    handlePersonnelChange,
    handleAmountChange,
    toggleCategory,
    handleLevelSelect,
    handleExplainTextArea,
    handleRecommendChange,
    handleDefaultPlace,
    handleDetailPlace,
  };
};
