import {
  icCameraStyle,
  inputStyle,
  previewImgStyle,
} from '@/pages/instructorRegister/components/ImageUploadSection/imageUploadSection.css';
import IcCameraMain0624 from '@/shared/assets/svg/IcCameraMain0624';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import defaultProfile from '/images/image_profile_basic.png';

interface ImageUploadSectionPropTypes {
  handleUploaderClick: () => void;
  uploadImgFile: () => void;
  previewImg: string;
  imgRef: React.MutableRefObject<HTMLInputElement | null>;
}

const ImageUploadSection = ({
  imgRef,
  previewImg,
  uploadImgFile,
  handleUploaderClick,
}: ImageUploadSectionPropTypes) => {
  return (
    <section className={sprinkles({ display: 'flex', flexDirection: 'column' })}>
      <div
        className={previewImgStyle}
        style={previewImg ? { backgroundImage: `url(${previewImg})` } : { backgroundImage: `url(${defaultProfile})` }}
        onClick={handleUploaderClick}>
        <IcCameraMain0624 width={24} height={24} className={icCameraStyle} />
      </div>

      <input
        type="file"
        accept="image/*"
        id="profileImg"
        className={inputStyle}
        onChange={uploadImgFile}
        ref={imgRef}
      />
    </section>
  );
};

export default ImageUploadSection;
