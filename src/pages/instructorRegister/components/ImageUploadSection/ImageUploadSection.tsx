import Description from '@/pages/instructorRegister/components/Description/Description';
import {
  inputStyle,
  previewImgStyle,
} from '@/pages/instructorRegister/components/ImageUploadSection/imageUploadSection.css';
import IcPlusGray0524 from '@/shared/assets/svg/IcPlusGray0524';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

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
    <div className={sprinkles({ display: 'flex', flexDirection: 'column' })}>
      <Description title="강사 이미지 등록" />
      <div
        className={previewImgStyle({ hasImage: !!previewImg })}
        style={previewImg ? { backgroundImage: `url(${previewImg})` } : {}}
        onClick={handleUploaderClick}>
        {!previewImg && (
          <div className={sprinkles({ display: 'flex', flexDirection: 'column', alignItems: 'center' })}>
            <IcPlusGray0524 width={'2.4rem'} />
            <Text tag="c1_r" color="gray5">
              1/1
            </Text>
          </div>
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        id="profileImg"
        className={inputStyle}
        onChange={uploadImgFile}
        ref={imgRef}
      />
    </div>
  );
};

export default ImageUploadSection;
