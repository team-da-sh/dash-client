import { useState } from 'react';

const useInstructorRegisterForm = () => {
  const [isEduNoneChecked, setEduNoneChecked] = useState(false);
  const [isCareerNoneChecked, setCareerNoneChecked] = useState(false);
  const [isPrizeNoneChecked, setPrizeNoneChecked] = useState(false);

  const handleEducationCheck = () => {
    setEduNoneChecked((prev) => !prev);
  };

  const handleCareerCheck = () => {
    setCareerNoneChecked((prev) => !prev);
  };

  const handlePrizeCheck = () => {
    setPrizeNoneChecked((prev) => !prev);
  };

  return {
    isEduNoneChecked,
    isCareerNoneChecked,
    isPrizeNoneChecked,
    handleEducationCheck,
    handleCareerCheck,
    handlePrizeCheck,
  };
};

export default useInstructorRegisterForm;
