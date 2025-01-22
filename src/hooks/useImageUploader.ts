import { useRef, useState } from 'react';
import { useImageMutation } from '@/apis/common/queries';

const useImageUploader = <T extends { imageUrl: string }>(
  onSuccess: (url: string) => void,
  setInfo: React.Dispatch<React.SetStateAction<T>>
) => {
  const [previewImg, setPreviewImg] = useState<string>('');
  const [imgFile, setImgFile] = useState<File | undefined>();
  const imgRef = useRef<HTMLInputElement | null>(null);
  const { mutate: uploadImage } = useImageMutation();

  const handleUploaderClick = () => {
    if (imgRef.current) {
      imgRef.current.click();
    }
  };

  const uploadImgFile = () => {
    if (!imgRef.current || !imgRef.current.files) return;

    const file = imgRef.current.files[0];
    const formData = new FormData();
    formData.append('image', file);

    uploadImage(formData, {
      onSuccess: (data) => {
        if (data?.imageUrl) {
          onSuccess(data.imageUrl);
        }
      },
    });

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

    setInfo((prev) => ({ ...prev, imageUrl: '' }));

    if (imgRef.current) {
      imgRef.current.value = '';
    }
  };

  return {
    imgFile,
    previewImg,
    imgRef,
    handleUploaderClick,
    uploadImgFile,
    deleteImgFile,
  };
};

export default useImageUploader;
