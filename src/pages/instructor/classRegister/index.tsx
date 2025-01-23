import { useState } from 'react';
import * as styles from '@/pages/instructor/classRegister/index.css';
import { ClassRegisterInfoTypes, LocationTypes, RepresentImageUrlsTypes } from '@/pages/instructor/classRegister/types';
import { buttonContainerStyle } from '@/pages/instructorRegister/index.css';
import BoxButton from '@/components/BoxButton';
import Header from '@/components/Header';
import useBottomSheet from '@/hooks/useBottomSheet';
import useImageUploader from '@/hooks/useImageUploader';
import { useGetLocationList, usePostClassRegisterInfo } from '@/apis/instructor/classRegister/queries';
import { formatToISOString } from '@/utils/timeUtils';
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

const ClassRegister = () => {
  const { isBottomSheetOpen, openBottomSheet, closeBottomSheet } = useBottomSheet();
  const [selectedLocation, setSelectedLocation] = useState<LocationTypes | null>(null);

  const [times, setTimes] = useState<{ startTime: string; endTime: string; date: string; duration: number }[]>([]);
  const [startDate, setStartDate] = useState('');
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [ampm, setAmpm] = useState('AM');
  const [selectedTime, setSelectedTime] = useState<number | null>(null);

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

    if (selectedGenre && selectedLevelTitle && selectedTime) {
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
        location: hasLocation ? (selectedLocation?.location ?? null) : null,
        streetAddress: hasLocation ? (selectedLocation?.streetAddress ?? null) : null,
        oldStreetAddress: hasLocation ? (selectedLocation?.oldStreetAddress ?? null) : null,
        detailedAddress: hasLocation ? detailPlace : null,

        times: times.map((time) => ({
          startTime: time.startTime,
          endTime: time.endTime,
        })),
      };

      classRegisterMutate(updatedInfo);
    }
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
      setTimes([newTime, ...times]);
    }
  };

  const handleRemoveTime = (index: number) => {
    const updatedTimes = times.filter((_, idx) => idx !== index);
    setTimes(updatedTimes);
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
          <ClassSchedule openBottomSheet={openBottomSheet} times={times} handleRemoveTime={handleRemoveTime} />
          <ClassPersonnel personnel={personnel} handlePersonnelChange={handlePersonnelChange} />
          <ClassPlace
            hasLocation={hasLocation}
            handleHasLocation={handleHasLocation}
            defaultPlace={defaultPlace}
            detailPlace={detailPlace}
            handleDefaultPlace={handleDefaultPlace}
            handleDetailPlace={handleDetailPlace}
            handleSubmitDefaultPlace={handleSubmitDefaultPlace}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            locationList={locationList}
          />
          <ClassAmount amount={amount} handleAmountChange={handleAmountChange} />
        </div>

        <div className={buttonContainerStyle}>
          <BoxButton type="submit">완료</BoxButton>
        </div>
      </form>
      {isBottomSheetOpen && (
        <ClassRegisterBottomSheet
          onClose={closeBottomSheet}
          startDate={startDate}
          hour={hour}
          minute={minute}
          ampm={ampm}
          setStartDate={setStartDate}
          setHour={setHour}
          setMinute={setMinute}
          setAmpm={setAmpm}
          setSelectedTime={setSelectedTime}
          selectedTime={selectedTime}
          handleAddTime={handleAddTime}
        />
      )}
    </>
  );
};

export default ClassRegister;
