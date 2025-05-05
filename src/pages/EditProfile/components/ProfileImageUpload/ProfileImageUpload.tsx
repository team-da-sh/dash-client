import Text from '@/shared/components/Text/Text';
import useImageUploader from '@/shared/hooks/useImageUploader';
import * as styles from './profileImageUpload.css';

interface ProfileImageUploadPropTypes {
  defaultImageUrl: string;
  register: any;
  error?: { message?: string } | undefined;
  onFileChange?: (selected: boolean) => void;
}
const ProfileImageUpload = ({ defaultImageUrl, register, onFileChange }: ProfileImageUploadPropTypes) => {
  const handleSuccess = (url: string) => {
    onFileChange?.(true);
  };

  const handleDelete = () => {
    onFileChange?.(true);
  };

  const { previewImg, imgRef, handleUploaderClick, uploadImgFile, deleteImgFile } = useImageUploader(
    handleSuccess,
    handleDelete
  );

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
          register('profileImageUrl').ref(el);
        }}
        className={styles.inputStyle}
        onChange={uploadImgFile}
      />
    </div>
  );
};

export default ProfileImageUpload;
