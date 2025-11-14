import { useState } from 'react';
import type { Control } from 'react-hook-form';
import { useController } from 'react-hook-form';
import BottomSheet from '@/pages/editProfiles/components/BottomSheet/BottomSheet';
import * as styles from '@/pages/editProfiles/components/ProfileImageUpload/profileImageUpload.css';
import type { ProfileFormValues } from '@/pages/editProfiles/schema/profileSchema';
import IcProfileBasic from '@/shared/assets/svg/IcProfileBasic';
import Text from '@/shared/components/Text/Text';
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

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const openBottomSheet = () => {
    document.body.style.overflow = 'hidden';
    setIsSheetOpen(true);
  };

  const closeBottomSheet = () => {
    document.body.style.overflow = '';
    setIsSheetOpen(false);
  };

  const handleSuccess = (url: string) => {
    field.onChange(url);
    closeBottomSheet();
  };

  const handleDelete = () => {
    field.onChange('');
    if (imgRef.current) imgRef.current.value = '';
    closeBottomSheet();
  };

  const { previewImg, imgRef, handleUploaderClick, deleteImgFile, uploadImgFile } = useImageUploader(
    handleSuccess,
    handleDelete,
    defaultImageUrl,
    closeBottomSheet
  );

  const handleImageClick = () => {
    if (previewImg) {
      openBottomSheet();
    } else {
      handleUploaderClick();
    }
  };

  return (
    <>
      <div className={styles.containerStyle}>
        <button
          type="button"
          className={styles.imgWrapperStyle}
          style={previewImg ? { backgroundImage: `url(${previewImg})` } : undefined}
          onClick={handleImageClick}>
          {!previewImg && <IcProfileBasic width={96} height={96} />}
          <Text tag="c1_sb" color="white" className={styles.overlayStyle}>
            수정
          </Text>
        </button>
        <input
          id="file-input"
          type="file"
          accept="image/*"
          className={styles.inputStyle}
          onChange={uploadImgFile}
          ref={imgRef}
        />
      </div>

      <BottomSheet
        isVisible={isSheetOpen}
        onClose={closeBottomSheet}
        onSelectImage={() => {
          closeBottomSheet();
          handleUploaderClick();
        }}
        onDeleteImage={() => {
          deleteImgFile();
          handleDelete();
        }}
      />
    </>
  );
};

export default ProfileImageUpload;
