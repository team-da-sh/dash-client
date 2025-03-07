import { useRef, useState } from 'react';

export const useUploadImg = () => {
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

  return { handleUploaderClick, uploadImgFile, deleteImgFile, previewImg, imgFile, imgRef };
};
