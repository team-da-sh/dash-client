import { useState } from 'react';
import Text from '@/shared/components/Text/Text';
import * as styles from './profileImageUpload.css';

interface ProfileImageUploadPropTypes {
  defaultImageUrl: string;
  register: any;
  error?: { message?: string } | undefined;
  onFileChange?: (selected: boolean) => void;
}
const ProfileImageUpload = ({ defaultImageUrl, register, error, onFileChange }: ProfileImageUploadPropTypes) => {
  const [previewUrl, setPreviewUrl] = useState(defaultImageUrl);

  const handleImageClick = () => {
    document.getElementById('file-input')?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);

      onFileChange?.(true);
    }
  };

  return (
    <div className={styles.containerStyle}>
      <div className={styles.imgWrapperStyle}>
        <img src={previewUrl} alt="프로필 이미지" />
        <button type="button" onClick={handleImageClick}>
          <Text tag="c1_sb" color="white" className={styles.overlayStyle}>
            수정
          </Text>
        </button>
      </div>
      <input
        id="file-input"
        type="file"
        className={styles.inputStyle}
        // accept="image/jpeg,image/jpg,image/png"
        {...register('profileImageUrl')}
        onChange={handleFileChange}
      />

      {error && error.message && (
        <Text tag="b3_sb" color="alert3">
          {error.message}
        </Text>
      )}
    </div>
  );
};

export default ProfileImageUpload;
