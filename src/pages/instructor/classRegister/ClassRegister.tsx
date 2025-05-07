import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useGetLocationList, usePostClassRegisterInfo } from '@/pages/instructor/classRegister/apis/queries';
import * as styles from '@/pages/instructor/classRegister/classRegister.css';
import ClassAmount from '@/pages/instructor/classRegister/components/ClassAmount/ClassAmount';
import ClassDescription from '@/pages/instructor/classRegister/components/ClassDescription/ClassDescription';
import ClassGenre from '@/pages/instructor/classRegister/components/ClassGenre/ClassGenre';
import ClassLevel from '@/pages/instructor/classRegister/components/ClassLevel/ClassLevel';
import ClassName from '@/pages/instructor/classRegister/components/ClassName/ClassName';
import ClassPersonnel from '@/pages/instructor/classRegister/components/ClassPersonnel/ClassPersonnel';
import ClassPlace from '@/pages/instructor/classRegister/components/ClassPlace/ClassPlace';
import ClassRecommend from '@/pages/instructor/classRegister/components/ClassRecommend/ClassRecommend';
import ClassRepresentImage from '@/pages/instructor/classRegister/components/ClassRepresentImage/ClassRepresentImage';
import ClassRegisterBottomSheet from '@/pages/instructor/classRegister/components/ClassSchedule/ClassRegisterBottomSheet/ClassRegisterBottomSheet';
import ClassSchedule from '@/pages/instructor/classRegister/components/ClassSchedule/ClassSchedule';
import { useClassRegisterForm } from '@/pages/instructor/classRegister/hooks/useClassRegisterForm';
import { classRegisterSchema } from '@/pages/instructor/classRegister/schema/classRegisterSchema';
import type { ClassRegisterInfoTypes } from '@/pages/instructor/classRegister/types/api';
import { buttonContainerStyle } from '@/pages/instructorRegister/instructorRegister.css';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import { genreEngMapping, levelEngMapping } from '@/shared/constants';
import { QUERY_KEYS } from '@/shared/constants/queryKey';
import useBottomSheet from '@/shared/hooks/useBottomSheet';
import useImageUploader from '@/shared/hooks/useImageUploader';

const ClassRegister = () => {
  const { isBottomSheetOpen, openBottomSheet, closeBottomSheet } = useBottomSheet();
  const explainTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleExplainTextArea = () => {
    const textArea = explainTextAreaRef.current;
    if (textArea) {
      textArea.style.height = '9.8rem';
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  };

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    register,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(classRegisterSchema),
    mode: 'onChange',
    defaultValues: {
      className: '',
      detail: '',
    },
  });

  const { mutate: classRegisterMutate } = usePostClassRegisterInfo();
  const { className, detail } = watch();
  const {
    // className,

    // explanation,
    // explainTextAreaRef,

    imageUrls,

    selectedGenre,
    selectedLevelTitle,

    recommend,
    recommendTextAreaRef,

    personnel,

    amount,
    selectedTime,
    times,
    hour,
    minute,
    ampm,
    startDate,

    isUndecidedLocation,
    defaultPlace,
    detailPlace,
    selectedLocation,
    submitDefaultPlace,

    // handleClassNameChange,

    // handleExplainTextArea,

    setImageUrls,
    handleImageUploadSuccess,

    toggleCategory,
    handleLevelSelect,

    handleRecommendChange,

    setStartDate,
    handlePersonnelChange,
    handleAmountChange,
    setHour,
    setMinute,
    setAmpm,
    setSelectedTime,
    handleAddTime,
    handleRemoveTime,

    // handleHasLocation,
    handleNoneLocationCheck,
    handleDefaultPlace,
    handleSubmitDefaultPlace,
    handleDetailPlace,
    setSelectedLocation,

    isButtonActive,
  } = useClassRegisterForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedGenre && selectedLevelTitle) {
      const updatedInfo: ClassRegisterInfoTypes = {
        imageUrls: [imageUrls.imageUrls],
        name: className,
        detail: detail,
        videoUrls: [],
        maxReservationCount: Number(personnel),
        genre: genreEngMapping[selectedGenre],
        level: levelEngMapping[selectedLevelTitle],
        recommendation: recommend,
        price: Number(amount),
        location: !isUndecidedLocation ? (selectedLocation?.location ?? null) : null,
        streetAddress: !isUndecidedLocation ? (selectedLocation?.streetAddress ?? null) : null,
        oldStreetAddress: !isUndecidedLocation ? (selectedLocation?.oldStreetAddress ?? null) : null,
        detailedAddress: !isUndecidedLocation ? detailPlace : null,

        times: times.map((time) => ({
          startTime: time.startTime,
          endTime: time.endTime,
        })),
      };

      classRegisterMutate(updatedInfo, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.MEMBERS_ME] });
          navigate(ROUTES_CONFIG.classRegisterCompletion.path);
        },
        onError: () => {
          navigate(ROUTES_CONFIG.error.path);
        },
      });
    }
  };

  const handleDeleteUrl = () => {
    setImageUrls({ imageUrls: '' });
  };
  const { imgFile, previewImg, imgRef, handleUploaderClick, uploadImgFile, deleteImgFile } = useImageUploader(
    handleImageUploadSuccess,
    handleDeleteUrl
  );

  const { data: locationList } = useGetLocationList(submitDefaultPlace);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.containerStyle}>
          <ClassName className={className} register={register} error={errors.className} />
          <ClassDescription
            register={register}
            detail={detail}
            error={errors.detail}
            ref={explainTextAreaRef}
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
            isUndecidedLocation={isUndecidedLocation}
            handleHasLocation={handleNoneLocationCheck}
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
          <BoxButton type="submit" disabled={!isButtonActive()}>
            완료
          </BoxButton>
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
