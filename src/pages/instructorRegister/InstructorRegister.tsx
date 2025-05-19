import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useController, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  useGetInstructorRegisterInfo,
  usePatchInstructorRegisterInfo,
  usePostInstructor,
} from '@/pages/instructorRegister/apis/queries';
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
  MIN_VIDEO_INPUT_COUNT,
} from '@/pages/instructorRegister/constants/registerSection';
import useInstructorRegisterForm from '@/pages/instructorRegister/hooks/useInstructorRegisterForm';
import * as styles from '@/pages/instructorRegister/instructorRegister.css';
import { instructorRegisterSchema } from '@/pages/instructorRegister/schema/instructorRegisterSchema';
import { setUser } from '@/pages/mypage/utils/storage';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Divider from '@/shared/components/Divider/Divider';
import Head from '@/shared/components/Head/Head';
import { USER_ROLE } from '@/shared/constants/userRole';
import useImageUploader from '@/shared/hooks/useImageUploader';
import { setAccessToken, setRefreshToken } from '@/shared/utils/handleToken';
import { ROLE_KEY } from '../mypage/constants/storageKey';

const InstructorRegister = () => {
  const navigate = useNavigate();

  // 강사 등록
  const { mutate: instructorRegisterMutate } = usePostInstructor();

  // 강사 수정
  const storageRole = JSON.parse(localStorage.getItem('userRole') || 'null');
  const { mutate: instructorPatchMutate } = usePatchInstructorRegisterInfo();
  const { data: prevInstructorData } = useGetInstructorRegisterInfo(storageRole);

  const {
    register,
    watch,
    setValue,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(instructorRegisterSchema),
    mode: 'onTouched',
    defaultValues: {
      imageUrls: '',
      instagram: '',
      youtube: '',
      educations: [''],
      experiences: [''],
      prizes: [''],
      detail: '',
      videoUrls: [''],
    },
  });

  const { detail, instagram, youtube, educations, experiences, prizes, videoUrls, imageUrls } = watch();
  const { field } = useController({
    name: 'imageUrls',
    control,
  });

  const {
    isEduNoneChecked,
    isCareerNoneChecked,
    isPrizeNoneChecked,
    isVideoNoneChecked,
    handleEducationCheck,
    handleCareerCheck,
    handlePrizeCheck,
    handleVideoCheck,
  } = useInstructorRegisterForm();

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
  const hasVideoUrl = videoUrls.some((url) => url.trim().length >= MIN_VIDEO_INPUT_COUNT);
  const videoValid = hasVideoUrl || isVideoNoneChecked;

  const buttonActive = () => {
    return !errors.detail && hasImage() && hasSocialId() && hasDancerBackground() && videoValid && hasDetailedInfo();
  };

  // 이미지 업로드 관련
  const handleImageUploadSuccess = (url: string) => {
    field.onChange(url);
  };

  const { previewImg, imgRef, handleUploaderClick, uploadImgFile } = useImageUploader(
    handleImageUploadSuccess,
    undefined,
    prevInstructorData?.profileImage
  );

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
      videoUrls: isVideoNoneChecked ? [] : videoUrls.filter((url) => url.trim() !== ''),
    };

    const onSuccess = (response: { data: { accessToken: string; refreshToken: string } }) => {
      const { accessToken, refreshToken } = response.data;

      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      setUser(ROLE_KEY, USER_ROLE.TEACHER);

      navigate(ROUTES_CONFIG.instructorRegisterCompletion.path);
    };

    const onError = () => {
      navigate(ROUTES_CONFIG.error.path);
    };

    if (storageRole === USER_ROLE.TEACHER) {
      instructorPatchMutate(updatedInfo, {
        onSuccess: () => {
          navigate(ROUTES_CONFIG.mypage.path);
        },
        onError,
      });
    } else {
      instructorRegisterMutate(updatedInfo, { onSuccess, onError });
    }
  };

  useEffect(() => {
    if (!prevInstructorData) return;

    reset({
      imageUrls: prevInstructorData.profileImage || '',
      instagram: prevInstructorData.instagram || '',
      youtube: prevInstructorData.youtube || '',
      educations: prevInstructorData.educations?.length ? prevInstructorData.educations : [''],
      experiences: prevInstructorData.experiences?.length ? prevInstructorData.experiences : [''],
      prizes: prevInstructorData.prizes?.length ? prevInstructorData.prizes : [''],
      detail: prevInstructorData.detail || '',
      videoUrls: prevInstructorData.videoUrls?.length ? prevInstructorData.videoUrls : [''],
    });
  }, [prevInstructorData, reset]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.containerStyle}>
          <div className={styles.sectionWrapperStyle}>
            <div className={styles.titleStyle}>
              <Head level="h1" tag="h6_sb">
                {`강사 프로필 ${storageRole === USER_ROLE.TEACHER ? '수정' : '등록'}`}
              </Head>
            </div>

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
            <VideoLinkSection
              videoUrls={videoUrls}
              setValue={setValue}
              isNoneChecked={isVideoNoneChecked}
              handleVideoCheck={handleVideoCheck}
            />
          </div>
        </div>

        <div className={styles.buttonContainerStyle}>
          <BoxButton variant="primary" isDisabled={!buttonActive()} type="submit">
            {storageRole === USER_ROLE.TEACHER ? '저장' : '등록'}
          </BoxButton>
        </div>
      </form>
    </>
  );
};

export default InstructorRegister;
