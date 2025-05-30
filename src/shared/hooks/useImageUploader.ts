import { useEffect, useRef, useState } from 'react';
import { useImageMutation } from '@/shared/apis/queries';
import { resizeImage } from '@/shared/utils/resizeImage';

const useImageUploader = (
  onSuccess: (url: string) => void,
  handleDeleteUrl?: () => void,
  initialImageUrl?: string,
  handleCloseBottomSheet?: () => void
) => {
  const [previewImg, setPreviewImg] = useState<string>(initialImageUrl || '');
  const [imgFile, setImgFile] = useState<File | undefined>();
  const imgRef = useRef<HTMLInputElement | null>(null);
  const { mutate: uploadImage } = useImageMutation();

  useEffect(() => {
    if (initialImageUrl) {
      setPreviewImg(initialImageUrl);
    }
  }, [initialImageUrl]);

  const handleUploaderClick = () => {
    if (imgRef.current) {
      imgRef.current.click();
    }
  };

  const uploadImgFile = async () => {
    if (!imgRef.current || !imgRef.current.files) return;

    const file = imgRef.current.files[0];
    const image = await resizeImage(file);

    const formData = new FormData();
    formData.append('image', image);

    uploadImage(formData, {
      onSuccess: (data) => {
        if (data?.imageUrl) {
          onSuccess(data.imageUrl);
          handleCloseBottomSheet?.();
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

  const deleteImgFile = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setImgFile(undefined);
    setPreviewImg('');

    if (handleDeleteUrl) {
      handleDeleteUrl();
    }
    handleCloseBottomSheet?.();

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
    setPreviewImg,
  };
};

export default useImageUploader;
