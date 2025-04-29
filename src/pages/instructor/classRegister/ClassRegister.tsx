import { useQueryClient } from '@tanstack/react-query';
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
  const navigate = useNavigate();
  const queryClient = useQueryClient();

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
    selectedTime,
    times,
    hour,
    minute,
    ampm,
    startDate,
    selectedLocation,
    setStartDate,
    handleClassNameChange,
    handlePersonnelChange,
    handleAmountChange,
    setImageUrls,
    setHour,
    setMinute,
    setAmpm,
    setSelectedTime,
    handleAddTime,
    toggleCategory,
    handleLevelSelect,
    handleExplainTextArea,
    handleImageUploadSuccess,
    handleRecommendChange,
    handleHasLocation,
    handleDefaultPlace,
    handleSubmitDefaultPlace,
    handleDetailPlace,
    handleRemoveTime,
    isFormValid,
    setSelectedLocation,
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

      classRegisterMutate(updatedInfo, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.MEMBERS_ME] });
          navigate(ROUTES_CONFIG.classRegisterCompletion.path);
        },
        onError: () => {
          // 에러 페이지로 navigate
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
          <BoxButton type="submit" disabled={!isFormValid()}>
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
