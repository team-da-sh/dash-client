import { useState } from 'react';
import { usePostInstructor } from '@/pages/instructorRegister/apis/queries';
import CareerStep from '@/pages/instructorRegister/components/InstructorRegisterFunnel/CareerStep/CareerStep';
import ImageUploadStep from '@/pages/instructorRegister/components/InstructorRegisterFunnel/ImageUploadStep/ImageUploadStep';
import IntroductionStep from '@/pages/instructorRegister/components/InstructorRegisterFunnel/IntroductionStep/IntroductionStep';
import PersonalSNSStep from '@/pages/instructorRegister/components/InstructorRegisterFunnel/PersonalSNSStep/PersonalSNSStep';
import VideoLinkStep from '@/pages/instructorRegister/components/InstructorRegisterFunnel/VideoLinkStep/VideoLinkStep';
import { funnelContainerStyle } from '@/pages/instructorRegister/components/InstructorRegisterFunnel/instructorRegisterFunnel.css';
import { TOTAL_STEP } from '@/pages/instructorRegister/constants';
import { buttonContainerStyle } from '@/pages/instructorRegister/instructorRegister.css';
import { InstructorRegisterInfoTypes } from '@/pages/instructorRegister/types/InstructorRegisterInfoTypes';
import { FunnelProps, StepProps } from '@/pages/search/types/funnel';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Completion from '@/shared/components/Completion/Completion';
import useImageUploader from '@/shared/hooks/useImageUploader';
import { setAccessToken, setRefreshToken } from '@/shared/utils/handleToken';

interface InstructorRegisterFunnelProps {
  currentStep: number;
  Funnel: ({ children }: FunnelProps) => JSX.Element;
  setStep: (step: number) => void;
  Step: ({ children }: StepProps) => JSX.Element;
}

const InstructorRegisterFunnel = ({ currentStep, Funnel, Step, setStep }: InstructorRegisterFunnelProps) => {
  const [info, setInfo] = useState({
    imageUrls: '',
    instagram: '',
    youtube: '',
    educations: [''],
    experiences: [''],
    detail: '',
    videoUrls: [''],
  });

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

  const buttonActive = (currentStep: number) => {
    switch (currentStep) {
      case 1:
        return !!info.imageUrls;
      case 2:
        return info.instagram.length > 0 || info.youtube.length > 0;
      case 3:
        return (
          info.educations.some((education) => education.trim().length > 0) ||
          info.experiences.some((experience) => experience.trim().length > 0)
        );
      case 4:
        return info.videoUrls.filter((url) => url.trim().length > 0)[0]?.trim().length > 0;
      case 5:
        return info.detail.trim().length > 0 && info.detail.length >= 30;
      case 6:
        return true;
      default:
        return false;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedInfo = {
      ...info,
      imageUrls: [info.imageUrls],
      instagram: info.instagram.trim() === '' ? null : `https://www.instagram.com/${info.instagram.trim()}`,
      youtube: info.youtube.trim() === '' ? null : `https://www.youtube.com/@${info.youtube.trim()}`,

      educations: info.educations.every((education) => education.trim() === '') ? [] : info.educations,
      experiences: info.experiences.every((experience) => experience.trim() === '') ? [] : info.experiences,
    };

    instructorRegisterMutate(updatedInfo, {
      onSuccess: (response) => {
        const { accessToken, refreshToken } = response.data;

        setAccessToken(accessToken);
        setRefreshToken(refreshToken);

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
              <CareerStep educations={info.educations} experiences={info.experiences} onInfoChange={handleInfoChange} />
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
