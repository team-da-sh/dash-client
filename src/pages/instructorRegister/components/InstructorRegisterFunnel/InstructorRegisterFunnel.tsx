import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { usePostInstructor } from '@/pages/instructorRegister/apis/queries';
import CareerStep from '@/pages/instructorRegister/components/InstructorRegisterFunnel/CareerStep/CareerStep';
import ImageUploadStep from '@/pages/instructorRegister/components/InstructorRegisterFunnel/ImageUploadStep/ImageUploadStep';
import IntroductionStep from '@/pages/instructorRegister/components/InstructorRegisterFunnel/IntroductionStep/IntroductionStep';
import PersonalSNSStep from '@/pages/instructorRegister/components/InstructorRegisterFunnel/PersonalSNSStep/PersonalSNSStep';
import VideoLinkStep from '@/pages/instructorRegister/components/InstructorRegisterFunnel/VideoLinkStep/VideoLinkStep';
import { funnelContainerStyle } from '@/pages/instructorRegister/components/InstructorRegisterFunnel/instructorRegisterFunnel.css';
import { TOTAL_STEP } from '@/pages/instructorRegister/constants/funnel';
import { buttonContainerStyle } from '@/pages/instructorRegister/instructorRegister.css';
import type { InstructorRegisterInfoTypes } from '@/pages/instructorRegister/types/InstructorRegisterInfoTypes';
import type { FunnelProps, StepProps } from '@/pages/search/types/funnel';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Completion from '@/shared/components/Completion/Completion';
import { QUERY_KEYS } from '@/shared/constants/queryKey';
import useImageUploader from '@/shared/hooks/useImageUploader';
import { setAccessToken, setRefreshToken } from '@/shared/utils/handleToken';

interface InstructorRegisterFunnelPropTypes {
  currentStep: number;
  Funnel: ({ children }: FunnelProps) => JSX.Element;
  setStep: (step: number) => void;
  Step: ({ children }: StepProps) => JSX.Element;
}

const InstructorRegisterFunnel = ({ currentStep, Funnel, Step, setStep }: InstructorRegisterFunnelPropTypes) => {
  const queryClient = useQueryClient();

  const [info, setInfo] = useState({
    imageUrls: '',
    instagram: '',
    youtube: '',
    educations: [''],
    experiences: [''],
    detail: '',
    videoUrls: [''],
  });
  const [isEduNoneChecked, setEduNoneChecked] = useState(false);
  const [isCareerNoneChecked, setCareerNoneChecked] = useState(false);

  const handleEducationCheck = () => {
    setEduNoneChecked((prev) => !prev);
  };

  const handleCareerCheck = () => {
    setCareerNoneChecked((prev) => !prev);
  };

  const { mutate: instructorRegisterMutate } = usePostInstructor();

  // 이미지 업로드 로직
  const handleImageUploadSuccess = (url: string) => {
    setInfo((prev) => ({ ...prev, imageUrls: url }));
  };

  const handleDeleteUrl = () => {
    handleInfoChange('imageUrls', '');
  };

  const { imgFile, previewImg, imgRef, handleUploaderClick, uploadImgFile, deleteImgFile } = useImageUploader(
    handleImageUploadSuccess,
    handleDeleteUrl
  );

  // 이외 로직
  const handleInfoChange = <K extends keyof InstructorRegisterInfoTypes>(
    key: K,
    value: InstructorRegisterInfoTypes[K]
  ) => {
    setInfo((prev) => ({ ...prev, [key]: value }));
  };

  // 버튼 활성화 조건 체크 함수 (step 별로)
  const hasImage = () => !!info.imageUrls;
  const hasSocialId = () => info.instagram.length > 0 || info.youtube.length > 0;
  const hasEducationOrCareer = () => {
    const hasEducation = info.educations.some((edu) => edu.trim().length > 0);
    const hasCareer = info.experiences.some((exp) => exp.trim().length > 0);

    const educationValid = hasEducation || isEduNoneChecked;
    const careerValid = hasCareer || isCareerNoneChecked;

    return educationValid && careerValid;
  };
  const hasVideoUrls = () => info.videoUrls.some((url) => url.trim().length > 0);

  // 최대 글자 수 조건 기능 명세서 체크
  const hasDetailedInfo = () => info.detail.trim().length >= 30;

  const buttonActive = (currentStep: number) => {
    const stepState: Record<number, () => boolean> = {
      1: hasImage,
      2: hasSocialId,
      3: hasEducationOrCareer,
      4: hasVideoUrls,
      5: hasDetailedInfo,
      6: () => {
        return true;
      },
    };

    return stepState[currentStep]?.() ?? false;
  };

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
    };

    instructorRegisterMutate(updatedInfo, {
      onSuccess: (response) => {
        const { accessToken, refreshToken } = response.data;

        setAccessToken(accessToken);
        setRefreshToken(refreshToken);

        queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ROLE] });

        setStep(1);
      },
      onError: (error) => {
        // TODO: 실패 시 에러 페이지 띄우기 -> 페이지 디자인 추가되면 변경 예정
        console.error(error);
      },
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={funnelContainerStyle}>
          <Funnel>
            <Step name="1">
              <ImageUploadStep
                imgFile={imgFile}
                imgRef={imgRef}
                previewImg={previewImg}
                deleteImgFile={deleteImgFile}
                uploadImgFile={uploadImgFile}
                handleUploaderClick={handleUploaderClick}
              />
            </Step>
            <Step name="2">
              <PersonalSNSStep instagram={info.instagram} youtube={info.youtube} onInfoChange={handleInfoChange} />
            </Step>
            <Step name="3">
              <CareerStep
                educations={info.educations}
                experiences={info.experiences}
                onInfoChange={handleInfoChange}
                isEduNoneChecked={isEduNoneChecked}
                isCareerNoneChecked={isCareerNoneChecked}
                handleEducationCheck={handleEducationCheck}
                handleCareerCheck={handleCareerCheck}
              />
            </Step>
            <Step name="4">
              <VideoLinkStep videoUrls={info.videoUrls} onInfoChange={handleInfoChange} />
            </Step>
            <Step name="5">
              <IntroductionStep detail={info.detail} onInfoChange={handleInfoChange} />
            </Step>
            <Step name="6">
              <Completion
                title="강사 등록 완료!"
                subTitle="멋진 클래스 기대할게요"
                description="이제 마이페이지에서 내 클래스를 개설할 수 있어요"
              />
            </Step>
          </Funnel>
        </div>

        <div className={buttonContainerStyle}>
          <BoxButton
            variant="primary"
            onClick={currentStep === TOTAL_STEP - 1 ? undefined : () => setStep(1)}
            isDisabled={!buttonActive(currentStep)}
            type={currentStep === TOTAL_STEP - 1 ? 'submit' : 'button'}>
            {currentStep === TOTAL_STEP ? '완료' : '다음'}
          </BoxButton>
        </div>
      </form>
    </>
  );
};

export default InstructorRegisterFunnel;
