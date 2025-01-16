import Description from '../Description';
import ImageUploader from './ImageUploader';

const ImageUploadStep = () => {
  return (
    <>
      <Description title="강사 이미지 업로드" subTitle="대표 이미지는 최대 한 장까지 등록 가능해요" />
      <ImageUploader />
    </>
  );
};

export default ImageUploadStep;
