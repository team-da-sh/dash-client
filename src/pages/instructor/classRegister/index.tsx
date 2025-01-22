import { useEffect, useState } from 'react';
import * as styles from '@/pages/instructor/classRegister/index.css';
import { buttonContainerStyle } from '@/pages/instructorRegister/index.css';
import BoxButton from '@/components/BoxButton';
import Header from '@/components/Header';
import useBottomSheet from '@/hooks/useBottomSheet';
import useImageUploader from '@/hooks/useImageUploader';
import { useGetLocationList } from '@/apis/instructor/classRegister/queries';
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

export interface RepresentImageUrlsTypes {
  imageUrls: string;
}

const ClassRegister = () => {
  const { isBottomSheetOpen, openBottomSheet, closeBottomSheet } = useBottomSheet();
  const [selectedLocation, setSelectedLocation] = useState({
    location: '',
    streetAddress: '',
    oldStreetAddress: '',
  });

  const handleImageUploadSuccess = (url: string) => {
    setImageUrls(url)
  }

  // const { imgFile, previewImg, imgRef, handleUploaderClick, uploadImgFile, deleteImgFile } =
  //   useImageUploader<RepresentImageUrlsTypes>(handleImageUploadSuccess, setInfo);

  useEffect(() => {
    console.log('선택된거', selectedLocation);
  }, [selectedLocation]);

  const {
    explainTextAreaRef,
    recommendTextAreaRef,
    className,
    explanation,
    imageUrls,
    selectedGenre,
    selectedLevelTitle,
    recommend,
    personnel,
    defaultPlace,
    submitDefaultPlace,
    detailPlace,
    amount,
    handleClassNameChange,
    handlePersonnelChange,
    handleAmountChange,
    setImageUrls,
    toggleCategory,
    handleLevelSelect,
    handleExplainTextArea,
    handleRecommendChange,
    handleDefaultPlace,
    handleSubmitDefaultPlace,
    handleDetailPlace,
  } = useClassRegisterForm();

  const { data: locationList } = useGetLocationList(submitDefaultPlace);
  console.log(locationList);

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
        <ClassSchedule openBottomSheet={openBottomSheet} />
        <ClassPersonnel personnel={personnel} handlePersonnelChange={handlePersonnelChange} />
        <ClassPlace
          defaultPlace={defaultPlace}
          detailPlace={detailPlace}
          handleDefaultPlace={handleDefaultPlace}
          handleDetailPlace={handleDetailPlace}
          handleSubmitDefaultPlace={handleSubmitDefaultPlace}
          setSelectedLocation={setSelectedLocation}
          locationList={locationList}
        />
        <ClassAmount amount={amount} handleAmountChange={handleAmountChange} />
      </div>

      <div className={buttonContainerStyle}>
        <BoxButton>완료</BoxButton>
      </div>

      {isBottomSheetOpen && <ClassRegisterBottomSheet onClose={closeBottomSheet} />}
    </>
  );
};

export default ClassRegister;
