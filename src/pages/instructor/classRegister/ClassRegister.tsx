import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useController, useForm } from 'react-hook-form';
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
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import { genreEngMapping, levelEngMapping } from '@/shared/constants';
import { QUERY_KEYS } from '@/shared/constants/queryKey';
import useBottomSheet from '@/shared/hooks/useBottomSheet';
import useDebounce from '@/shared/hooks/useDebounce';
import useImageUploader from '@/shared/hooks/useImageUploader';

const ClassRegister = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: classRegisterMutate } = usePostClassRegisterInfo();
  const { isBottomSheetOpen, openBottomSheet, closeBottomSheet } = useBottomSheet();

  const {
    register,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(classRegisterSchema),
    mode: 'onChange',
    defaultValues: {
      className: '',
      detail: '',
      selectedGenre: '',
      selectedLevel: '',
      recommendation: '',
      maxReservationCount: '',
      price: '',
      isUndecidedLocation: false,
      detailedAddress: '',
    },
  });

  const {
    className,
    detail,
    selectedGenre,
    selectedLevel,
    recommendation,
    maxReservationCount,
    price,
    detailedAddress,
  } = watch();
  const { field } = useController({
    name: 'imageUrls',
    control,
  });

  const handleTextAreaHeight = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const textArea = e.target as HTMLTextAreaElement;

    if (textArea) {
      textArea.style.height = '9.8rem';
      textArea.style.height = `${textArea.scrollHeight}px`;
    }
  };

  const toggleCategory = (category: string) => {
    setValue('selectedGenre', category === selectedGenre ? '' : category, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const toggleLevel = (level: string) => {
    setValue('selectedLevel', level === selectedLevel ? '' : level, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const {
    imageUrls,

    selectedTime,
    times,
    hour,
    minute,
    ampm,
    startDate,

    isUndecidedLocation,
    defaultPlace,
    selectedLocation,

    setImageUrls,

    setStartDate,
    setHour,
    setMinute,
    setAmpm,
    setSelectedTime,
    handleAddTime,
    handleRemoveTime,

    handleNoneLocationCheck,
    handleDefaultPlace,
    setSelectedLocation,

    // isButtonActive,
  } = useClassRegisterForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedGenre && selectedLevel) {
      const updatedInfo: ClassRegisterInfoTypes = {
        imageUrls: [imageUrls.imageUrls],
        name: className,
        detail: detail,
        videoUrls: [],
        maxReservationCount: Number(maxReservationCount),
        genre: genreEngMapping[selectedGenre],
        level: levelEngMapping[selectedLevel],
        recommendation: recommendation,
        price: Number(price),
        location: !isUndecidedLocation ? (selectedLocation?.location ?? null) : null,
        streetAddress: !isUndecidedLocation ? (selectedLocation?.streetAddress ?? null) : null,
        oldStreetAddress: !isUndecidedLocation ? (selectedLocation?.oldStreetAddress ?? null) : null,
        detailedAddress: !isUndecidedLocation ? (detailedAddress ?? null) : null,

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

  const handleImageUploadSuccess = (url: string) => {
    field.onChange(url);
  };

  const handleDeleteUrl = () => {
    setImageUrls({ imageUrls: '' });
  };

  const { imgFile, previewImg, imgRef, handleUploaderClick, uploadImgFile, deleteImgFile } = useImageUploader(
    handleImageUploadSuccess,
    handleDeleteUrl
  );

  const debouncedSearchValue = useDebounce({ value: defaultPlace, delay: 500 });

  const { data: locationList } = useGetLocationList(debouncedSearchValue);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.containerStyle}>
          <ClassName className={className} register={register} error={errors.className} />
          <ClassDescription register={register} error={errors.detail} handleTextAreaHeight={handleTextAreaHeight} />
          <ClassRepresentImage
            imgFile={imgFile}
            previewImg={previewImg}
            imgRef={imgRef}
            handleUploaderClick={handleUploaderClick}
            uploadImgFile={uploadImgFile}
            deleteImgFile={deleteImgFile}
          />
          <ClassGenre selectedGenre={selectedGenre} toggleCategory={toggleCategory} />
          <ClassLevel selectedLevel={selectedLevel} toggleLevel={toggleLevel} />
          <ClassRecommend register={register} handleTextAreaHeight={handleTextAreaHeight} />
          <ClassSchedule openBottomSheet={openBottomSheet} times={times} handleRemoveTime={handleRemoveTime} />
          <ClassPersonnel maxReservationCount={maxReservationCount} register={register} />
          <ClassPlace
            register={register}
            isUndecidedLocation={isUndecidedLocation}
            handleHasLocation={handleNoneLocationCheck}
            defaultPlace={defaultPlace}
            handleDefaultPlace={handleDefaultPlace}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            locationList={locationList}
          />
          <ClassAmount price={price} register={register} />
        </div>
        <div className={styles.buttonContainerStyle}>
          <BoxButton type="submit" disabled={false}>
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
