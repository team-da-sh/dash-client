import * as styles from '@/pages/instructorRegister/components/ImageUploadSection/imageUploadSection.css';
import IcCameraMain0624 from '@/shared/assets/svg/IcCameraMain0624';
import IcProfileBasic from '@/shared/assets/svg/IcProfileBasic';

interface ImageUploadSectionPropTypes {
  handleUploaderClick?: () => void;
  uploadImgFile: () => void;
  previewImg: string | null;
  imgRef: React.MutableRefObject<HTMLInputElement | null>;
  onClick?: () => void;
}

const ImageUploadSection = ({
  imgRef,
  previewImg,
  uploadImgFile,
  handleUploaderClick,
  onClick,
}: ImageUploadSectionPropTypes) => {
  return (
    <section className={styles.containerStyle} onClick={onClick}>
      <div
        className={styles.previewImgStyle}
        onClick={handleUploaderClick}
        style={previewImg ? { backgroundImage: `url(${previewImg})` } : undefined}>
        {!previewImg && <IcProfileBasic width={96} height={96} />}
        <IcCameraMain0624 width={24} height={24} className={styles.icCameraStyle} />
      </div>

      <input
        type="file"
        accept="image/*"
        id="profileImg"
        className={styles.inputStyle}
        onChange={uploadImgFile}
        ref={imgRef}
      />
    </section>
  );
};

export default ImageUploadSection;
