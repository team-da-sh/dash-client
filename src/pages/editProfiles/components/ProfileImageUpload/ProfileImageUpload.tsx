import type { Control } from 'react-hook-form';
import { useController } from 'react-hook-form';
import * as styles from '@/pages/editProfiles/components/ProfileImageUpload/profileImageUpload.css';
import type { ProfileFormValues } from '@/pages/editProfiles/schema/profileSchema';
import IcCameraMain0624 from '@/shared/assets/svg/IcCameraMain0624';
import useImageUploader from '@/shared/hooks/useImageUploader';

interface ProfileImageUploadPropTypes {
  defaultImageUrl: string;
  control: Control<ProfileFormValues>;
}
const ProfileImageUpload = ({ defaultImageUrl, control }: ProfileImageUploadPropTypes) => {
  const { field } = useController({
    name: 'profileImageUrl',
    control,
  });

  const handleSuccess = (url: string) => {
    field.onChange(url);
  };

  const handleDelete = () => {
    field.onChange('');
  };

  const { previewImg, imgRef, handleUploaderClick, uploadImgFile } = useImageUploader(handleSuccess, handleDelete);

  return (
    <div className={styles.containerStyle}>
      <div className={styles.imgWrapperStyle} onClick={handleUploaderClick}>
        <img src={previewImg || defaultImageUrl} alt="프로필 이미지" />
        <IcCameraMain0624 width={24} height={24} className={styles.icCameraStyle} />
      </div>

      <input
        id="file-input"
        type="file"
        accept="image/*"
        ref={(el) => {
          imgRef.current = el;
        }}
        className={styles.inputStyle}
        onChange={uploadImgFile}
      />
    </div>
  );
};

export default ProfileImageUpload;
