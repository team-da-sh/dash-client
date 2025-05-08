import { useController, Control } from 'react-hook-form';
import { ProfileFormValues } from '@/pages/editProfiles/schema/profileSchema';
import Text from '@/shared/components/Text/Text';
import useImageUploader from '@/shared/hooks/useImageUploader';
import * as styles from './profileImageUpload.css';

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

        <Text tag="c1_sb" color="white" className={styles.overlayStyle}>
          수정
        </Text>
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
