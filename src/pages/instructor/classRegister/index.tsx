import { useNavigate } from 'react-router-dom';
import ClassAmount from '@/pages/instructor/classRegister/components/ClassAmount';
import ClassDescription from '@/pages/instructor/classRegister/components/ClassDescription';
import ClassGenre from '@/pages/instructor/classRegister/components/ClassGenre';
import ClassLevel from '@/pages/instructor/classRegister/components/ClassLevel';
import ClassName from '@/pages/instructor/classRegister/components/ClassName';
import ClassPersonnel from '@/pages/instructor/classRegister/components/ClassPersonnel';
import ClassPlace from '@/pages/instructor/classRegister/components/ClassPlace';
import ClassRecommend from '@/pages/instructor/classRegister/components/ClassRecommend';
import ClassRepresentImage from '@/pages/instructor/classRegister/components/ClassRepresentImage';
import ClassSchedule from '@/pages/instructor/classRegister/components/ClassSchedule';
import ClassRegisterBottomSheet from '@/pages/instructor/classRegister/components/ClassSchedule/ClassRegisterBottomSheet';
import { useClassRegisterForm } from '@/pages/instructor/classRegister/hooks/useClassRegisterForm';
import * as styles from '@/pages/instructor/classRegister/index.css';
import { ClassRegisterInfoTypes } from '@/pages/instructor/classRegister/types';
import { buttonContainerStyle } from '@/pages/instructorRegister/index.css';
import BoxButton from '@/components/BoxButton';
import Header from '@/components/Header';
import useBottomSheet from '@/hooks/useBottomSheet';
import useImageUploader from '@/hooks/useImageUploader';
import { useGetLocationList, usePostClassRegisterInfo } from '@/apis/instructor/classRegister/queries';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { genreEngMapping, levelEngMapping } from '@/constants';

const ClassRegister = () => {
  const { isBottomSheetOpen, openBottomSheet, closeBottomSheet } = useBottomSheet();
  // const [selectedLocation, setSelectedLocation] = useState<LocationTypes | null>(null);
  const navigate = useNavigate();

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
