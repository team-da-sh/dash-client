import {
  closeIconStyle,
  inputStyle,
  previewImgStyle,
} from '@/pages/instructor/classRegister/components/ClassRepresentImage/classRepresentImage.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import { CLASS_REPRESENT_IMAGE_SUBTITLE } from '@/pages/instructor/classRegister/constants/registerSectionText';
import IcPlusGray0524 from '@/shared/assets/svg/IcPlusGray0524';
import IcXCircleMain0324 from '@/shared/assets/svg/IcXCircleMain0324';
import { sprinkles } from '@/shared/styles/sprinkles.css';

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
  return (
    <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 20, width: '100%', mb: 40 })}>
      <Description title="클래스 대표 이미지" subTitle={CLASS_REPRESENT_IMAGE_SUBTITLE} />
      <div
        className={previewImgStyle({ hasImage: !!previewImg })}
        style={previewImg ? { backgroundImage: `url(${previewImg})` } : {}}
        onClick={handleUploaderClick}>
        {!previewImg && (
          <div className={sprinkles({ display: 'flex', flexDirection: 'column', alignItems: 'center' })}>
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
  );
};

export default ClassRepresentImage;
