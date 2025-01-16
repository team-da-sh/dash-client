import { useEffect, useRef, useState } from 'react';
import Flex from '@/components/Flex';
import { IcPlusGray0524, IcXCircleGray0424 } from '@/assets/svg';
import { closeIconStyle, inputStyle, previewImgStyle } from './index.css';

const ImageUploader = () => {
  const [previewImg, setPreviewImg] = useState('');
  const [imgFile, setImgFile] = useState<File>();
  const imgRef = useRef<HTMLInputElement | null>(null);

  const handleUploaderClick = () => {
    if (imgRef.current) {
      imgRef.current.click();
    }
  };

  const uploadImgFile = () => {
    if (!imgRef.current || !imgRef.current.files) {
      return;
    }
    const file = imgRef.current.files[0];
    const reader = new FileReader();

    setImgFile(file);

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setPreviewImg(reader.result);
      }
    };
  };

  const deleteImgFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgFile(undefined);
    setPreviewImg('');

    if (imgRef.current) {
      imgRef.current.value = '';
    }
  };

  useEffect(() => {
    console.log(imgFile);
  }, [imgFile]);

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
