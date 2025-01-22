import Description from '@/pages/instructorRegister/components/Description';
import {
  closeIconStyle,
  inputStyle,
  previewImgStyle,
} from '@/pages/instructorRegister/components/InstructorRegisterFunnel/ImageUploadStep/index.css';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { IcPlusGray0524, IcXCircleMain0324 } from '@/assets/svg';

interface ImageUploadStepProps {
  handleUploaderClick: () => void;
  uploadImgFile: () => void;
  deleteImgFile: (e: React.MouseEvent) => void;
  previewImg: string;
  imgFile: File | undefined;
  imgRef: React.MutableRefObject<HTMLInputElement | null>;
}

const ImageUploadStep = ({
  imgFile,
  imgRef,
  previewImg,
  deleteImgFile,
  uploadImgFile,
  handleUploaderClick,
}: ImageUploadStepProps) => {
  return (
    <>
      <Description title="강사 이미지 업로드" subTitle="대표 이미지는 최대 한 장까지 등록 가능해요" />
      <Flex
        justify="center"
        align="center"
        direction="column"
        className={previewImgStyle({ hasImage: !!previewImg })}
        style={previewImg ? { backgroundImage: `url(${previewImg})` } : {}}
        onClick={handleUploaderClick}>
        {!previewImg && (
          <Flex direction="column" align="center">
            <IcPlusGray0524 width={'2.4rem'} />
            <Text tag="c1" color="gray5">
              1/1
            </Text>
          </Flex>
        )}

        {imgFile && (
          <div className={closeIconStyle} onClick={deleteImgFile}>
            <IcXCircleMain0324 width={'2.4rem'} />
          </div>
        )}
      </Flex>

      <input
        type="file"
        accept="image/*"
        id="profileImg"
        className={inputStyle}
        onChange={uploadImgFile}
        ref={imgRef}
      />
    </>
  );
};

export default ImageUploadStep;
