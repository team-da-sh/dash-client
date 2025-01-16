import { useRef, useState } from 'react';
import Flex from '@/components/Flex';
import { IcPlusGray0524 } from '@/assets/svg';
import { inputStyle, previewImgStyle } from './index.css';

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
          <Flex direction="column" align="center" style={{ border: '1px solid blue' }}>
            <IcPlusGray0524 width={'2.4rem'} />
            <p>1/1</p>
          </Flex>
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
