'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect, type FormEvent } from 'react';
import { FormProvider, useController, useForm } from 'react-hook-form';
import { useGetLessonDetail } from '@/app/class/[id]/apis/queries';
import {
  useGetLocationList,
  usePatchClassInfo,
  usePostClassRegisterInfo,
} from '@/app/my/(instructor)/create-class/apis/queries';
import ClassAmount from '@/app/my/(instructor)/create-class/components/ClassAmount/ClassAmount';
import ClassDescription from '@/app/my/(instructor)/create-class/components/ClassDescription/ClassDescription';
import ClassGenre from '@/app/my/(instructor)/create-class/components/ClassGenre/ClassGenre';
import ClassLevel from '@/app/my/(instructor)/create-class/components/ClassLevel/ClassLevel';
import ClassName from '@/app/my/(instructor)/create-class/components/ClassName/ClassName';
import ClassPersonnel from '@/app/my/(instructor)/create-class/components/ClassPersonnel/ClassPersonnel';
import ClassPlace from '@/app/my/(instructor)/create-class/components/ClassPlace/ClassPlace';
import ClassRecommend from '@/app/my/(instructor)/create-class/components/ClassRecommend/ClassRecommend';
import ClassRepresentImage from '@/app/my/(instructor)/create-class/components/ClassRepresentImage/ClassRepresentImage';
import ClassRegisterBottomSheet from '@/app/my/(instructor)/create-class/components/ClassSchedule/ClassRegisterBottomSheet/ClassRegisterBottomSheet';
import ClassSchedule from '@/app/my/(instructor)/create-class/components/ClassSchedule/ClassSchedule';
import { CLASS_REGISTER_EDIT_MESSAGE } from '@/app/my/(instructor)/create-class/constants/notifyMessage';
import { STATE_VALUE } from '@/app/my/(instructor)/create-class/constants/stateValue';
import { useClassEditMode } from '@/app/my/(instructor)/create-class/hooks/useClassEditMode';
import { useClassRegisterForm } from '@/app/my/(instructor)/create-class/hooks/useClassRegisterForm';
import * as styles from '@/app/my/(instructor)/create-class/index.css';
import { classRegisterSchema } from '@/app/my/(instructor)/create-class/schema/classRegisterSchema';
import type { ClassRegisterInfoTypes } from '@/app/my/(instructor)/create-class/types/api';
import type { LocationTypes } from '@/app/my/(instructor)/create-class/types/index';
import BoxButton from '@/common/components/BoxButton/BoxButton';
import Modal from '@/common/components/Modal/Modal';
import { notify } from '@/common/components/Toast/Toast';
import useDebounce from '@/common/hooks/useDebounce';
import { useModalStore } from '@/common/stores/modal';
import { genreEngMapping, levelEngMapping } from '@/shared/constants';
import { lessonKeys, memberKeys, teacherKeys } from '@/shared/constants/queryKey';
import useBlockBackWithUnsavedChanges from '@/shared/hooks/useBlockBackWithUnsavedChanges';
import useBottomSheet from '@/shared/hooks/useBottomSheet';
import useImageUploader from '@/shared/hooks/useImageUploader';

export default function Page() {
  const router = useRouter();
  const { openModal } = useModalStore();

  // 클래스 등록 페이지는 신규 등록용이므로 lessonId가 없음
  const lessonId = null;
  const isValidId = false;

  const queryClient = useQueryClient();
  const { mutate: classRegisterMutate, isPending: isRegistering } = usePostClassRegisterInfo();
  const { mutate: classUpdateMutate, isPending: isEditting } = usePatchClassInfo();
  const { isBottomSheetOpen, openBottomSheet, closeBottomSheet } = useBottomSheet();

  const { data: lessonData } = useGetLessonDetail(lessonId || 0, { enabled: isValidId });

  const methods = useForm({
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

  const { register, watch, setValue, control, clearErrors, reset, formState } = methods;
  const { isDirty } = formState;

  const isEditMode = isValidId && !!lessonData;
  const isSubmitting = isRegistering || isEditting;
  const isNotChangedWithEdit = isEditMode && !isDirty;

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

  const handleTextAreaHeight = (e: FormEvent<HTMLTextAreaElement>) => {
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
    setDefaultPlace,
    handleAddTime: originalHandleAddTime,
    handleRemoveTime: originalHandleRemoveTime,
    handleNoneLocationCheck,
    handleDefaultPlace,
    setSelectedLocation,
    isButtonActive,
    setTimes,
    setIsUndecidedLocation,
  } = useClassRegisterForm();

  useClassEditMode({
    isEditMode,
    lessonData,
    reset,
    setImageUrls,
    setTimes,
    setSelectedLocation,
    setIsUndecidedLocation,
  });

  const handleLocationCheckboxClick = () => {
    handleNoneLocationCheck();
    setValue('isUndecidedLocation', !isUndecidedLocation, { shouldValidate: true, shouldDirty: true });
    clearErrors('selectedLocation');
  };

  const handleAddTime = () => {
    const newTimes = originalHandleAddTime();
    setValue('times', newTimes, { shouldValidate: true, shouldDirty: true });
  };

  const handleRemoveTime = (idx: number) => {
    const newTimes = originalHandleRemoveTime(idx);
    setValue('times', newTimes, { shouldValidate: true, shouldDirty: true });
  };

  const initTimeAndOpenBottomSheet = () => {
    if (startDate) {
      let latestEndTime: Date | null = null;
      for (const time of times) {
        const existingEndTime = new Date(time.endTime);
        const endTimeDate = existingEndTime.toDateString();
        const selectedDateObj = new Date(startDate);
        const selectedDateStr = selectedDateObj.toDateString();
        if (endTimeDate === selectedDateStr) {
          if (latestEndTime === null || existingEndTime > latestEndTime) {
            latestEndTime = existingEndTime;
          }
        }
      }
      if (latestEndTime) {
        const endHour = latestEndTime.getHours();
        const endMinute = latestEndTime.getMinutes();
        const endAmpm = endHour >= 12 ? 'PM' : 'AM';
        const display12Hour = endHour > 12 ? endHour - 12 : endHour === 0 ? 12 : endHour;
        setHour(display12Hour);
        setMinute(endMinute);
        setAmpm(endAmpm);
      }
    }
    openBottomSheet();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedGenre && selectedLevel) {
      const updatedInfo: ClassRegisterInfoTypes = {
        imageUrls: imageUrls ? [imageUrls] : [],
        name: className,
        detail: detail,
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

      if (isEditMode && lessonId) {
        classUpdateMutate(
          { lessonId, infoData: updatedInfo },
          {
            onSuccess: () => {
              queryClient.invalidateQueries({ queryKey: memberKeys.me.queryKey });
              queryClient.invalidateQueries({ queryKey: lessonKeys.list.queryKey });
              queryClient.invalidateQueries({ queryKey: lessonKeys.detail(lessonId).queryKey });
              queryClient.invalidateQueries({ queryKey: teacherKeys.me._ctx.lesson.queryKey });
              router.push(`/my/manage-classes/${lessonId}`);
              notify({ message: CLASS_REGISTER_EDIT_MESSAGE.EDIT_SUCCESS, icon: 'success' });
            },
          }
        );
      } else {
        classRegisterMutate(updatedInfo, {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: memberKeys.me.queryKey });
            queryClient.invalidateQueries({ queryKey: lessonKeys.list.queryKey });
            router.push('/my/create-class/completion');
            notify({ message: CLASS_REGISTER_EDIT_MESSAGE.REGISTER_SUCCESS, icon: 'success' });
          },
        });
      }
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
    handleDeleteUrl,
    lessonData?.imageUrl || null
  );

  const debouncedSearchValue = useDebounce({ value: defaultPlace, delay: 300 });
  const { data: locationList } = useGetLocationList(debouncedSearchValue);

  const handleRemoveLocation = () => {
    setSelectedLocation(null);
    setValue(STATE_VALUE.SELECTED_LOCATION, null, { shouldValidate: true, shouldDirty: true });
    setDefaultPlace('');
  };

  const handleSelectLocation = (location: LocationTypes | null) => {
    setSelectedLocation(location);
    setValue(STATE_VALUE.SELECTED_LOCATION, location, { shouldValidate: true, shouldDirty: true });
  };

  useBlockBackWithUnsavedChanges({ methods });

  useEffect(() => {
    if (isEditMode && lessonData?.lessonRound?.lessonRounds?.length) {
      const firstRound = lessonData.lessonRound.lessonRounds[0];
      const startDateTime = new Date(firstRound.startDateTime);
      const now = new Date();
      if (now >= startDateTime) {
        openModal(() => (
          <Modal
            type="single"
            content={'비정상적인 접근입니다.'}
            onClose={() => router.back()}
            rightButtonText="뒤로가기"
            onClickHandler={() => router.back()}
          />
        ));
      }
    }
  }, [isEditMode, lessonData, router, openModal]);

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>
          <div className={styles.containerStyle}>
            <ClassName className={className} register={register} />
            <ClassDescription register={register} detail={detail} handleTextAreaHeight={handleTextAreaHeight} />
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
            <ClassRecommend
              register={register}
              recommendation={recommendation}
              handleTextAreaHeight={handleTextAreaHeight}
            />
            <ClassSchedule
              openBottomSheet={initTimeAndOpenBottomSheet}
              times={times}
              handleRemoveTime={handleRemoveTime}
            />
            <ClassPersonnel maxReservationCount={maxReservationCount} register={register} />
            <ClassPlace
              register={register}
              isUndecidedLocation={isUndecidedLocation}
              handleHasLocation={handleLocationCheckboxClick}
              defaultPlace={defaultPlace}
              handleDefaultPlace={handleDefaultPlace}
              selectedLocation={selectedLocation}
              setSelectedLocation={handleSelectLocation}
              handleRemoveLocation={handleRemoveLocation}
              locationList={locationList}
            />
            <ClassAmount price={price} register={register} />
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
                }) ||
                isNotChangedWithEdit ||
                isSubmitting
              }>
              완료
            </BoxButton>
          </div>
        </form>
      </FormProvider>

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
          times={times}
        />
      )}
    </>
  );
}
