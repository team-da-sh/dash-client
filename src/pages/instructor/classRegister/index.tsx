import { useState } from 'react';
import * as styles from '@/pages/instructor/classRegister/index.css';
import { buttonContainerStyle } from '@/pages/instructorRegister/index.css';
import BoxButton from '@/components/BoxButton';
import Header from '@/components/Header';
import useBottomSheet from '@/hooks/useBottomSheet';
import useImageUploader from '@/hooks/useImageUploader';
import { useGetLocationList, usePostClassRegisterInfo } from '@/apis/instructor/classRegister/queries';
import { genreEngMapping, levelEngMapping } from '@/constants';
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

interface ClassTimeTypes {
  startTime: string;
  endTime: string;
}

interface ClassRegisterInfoTypes {
  imageUrls: string[];
  name: string;
  detail: string;
  videoUrls: string[];
  maxReservationCount: number;
  genre: string;
  level: string;
  recommendation: string;
  price: number;
  location: string | null;
  streetAddress: string | null;
  oldStreetAddress: string | null;
  detailedAddress: string | null;
  times: ClassTimeTypes[];
}

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
  const { mutate: classRegisterMutate } = usePostClassRegisterInfo();
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
    hasLocation,
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
    handleHasLocation,
    handleDefaultPlace,
    handleSubmitDefaultPlace,
    handleDetailPlace,
  } = useClassRegisterForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedGenre && selectedLevelTitle) {
      const updatedInfo: ClassRegisterInfoTypes = {
        imageUrls: [imageUrls.imageUrls],
        name: className,
        detail: explanation,
        videoUrls: [],
        maxReservationCount: Number(personnel),
        genre: genreEngMapping[selectedGenre],
        level: levelEngMapping[selectedLevelTitle],
        recommendation: recommend,
        price: Number(amount),
        location: hasLocation ? selectedLocation.location : null,
        streetAddress: selectedLocation.streetAddress,
        oldStreetAddress: selectedLocation.oldStreetAddress,
        detailedAddress: detailPlace,
        times: [{ startTime: '2025-01-13T12:34:56Z', endTime: '2025-01-13T12:34:56Z' }],
      };
      classRegisterMutate(updatedInfo);
    }
  };

  const handleImageUploadSuccess = (url: string) => {
    setImageUrls({ imageUrls: url });
  };

  const { imgFile, previewImg, imgRef, handleUploaderClick, uploadImgFile, deleteImgFile } =
    useImageUploader<RepresentImageUrlsTypes>(handleImageUploadSuccess, setImageUrls);

  const { data: locationList } = useGetLocationList(submitDefaultPlace);

  return (
    <>
      <Header.Root isColor={true}>
        <Header.BackIcon />
        <Header.Title title="클래스 개설" />
      </Header.Root>

      <form onSubmit={handleSubmit}>
        <div className={styles.containerStyle}>
          <ClassName className={className} handleClassNameChange={handleClassNameChange} />
          <ClassDescription
            ref={explainTextAreaRef}
            explanation={explanation}
            handleExplainTextArea={handleExplainTextArea}
          />
          <ClassRepresentImage
            imgFile={imgFile}
            previewImg={previewImg}
            imgRef={imgRef}
            handleUploaderClick={handleUploaderClick}
            uploadImgFile={uploadImgFile}
            deleteImgFile={deleteImgFile}
          />
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
            hasLocation={hasLocation}
            handleHasLocation={handleHasLocation}
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
          <BoxButton type="submit">완료</BoxButton>
        </div>
      </form>
      {isBottomSheetOpen && <ClassRegisterBottomSheet onClose={closeBottomSheet} />}
    </>
  );
};

export default ClassRegister;
