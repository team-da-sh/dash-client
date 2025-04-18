import {
  closeIconStyle,
  inputStyle,
  previewImgStyle,
} from '@/pages/instructor/classRegister/components/ClassRepresentImage/classRepresentImage.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import IcPlusGray0524 from '@/shared/assets/svg/IcPlusGray0524';
import IcXCircleMain0324 from '@/shared/assets/svg/IcXCircleMain0324';
import Flex from '@/shared/components/Flex/Flex';
import Text from '@/shared/components/Text/Text';

interface ClassRepresentImageProps {
  handleUploaderClick: () => void;
  uploadImgFile: () => void;
  deleteImgFile: (e: React.MouseEvent) => void;
  previewImg: string;
  imgFile: File | undefined;
  imgRef: React.MutableRefObject<HTMLInputElement | null>;
}

const ClassRepresentImage = ({
  imgRef,
  imgFile,
  previewImg,
  handleUploaderClick,
  uploadImgFile,
  deleteImgFile,
}: ClassRepresentImageProps) => {
  return (
    <Flex tag="section" direction="column" gap="2rem" width="100%" marginBottom="4rem">
      <Description title="클래스 대표 이미지" subTitle="대표 이미지는 최대 한 장까지 등록 가능해요" />
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
    </Flex>
  );
};

export default ClassRepresentImage;
