import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
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
import * as styles from '@/pages/instructorRegister/instructorRegister.css';
import { instructorRegisterSchema } from '@/pages/instructorRegister/schema/instructorRegisterSchema';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { useGetRole } from '@/shared/apis/queries';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Divider from '@/shared/components/Divider/Divider';
import Head from '@/shared/components/Head/Head';
import { QUERY_KEYS } from '@/shared/constants/queryKey';
import { USER_ROLE } from '@/shared/constants/userRole';
import useImageUploader from '@/shared/hooks/useImageUploader';
import { setAccessToken, setRefreshToken } from '@/shared/utils/handleToken';

const InstructorRegister = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // 강사 등록
  const { mutate: instructorRegisterMutate } = usePostInstructor();

  // 강사 수정
  const { data } = useGetRole();
  const userRole = data?.role;

  const { mutate: instructorPatchMutate } = usePatchInstructorRegisterInfo();
  const { data: prevInstructorData } = useGetInstructorRegisterInfo(userRole ?? '');

  const {
    register,
    watch,
    setValue,
    control,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm({
    resolver: zodResolver(instructorRegisterSchema),
    mode: 'onTouched',
    defaultValues: {
      detail: '',
      instagram: '',
      youtube: '',
      imageUrls: '',
      educations: [''],
      experiences: [''],
      prizes: [''],
      videoUrls: [''],
      isEduNoneChecked: false,
      isCareerNoneChecked: false,
      isPrizeNoneChecked: false,
      isVideoNoneChecked: false,
    },
  });

  const {
    detail,
    instagram,
    youtube,
    educations,
    experiences,
    prizes,
    videoUrls,
    imageUrls,
    isEduNoneChecked,
    isCareerNoneChecked,
    isPrizeNoneChecked,
    isVideoNoneChecked,
  } = watch();

  const { field } = useController({
    name: 'imageUrls',
    control,
  });

  const isEditMode = userRole === USER_ROLE.TEACHER;
  const isButtonActive = isEditMode ? isDirty && isValid : isValid;

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
      detail: detail.trim(),

      instagram: instagram?.trim() === '' ? null : `${instagram?.trim()}`,
      youtube: youtube?.trim() === '' ? null : `${youtube?.trim()}`,

      educations: isEduNoneChecked ? [] : educations.filter((education) => education.trim() !== ''),
      experiences: isCareerNoneChecked ? [] : experiences.filter((experience) => experience.trim() !== ''),
      prizes: isPrizeNoneChecked ? [] : prizes.filter((prize) => prize.trim() !== ''),

      videoUrls: isVideoNoneChecked ? [] : videoUrls.filter((url) => url.trim() !== ''),
    };

    // 강사 등록 성공 함수
    const onSuccessRegister = (response: { data: { accessToken: string; refreshToken: string } }) => {
      const { accessToken, refreshToken } = response.data;

      setAccessToken(accessToken);
      setRefreshToken(refreshToken);

      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.AUTH_ROLE] });

      navigate(ROUTES_CONFIG.instructorRegisterCompletion.path);
    };

    // 강사 수정 성공 함수
    const onSuccessEdit = () => {
      // 강사 수정용 조회 API invalidate
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TEACHER_DETAIL_INTRODUCTION] });
      // 마이페이지 강사 조회 API invalidate
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TEACHERS_ME] });
      // 댄서 조회 API invalidate
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TEACHER_DETAIL] });

      navigate(ROUTES_CONFIG.mypage.path);
    };

    const onError = () => {
      navigate(ROUTES_CONFIG.error.path);
    };

    if (isEditMode) {
      // 강사 수정 (이미 강사 등록된 경우)
      instructorPatchMutate(updatedInfo, {
        onSuccess: onSuccessEdit,
        onError,
      });
    } else {
      // 강사 등록 (아직 강사 등록 안된 경우)
      instructorRegisterMutate(updatedInfo, {
        onSuccess: onSuccessRegister,
        onError,
      });
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

      isEduNoneChecked: !(prevInstructorData.educations?.length > 0),
      isCareerNoneChecked: !(prevInstructorData.experiences?.length > 0),
      isPrizeNoneChecked: !(prevInstructorData.prizes?.length > 0),
      isVideoNoneChecked: !(prevInstructorData.videoUrls?.length > 0),
    });
  }, [prevInstructorData, reset]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.containerStyle}>
          <div className={styles.sectionWrapperStyle}>
            <div className={styles.titleStyle}>
              <Head level="h1" tag="h6_sb">
                {`강사 프로필 ${isEditMode ? '수정' : '등록'}`}
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
            />
          </div>
          <Divider direction="horizontal" color="gray1" length={'100%'} thickness={'0.8rem'} />

          <div className={styles.sectionWrapperStyle}>
            <VideoLinkSection videoUrls={videoUrls} setValue={setValue} isNoneChecked={isVideoNoneChecked} />
          </div>
        </div>

        <div className={styles.buttonContainerStyle}>
          <BoxButton variant="primary" isDisabled={!isButtonActive} type="submit">
            {isEditMode ? '저장' : '등록'}
          </BoxButton>
        </div>
      </form>
    </>
  );
};

export default InstructorRegister;
