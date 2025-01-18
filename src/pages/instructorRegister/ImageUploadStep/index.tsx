import { RefObject } from 'react';
import Description from '@/pages/instructorRegister/Description';
import { closeIconStyle, inputStyle, previewImgStyle } from '@/pages/instructorRegister/ImageUploadStep/index.css';
import Flex from '@/components/Flex';
import { IcPlusGray0524, IcXCircleGray0424 } from '@/assets/svg';

interface ImageUploadStepProps {
  imgRef: RefObject<HTMLInputElement>;
  previewImg: string | null;
  imgFile: File | undefined;
  handleUploaderClick: () => void;
  uploadImgFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
  deleteImgFile: (e: React.MouseEvent) => void;
}

const ImageUploadStep = ({
  imgRef,
  previewImg,
  imgFile,
  handleUploaderClick,
  uploadImgFile,
  deleteImgFile,
}: ImageUploadStepProps) => {
  return (
    <>
      <Description title="강사 이미지 업로드" subTitle="대표 이미지는 최대 한 장까지 등록 가능해요" />
      {/* <ImageUploader /> */}
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
            <p>1/1</p>
          </Flex>
        )}

        {imgFile && (
          <div className={closeIconStyle} onClick={deleteImgFile}>
            <IcXCircleGray0424 width={'2.4rem'} />
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
