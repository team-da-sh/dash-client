import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, type FormEvent } from 'react';
import { FormProvider, useController, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetLessonDetail } from '@/pages/class/apis/queries';
import {
  useGetLocationList,
  usePatchClassInfo,
  usePostClassRegisterInfo,
} from '@/pages/instructor/classRegister/apis/queries';
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
import { STATE_VALUE } from '@/pages/instructor/classRegister/constants/stateValue';
import { useClassEditMode } from '@/pages/instructor/classRegister/hooks/useClassEditMode';
import { useClassRegisterForm } from '@/pages/instructor/classRegister/hooks/useClassRegisterForm';
import { classRegisterSchema } from '@/pages/instructor/classRegister/schema/classRegisterSchema';
import type { ClassRegisterInfoTypes } from '@/pages/instructor/classRegister/types/api';
import type { LocationTypes } from '@/pages/instructor/classRegister/types/index';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import Modal from '@/common/components/Modal/Modal';
import { useModalStore } from '@/common/stores/modal';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import { notify } from '@/shared/components/Toast/Toast';
import { genreEngMapping, levelEngMapping } from '@/shared/constants';
import { lessonKeys, memberKeys, teacherKeys } from '@/shared/constants/queryKey';
import useBlockBackWithUnsavedChanges from '@/shared/hooks/useBlockBackWithUnsavedChanges';
import useBottomSheet from '@/shared/hooks/useBottomSheet';
import useDebounce from '@/shared/hooks/useDebounce';
import useImageUploader from '@/shared/hooks/useImageUploader';
import { CLASS_REGISTER_EDIT_MESSAGE } from './constants/notifyMessage';

const ClassRegister = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { openModal } = useModalStore();

  const lessonId = id ? Number(id) : null;
  const isValidId = lessonId !== null && !isNaN(lessonId) && lessonId > 0;

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

  // 수정 모드일 때 폼 필드 채우기
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
    clearErrors('selectedLocation');
  };

  const handleAddTime = () => {
    const newTimes = originalHandleAddTime();
    setValue('times', newTimes, { shouldValidate: true });
  };

  const handleRemoveTime = (idx: number) => {
    const newTimes = originalHandleRemoveTime(idx);
    setValue('times', newTimes, { shouldValidate: true });
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
        // 수정 모드일 때
        classUpdateMutate(
          { lessonId, infoData: updatedInfo },
          {
            onSuccess: () => {
              queryClient.invalidateQueries({ queryKey: memberKeys.me.queryKey });
              queryClient.invalidateQueries({ queryKey: lessonKeys.list.queryKey });
              queryClient.invalidateQueries({ queryKey: lessonKeys.detail(lessonId).queryKey });
              queryClient.invalidateQueries({ queryKey: teacherKeys.me._ctx.lesson.queryKey });

              navigate(ROUTES_CONFIG.instructorClassDetail.path(String(lessonId)));
              notify({ message: CLASS_REGISTER_EDIT_MESSAGE.EDIT_SUCCESS, icon: 'success' });
            },
          }
        );
      } else {
        // 등록 모드일 때
        classRegisterMutate(updatedInfo, {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: memberKeys.me.queryKey });
            queryClient.invalidateQueries({ queryKey: lessonKeys.list.queryKey });

            navigate(ROUTES_CONFIG.classRegisterCompletion.path);
            notify({ message: CLASS_REGISTER_EDIT_MESSAGE.REGISTER_SUCCESS, icon: 'success' });
          },
          // onError: () => {
          //   navigate(ROUTES_CONFIG.error.path);
          // },
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
            onClose={() => navigate(-1)}
            rightButtonText="뒤로가기"
            onClickHandler={() => navigate(-1)}
          />
        ));
      }
    }
  }, [isEditMode, lessonData, navigate, openModal]);

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
};

export default ClassRegister;
