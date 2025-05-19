import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
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
    imageUrls,
  } = watch();
  const { field } = useController({
    name: 'imageUrls',
    control,
  });

  useEffect(() => {}, [imageUrls]);

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
    handleAddTime: originalHandleAddTime,
    handleRemoveTime: originalHandleRemoveTime,
    handleNoneLocationCheck,
    handleDefaultPlace,
    setSelectedLocation,
    isButtonActive,
  } = useClassRegisterForm();

  const handleAddTime = () => {
    const newTimes = originalHandleAddTime();
    setValue('times', newTimes, { shouldValidate: true });
  };

  const handleRemoveTime = (idx: number) => {
    const newTimes = originalHandleRemoveTime(idx);
    setValue('times', newTimes, { shouldValidate: true });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedGenre && selectedLevel) {
      const updatedInfo: ClassRegisterInfoTypes = {
        imageUrls: [imageUrls],
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
    setImageUrls({ imageUrls: url });
  };

  const handleDeleteUrl = () => {
    field.onChange('');
    setImageUrls({ imageUrls: '' });
  };

  const { imgFile, previewImg, imgRef, handleUploaderClick, uploadImgFile, deleteImgFile } = useImageUploader(
    handleImageUploadSuccess,
    handleDeleteUrl
  );

  const debouncedSearchValue = useDebounce({ value: defaultPlace, delay: 500 });

  const { data: locationList } = useGetLocationList(debouncedSearchValue);

  const handleRemoveLocation = () => {
    setSelectedLocation(null);
    setValue('selectedLocation', null, { shouldValidate: true });
  };

  const handleSelectLocation = (item: any) => {
    setSelectedLocation(item);
    setValue('selectedLocation', item, { shouldValidate: true });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.containerStyle}>
          <ClassName className={className} register={register} error={errors.className} />
          <ClassDescription register={register} error={errors.detail} detail={detail} />
          <ClassRepresentImage
            imgFile={imgFile}
            previewImg={previewImg}
            imgRef={imgRef}
            handleUploaderClick={handleUploaderClick}
            uploadImgFile={uploadImgFile}
            deleteImgFile={deleteImgFile}
            error={errors.imageUrls}
          />
          <ClassGenre selectedGenre={selectedGenre} toggleCategory={toggleCategory} error={errors.selectedGenre} />
          <ClassLevel selectedLevel={selectedLevel} toggleLevel={toggleLevel} error={errors.selectedLevel} />
          <ClassRecommend register={register} error={errors.recommendation} recommendation={recommendation} />
          <ClassSchedule
            openBottomSheet={openBottomSheet}
            times={times}
            handleRemoveTime={handleRemoveTime}
            error={errors.times}
          />
          <ClassPersonnel
            maxReservationCount={maxReservationCount}
            register={register}
            error={errors.maxReservationCount}
          />
          <ClassPlace
            register={register}
            isUndecidedLocation={isUndecidedLocation}
            handleHasLocation={handleNoneLocationCheck}
            defaultPlace={defaultPlace}
            handleDefaultPlace={handleDefaultPlace}
            selectedLocation={selectedLocation}
            setSelectedLocation={handleSelectLocation}
            handleRemoveLocation={handleRemoveLocation}
            locationList={locationList}
            error={errors.selectedLocation}
          />
          <ClassAmount price={price} register={register} error={errors.price} />
        </div>
        <div className={styles.buttonContainerStyle}>
          <BoxButton
            type="submit"
            disabled={
              !isButtonActive({
                className,
                detail,
                selectedGenre,
                selectedLevel,
                recommendation,
                maxReservationCount,
                price,
              })
            }>
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
