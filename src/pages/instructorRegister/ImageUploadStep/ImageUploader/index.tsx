import Flex from '@/components/Flex';
import { useUploadImg } from '@/hooks/useUploadImg';
import { IcPlusGray0524, IcXCircleGray0424 } from '@/assets/svg';
import { closeIconStyle, inputStyle, previewImgStyle } from './index.css';

const ImageUploader = () => {
  const { imgRef, previewImg, imgFile, handleUploaderClick, uploadImgFile, deleteImgFile } = useUploadImg();
  return (
    <>
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

export default ImageUploader;
