import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePostInstructor } from '@/pages/instructorRegister/apis/queries';
import CareerSection from '@/pages/instructorRegister/components/CareerSection/CareerSection';
import ImageUploadSection from '@/pages/instructorRegister/components/ImageUploadSection/ImageUploadSection';
import IntroductionSection from '@/pages/instructorRegister/components/IntroductionSection/IntroductionSection';
import PersonalSNSSection from '@/pages/instructorRegister/components/PersonalSNSSection/PersonalSNSSection';
import VideoLinkSection from '@/pages/instructorRegister/components/VideoLinkSection/VideoLinkSection';
import { MIN_INTRODUCTION_LENGTH } from '@/pages/instructorRegister/constants/registerSection';
import {
  buttonContainerStyle,
  containerStyle,
  sectionWrapperStyle,
} from '@/pages/instructorRegister/instructorRegister.css';
import type { InstructorRegisterInfoTypes } from '@/pages/instructorRegister/types/InstructorRegisterInfoTypes';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Divider from '@/shared/components/Divider/Divider';
import { QUERY_KEYS } from '@/shared/constants/queryKey';
import useImageUploader from '@/shared/hooks/useImageUploader';
import { setAccessToken, setRefreshToken } from '@/shared/utils/handleToken';

const InstructorRegister = () => {
  const queryClient = useQueryClient();
  const { mutate: instructorRegisterMutate } = usePostInstructor();
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    imageUrls: '',
    instagram: '',
    youtube: '',
    educations: [''],
    experiences: [''],
    prizes: [''],
    detail: '',
    videoUrls: [''],
  });

  const [isEduNoneChecked, setEduNoneChecked] = useState(false);
  const [isCareerNoneChecked, setCareerNoneChecked] = useState(false);
  const [isPrizeNoneChecked, setPrizeNoneChecked] = useState(false);
  const [isDetailError, setIsDetailError] = useState(false);

  const handleDetailError = (isError: boolean) => {
    setIsDetailError(isError);
  };

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
  const hasDetailedInfo = () => info.detail.trim().length >= MIN_INTRODUCTION_LENGTH;
  const hasImage = () => !!info.imageUrls;
  const hasSocialId = () => info.instagram.length > 0 || info.youtube.length > 0;
  const hasDancerBackground = () => {
    const hasEducation = info.educations.some((edu) => edu.trim().length > 0);
    const hasCareer = info.experiences.some((exp) => exp.trim().length > 0);
    const hasPrize = info.prizes.some((prize) => prize.trim().length > 0);

    const educationValid = hasEducation || isEduNoneChecked;
    const careerValid = hasCareer || isCareerNoneChecked;
    const prizeValid = hasPrize || isPrizeNoneChecked;

    return educationValid && careerValid && prizeValid;
  };
  const hasVideoUrls = () => info.videoUrls.some((url) => url.trim().length > 0);

  const buttonActive = () => {
    return (
      !isDetailError && hasImage() && hasSocialId() && hasDancerBackground() && hasVideoUrls() && hasDetailedInfo()
    );
  };

  // 이미지 업로드 로직
  const handleImageUploadSuccess = (url: string) => {
    setInfo((prev) => ({ ...prev, imageUrls: url }));
  };

  const { previewImg, imgRef, handleUploaderClick, uploadImgFile } = useImageUploader(handleImageUploadSuccess);

  // form submit 함수
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedInfo = {
      ...info,
      imageUrls: [info.imageUrls],
      instagram: info.instagram.trim() === '' ? null : `https://www.instagram.com/${info.instagram.trim()}`,
      youtube: info.youtube.trim() === '' ? null : `https://www.youtube.com/@${info.youtube.trim()}`,

      educations: isEduNoneChecked ? [] : info.educations.filter((education) => education.trim() !== ''),
      experiences: isCareerNoneChecked ? [] : info.experiences.filter((experience) => experience.trim() !== ''),
      prizes: isPrizeNoneChecked ? [] : info.prizes.filter((prize) => prize.trim() !== ''),
    };

    instructorRegisterMutate(updatedInfo, {
      onSuccess: (response) => {
        const { accessToken, refreshToken } = response.data;

        setAccessToken(accessToken);
        setRefreshToken(refreshToken);

        queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ROLE] });
      },
      onError: () => {
        navigate(ROUTES_CONFIG.error.path);
      },
    });
  };

  // 이외 로직
  const handleInfoChange = <K extends keyof InstructorRegisterInfoTypes>(
    key: K,
    value: InstructorRegisterInfoTypes[K]
  ) => {
    setInfo((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={containerStyle}>
          <div className={sectionWrapperStyle}>
            <ImageUploadSection
              imgRef={imgRef}
              previewImg={previewImg}
              uploadImgFile={uploadImgFile}
              handleUploaderClick={handleUploaderClick}
            />

            <IntroductionSection
              detail={info.detail}
              onInfoChange={handleInfoChange}
              isDetailError={isDetailError}
              handleDetailError={handleDetailError}
            />
          </div>
          <Divider direction="horizontal" color="gray1" length={'100%'} thickness={'0.8rem'} />

          <div className={sectionWrapperStyle}>
            <PersonalSNSSection instagram={info.instagram} youtube={info.youtube} onInfoChange={handleInfoChange} />
          </div>
          <Divider direction="horizontal" color="gray1" length={'100%'} thickness={'0.8rem'} />

          <div className={sectionWrapperStyle}>
            <CareerSection
              educations={info.educations}
              experiences={info.experiences}
              prizes={info.prizes}
              onInfoChange={handleInfoChange}
              isEduNoneChecked={isEduNoneChecked}
              isCareerNoneChecked={isCareerNoneChecked}
              isPrizeNoneChecked={isPrizeNoneChecked}
              handleEducationCheck={handleEducationCheck}
              handleCareerCheck={handleCareerCheck}
              handlePrizeCheck={handlePrizeCheck}
            />
          </div>
          <Divider direction="horizontal" color="gray1" length={'100%'} thickness={'0.8rem'} />

          <div className={sectionWrapperStyle}>
            <VideoLinkSection videoUrls={info.videoUrls} onInfoChange={handleInfoChange} />
          </div>
        </div>

        <div className={buttonContainerStyle}>
          <BoxButton variant="primary" isDisabled={!buttonActive()} type="submit">
            등록
          </BoxButton>
        </div>
      </form>
    </>
  );
};

export default InstructorRegister;
