import { useState } from 'react';
import * as styles from '@/pages/instructor/classRegister/index.css';
import { buttonContainerStyle } from '@/pages/instructorRegister/index.css';
import BoxButton from '@/components/BoxButton';
import Header from '@/components/Header';
import ClassAmount from './ClassAmount';
import ClassDescription from './ClassDescription';
import ClassGenre from './ClassGenre';
import ClassLevel from './ClassLevel';
import ClassName from './ClassName';
import ClassPersonnel from './ClassPersonnel';
import ClassPlace from './ClassPlace';
import ClassRecommend from './ClassRecommend';
import ClassRepresentImage from './ClassRepresentImage';
import ClassSchedule from './ClassSchedule';
import ClassRegisterBottomSheet from './ClassSchedule/ClassRegisterBottomSheet';
import { useClassRegisterForm } from './hooks/useClassRegisterForm';

const ClassRegister = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const {
    explainTextAreaRef,
    recommendTextAreaRef,
    className,
    explanation,
    selectedGenre,
    selectedLevelTitle,
    recommend,
    personnel,
    defaultPlace,
    detailPlace,
    amount,
    handleClassNameChange,
    handlePersonnelChange,
    handleAmountChange,
    toggleCategory,
    handleLevelSelect,
    handleExplainTextArea,
    handleRecommendChange,
    handleDefaultPlace,
    handleDetailPlace,
  } = useClassRegisterForm();

  const handleBottomSheetOpen = () => {
    setIsBottomSheetOpen(true);
  };

  const handleBottomSheetClose = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <>
      <Header.Root isColor={true}>
        <Header.BackIcon />
        <Header.Title title="클래스 개설" />
      </Header.Root>

      <div className={styles.containerStyle}>
        <ClassName className={className} handleClassNameChange={handleClassNameChange} />
        <ClassDescription
          ref={explainTextAreaRef}
          explanation={explanation}
          handleExplainTextArea={handleExplainTextArea}
        />
        <ClassRepresentImage />
        <ClassGenre selectedGenre={selectedGenre} toggleCategory={toggleCategory} />
        <ClassLevel selectedLevelTitle={selectedLevelTitle} handleLevelSelect={handleLevelSelect} />
        <ClassRecommend
          ref={recommendTextAreaRef}
          recommend={recommend}
          handleRecommendChange={handleRecommendChange}
        />
        <ClassSchedule openBottomSheet={handleBottomSheetOpen} />
        <ClassPersonnel personnel={personnel} handlePersonnelChange={handlePersonnelChange} />
        <ClassPlace
          defaultPlace={defaultPlace}
          detailPlace={detailPlace}
          handleDefaultPlace={handleDefaultPlace}
          handleDetailPlace={handleDetailPlace}
        />
        <ClassAmount amount={amount} handleAmountChange={handleAmountChange} />
      </div>

      <div className={buttonContainerStyle}>
        <BoxButton>완료</BoxButton>
      </div>

      {isBottomSheetOpen && <ClassRegisterBottomSheet onClose={handleBottomSheetClose} />}
    </>
  );
};

export default ClassRegister;
