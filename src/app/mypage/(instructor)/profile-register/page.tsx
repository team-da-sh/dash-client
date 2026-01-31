'use client';

import { FormProvider, useController } from 'react-hook-form';
import { useGetInstructorRegisterInfo } from '@/app/mypage/(instructor)/profile-register/apis/queries';
import CareerSection from '@/app/mypage/(instructor)/profile-register/components/CareerSection/CareerSection';
import DancerNameSection from '@/app/mypage/(instructor)/profile-register/components/DancerNameSection/DancerNameSection';
import ImageUploadSection from '@/app/mypage/(instructor)/profile-register/components/ImageUploadSection/ImageUploadSection';
import IntroductionSection from '@/app/mypage/(instructor)/profile-register/components/IntroductionSection/IntroductionSection';
import PersonalSNSSection from '@/app/mypage/(instructor)/profile-register/components/PersonalSNSSection/PersonalSNSSection';
import VideoLinkSection from '@/app/mypage/(instructor)/profile-register/components/VideoLinkSection/VideoLinkSection';
import useInstructorRegisterForm from '@/app/mypage/(instructor)/profile-register/hooks/useInstructorRegisterForm';
import * as styles from '@/app/mypage/(instructor)/profile-register/index.css';
import BoxButton from '@/common/components/BoxButton/BoxButton';
import Divider from '@/common/components/Divider/Divider';
import Head from '@/common/components/Head/Head';
import { useGetRole } from '@/shared/apis/queries';
import useBlockBackWithUnsavedChanges from '@/shared/hooks/useBlockBackWithUnsavedChanges';
import useImageUploader from '@/shared/hooks/useImageUploader';

export default function Page() {
  const { data } = useGetRole();
  const userRole = data?.role;

  const { data: prevInstructorData } = useGetInstructorRegisterInfo(userRole ?? '');

  const { methods, handleSubmit, isEditMode, isButtonActive, duplicateState, setDuplicateState } =
    useInstructorRegisterForm({ userRole, prevInstructorData });

  const { field: imageField } = useController({
    name: 'imageUrls',
    control: methods.control,
  });

  const handleImageUploadSuccess = (url: string) => {
    imageField.onChange(url);
  };

  const { previewImg, imgRef, handleUploaderClick, uploadImgFile } = useImageUploader(
    handleImageUploadSuccess,
    undefined,
    prevInstructorData?.profileImage
  );

  useBlockBackWithUnsavedChanges({ methods, snapshotDeps: [prevInstructorData] });

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit}>
        <div className={styles.containerStyle}>
          <div className={styles.sectionWrapperStyle}>
            <div className={styles.titleStyle}>
              <Head level="h1" tag="h6_sb">
                {`강사 프로필 ${isEditMode ? '수정' : '등록'}`}
              </Head>
            </div>

            <div className={styles.profileImageWrapperStyle}>
              <ImageUploadSection
                imgRef={imgRef}
                previewImg={previewImg}
                uploadImgFile={uploadImgFile}
                handleUploaderClick={handleUploaderClick}
              />
            </div>
          </div>

          <div className={styles.sectionWrapperStyle}>
            <DancerNameSection duplicateState={duplicateState} setDuplicateState={setDuplicateState} />

            <IntroductionSection />
          </div>

          <Divider direction="horizontal" color="gray1" length={'100%'} thickness={'0.8rem'} />

          <div className={styles.sectionWrapperStyle}>
            <PersonalSNSSection />
          </div>
          <Divider direction="horizontal" color="gray1" length={'100%'} thickness={'0.8rem'} />

          <div className={styles.sectionWrapperStyle}>
            <CareerSection />
          </div>
          <Divider direction="horizontal" color="gray1" length={'100%'} thickness={'0.8rem'} />

          <div className={styles.sectionWrapperStyle}>
            <VideoLinkSection />
          </div>
        </div>

        <div className={styles.buttonContainerStyle}>
          <BoxButton variant="primary" isDisabled={!isButtonActive} type="submit">
            {isEditMode ? '저장' : '등록'}
          </BoxButton>
        </div>
      </form>
    </FormProvider>
  );
}
