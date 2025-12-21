import * as styles from '@/pages/instructorRegister/components/ImageUploadSection/imageUploadSection.css';
import IcProfileBasic from '@/shared/assets/svg/IcProfileBasic';
import Text from '@/shared/components/Text/Text';

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
}: ImageUploadSectionPropTypes) => {
  return (
    <section className={styles.containerStyle}>
      <button
        type="button"
        className={styles.previewImgStyle}
        onClick={handleUploaderClick}
        style={previewImg ? { backgroundImage: `url(${previewImg})` } : undefined}>
        {!previewImg && <IcProfileBasic width={96} height={96} />}
        <Text tag="c1_sb" color="white" className={styles.overlayStyle}>
          수정
        </Text>
      </button>

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
