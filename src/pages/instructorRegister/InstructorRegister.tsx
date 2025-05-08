import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useController, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { usePostInstructor } from '@/pages/instructorRegister/apis/queries';
import CareerSection from '@/pages/instructorRegister/components/CareerSection/CareerSection';
import ImageUploadSection from '@/pages/instructorRegister/components/ImageUploadSection/ImageUploadSection';
import IntroductionSection from '@/pages/instructorRegister/components/IntroductionSection/IntroductionSection';
import PersonalSNSSection from '@/pages/instructorRegister/components/PersonalSNSSection/PersonalSNSSection';
import VideoLinkSection from '@/pages/instructorRegister/components/VideoLinkSection/VideoLinkSection';
import {
  MIN_CAREER_INPUT_COUNT,
  MIN_EDUCATION_INPUT_COUNT,
  MIN_INTRODUCTION_LENGTH,
  MIN_PRIZE_INPUT_COUNT,
  MIN_VIDEO_INPUT,
} from '@/pages/instructorRegister/constants/registerSection';
import * as styles from '@/pages/instructorRegister/instructorRegister.css';
import { ROLE_KEY } from '@/pages/mypage/constants/storageKey';
import { setUser } from '@/pages/mypage/utils/storage';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Divider from '@/shared/components/Divider/Divider';
import useImageUploader from '@/shared/hooks/useImageUploader';
import { setAccessToken, setRefreshToken } from '@/shared/utils/handleToken';
import { instructorRegisterSchema } from './schema/instructorRegisterSchema';

const InstructorRegister = () => {
  const { mutate: instructorRegisterMutate } = usePostInstructor();
  const navigate = useNavigate();

  const {
    register,
    watch,
    setValue,
    setFocus,
    control,
    formState: { errors, isDirty },
  } = useForm({
    resolver: zodResolver(instructorRegisterSchema),
    mode: 'onChange',
    defaultValues: {
      imageUrls: '',
      instagram: '',
      youtube: '',
      educations: [''],
      experiences: [''],
      prizes: [''],
      detail: '',
      videoUrls: [{ value: '' }],
    },
  });

  useEffect(() => {
    console.log('isDirty', isDirty);
  }, [isDirty]);

  const { detail, instagram, youtube, educations, experiences, prizes, videoUrls, imageUrls } = watch();
  const { field } = useController({
    name: 'imageUrls',
    control,
  });

  const [isEduNoneChecked, setEduNoneChecked] = useState(false);
  const [isCareerNoneChecked, setCareerNoneChecked] = useState(false);
  const [isPrizeNoneChecked, setPrizeNoneChecked] = useState(false);

  const handleEducationCheck = () => {
    setEduNoneChecked((prev) => !prev);
  };

  const handleCareerCheck = () => {
    setCareerNoneChecked((prev) => !prev);
  };

  const handlePrizeCheck = () => {
    setPrizeNoneChecked((prev) => !prev);
  };

  // 버튼 활성화 조건 체크 함수
  const hasDetailedInfo = () => detail.trim().length >= MIN_INTRODUCTION_LENGTH;
  const hasImage = () => !!imageUrls;
  const hasSocialId = () => !!instagram || !!youtube;
  const hasDancerBackground = () => {
    const hasEducation = educations.some((edu) => edu.trim().length >= MIN_EDUCATION_INPUT_COUNT);
    const hasCareer = experiences.some((exp) => exp.trim().length >= MIN_CAREER_INPUT_COUNT);
    const hasPrize = prizes.some((prize) => prize.trim().length >= MIN_PRIZE_INPUT_COUNT);

    const educationValid = hasEducation || isEduNoneChecked;
    const careerValid = hasCareer || isCareerNoneChecked;
    const prizeValid = hasPrize || isPrizeNoneChecked;

    return educationValid && careerValid && prizeValid;
  };
  const hasVideoUrls = () => videoUrls.some((url) => url.value.trim().length >= MIN_VIDEO_INPUT);

  useEffect(() => {
    console.log('videoUrls', videoUrls);
  }, [videoUrls]);

  const buttonActive = () => {
    return (
      !errors.detail && hasImage() && hasSocialId() && hasDancerBackground() && hasVideoUrls() && hasDetailedInfo()
    );
  };

  const handleImageUploadSuccess = (url: string) => {
    field.onChange(url);
  };

  const { previewImg, imgRef, handleUploaderClick, uploadImgFile } = useImageUploader(handleImageUploadSuccess);

  // form submit 함수
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedInfo = {
      imageUrls: [imageUrls],
      instagram: instagram?.trim() === '' ? null : `https://www.instagram.com/${instagram?.trim()}`,
      youtube: youtube?.trim() === '' ? null : `https://www.youtube.com/@${youtube?.trim()}`,

      educations: isEduNoneChecked ? [] : educations.filter((education) => education.trim() !== ''),
      experiences: isCareerNoneChecked ? [] : experiences.filter((experience) => experience.trim() !== ''),
      prizes: isPrizeNoneChecked ? [] : prizes.filter((prize) => prize.trim() !== ''),

      detail: detail.trim(),
      videoUrls: videoUrls.map((url) => url.value.trim()).filter((value) => value !== ''),
    };

    instructorRegisterMutate(updatedInfo, {
      onSuccess: (response) => {
        const { accessToken, refreshToken } = response.data;

        setAccessToken(accessToken);
        setRefreshToken(refreshToken);

        setUser(ROLE_KEY, 'TEACHER');
      },
      onError: () => {
        navigate(ROUTES_CONFIG.error.path);
      },
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.containerStyle}>
          <div className={styles.sectionWrapperStyle}>
            <ImageUploadSection
              imgRef={imgRef}
              previewImg={previewImg}
              uploadImgFile={uploadImgFile}
              handleUploaderClick={handleUploaderClick}
            />

            <IntroductionSection register={register} error={errors.detail} detail={detail} />
          </div>
          <Divider direction="horizontal" color="gray1" length={'100%'} thickness={'0.8rem'} />

          <div className={styles.sectionWrapperStyle}>
            <PersonalSNSSection instagram={instagram} youtube={youtube} register={register} />
          </div>
          <Divider direction="horizontal" color="gray1" length={'100%'} thickness={'0.8rem'} />

          <div className={styles.sectionWrapperStyle}>
            <CareerSection
              educations={educations}
              experiences={experiences}
              prizes={prizes}
              // register={register}
              setValue={setValue}
              isEduNoneChecked={isEduNoneChecked}
              isCareerNoneChecked={isCareerNoneChecked}
              isPrizeNoneChecked={isPrizeNoneChecked}
              handleEducationCheck={handleEducationCheck}
              handleCareerCheck={handleCareerCheck}
              handlePrizeCheck={handlePrizeCheck}
            />
          </div>
          <Divider direction="horizontal" color="gray1" length={'100%'} thickness={'0.8rem'} />

          <div className={styles.sectionWrapperStyle}>
            <VideoLinkSection control={control} register={register} setFocus={setFocus} />
          </div>
        </div>

        <div className={styles.buttonContainerStyle}>
          <BoxButton variant="primary" isDisabled={!buttonActive()} type="submit">
            등록
          </BoxButton>
        </div>
      </form>
    </>
  );
};

export default InstructorRegister;
