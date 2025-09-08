import { FormProvider, useController } from 'react-hook-form';
import { useGetInstructorRegisterInfo } from '@/pages/instructorRegister/apis/queries';
import CareerSection from '@/pages/instructorRegister/components/CareerSection/CareerSection';
import DancerNameSection from '@/pages/instructorRegister/components/DancerNameSection/DancerNameSection';
import ImageUploadSection from '@/pages/instructorRegister/components/ImageUploadSection/ImageUploadSection';
import IntroductionSection from '@/pages/instructorRegister/components/IntroductionSection/IntroductionSection';
import PersonalSNSSection from '@/pages/instructorRegister/components/PersonalSNSSection/PersonalSNSSection';
import VideoLinkSection from '@/pages/instructorRegister/components/VideoLinkSection/VideoLinkSection';
import useInstructorRegisterForm from '@/pages/instructorRegister/hooks/useInstructorRegisterForm';
import * as styles from '@/pages/instructorRegister/instructorRegister.css';
import { useGetRole } from '@/shared/apis/queries';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Divider from '@/shared/components/Divider/Divider';
import Head from '@/shared/components/Head/Head';
import useImageUploader from '@/shared/hooks/useImageUploader';

const InstructorRegister = () => {
  const { data } = useGetRole();
  const userRole = data?.role;

  // 강사 수정용 이전 정보 조회
  const { data: prevInstructorData } = useGetInstructorRegisterInfo(userRole ?? '');

  const { methods, handleSubmit, isEditMode, isButtonActive, duplicateState, setDuplicateState } =
    useInstructorRegisterForm({ userRole, prevInstructorData });

  const { field: imageField } = useController({
    name: 'imageUrls',
    control: methods.control,
  });

  // 이미지 업로드 관련
  const handleImageUploadSuccess = (url: string) => {
    imageField.onChange(url);
  };

  const { previewImg, imgRef, handleUploaderClick, uploadImgFile } = useImageUploader(
    handleImageUploadSuccess,
    undefined,
    prevInstructorData?.profileImage
  );

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
          <Divider direction="horizontal" color="gray1" length={'100%'} thickness={'0.8rem'} />

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
};

export default InstructorRegister;
