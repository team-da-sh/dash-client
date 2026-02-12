import type { FieldError } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import {
  closeIconStyle,
  inputStyle,
  previewImgStyle,
  containerStyle,
  contentWrapperStyle,
  uploadIconWrapperStyle,
  errorMessageStyle,
} from '@/app/my/(instructor)/create-class/components/ClassRepresentImage/classRepresentImage.css';
import Description from '@/app/my/(instructor)/create-class/components/Description';
import { CLASS_REPRESENT_IMAGE_SUBTITLE } from '@/app/my/(instructor)/create-class/constants/registerSectionText';
import Text from '@/common/components/Text/Text';
import IcPlusGray0524 from '@/shared/assets/svg/IcPlusGray0524';
import IcXCircleMain0324 from '@/shared/assets/svg/IcXCircleMain0324';

interface ClassRepresentImagePropTypes {
  handleUploaderClick: () => void;
  uploadImgFile: () => void;
  deleteImgFile: (e: React.MouseEvent) => void;
  previewImg: string;
  imgFile: File | undefined;
  imgRef: React.MutableRefObject<HTMLInputElement | null>;
}

const ClassRepresentImage = ({
  imgRef,
  imgFile,
  previewImg,
  handleUploaderClick,
  uploadImgFile,
  deleteImgFile,
}: ClassRepresentImagePropTypes) => {
  const {
    formState: { errors },
  } = useFormContext();
  const error = errors.imageUrls as FieldError | undefined;

  return (
    <div className={containerStyle}>
      <div className={contentWrapperStyle}>
        <Description title="클래스 대표 이미지" subTitle={CLASS_REPRESENT_IMAGE_SUBTITLE} />
        <div
          className={previewImgStyle({ hasImage: !!previewImg })}
          style={previewImg ? { backgroundImage: `url(${previewImg})` } : {}}
          onClick={handleUploaderClick}>
          {!previewImg && (
            <div className={uploadIconWrapperStyle}>
              <IcPlusGray0524 width={'2.4rem'} />
            </div>
          )}

          {imgFile && (
            <div className={closeIconStyle} onClick={deleteImgFile}>
              <IcXCircleMain0324 width={'2.4rem'} />
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
      {error && (
        <div className={errorMessageStyle}>
          <Text tag="b3_r" color="alert3">
            {error.message}
          </Text>
        </div>
      )}
    </div>
  );
};

export default ClassRepresentImage;
