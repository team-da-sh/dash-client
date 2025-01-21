import Description from '@/pages/instructorRegister/Description';
import {
  closeIconStyle,
  inputStyle,
  previewImgStyle,
} from '@/pages/instructorRegister/InstructorRegisterFunnel/ImageUploadStep/index.css';
import Flex from '@/components/Flex';
import { useUploadImg } from '@/hooks/useUploadImg';
import { IcPlusGray0524, IcXCircleGray0424 } from '@/assets/svg';

const ImageUploadStep = () => {
  const { imgRef, previewImg, imgFile, handleUploaderClick, uploadImgFile, deleteImgFile } = useUploadImg();

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
