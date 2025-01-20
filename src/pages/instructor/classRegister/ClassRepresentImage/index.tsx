import Flex from '@/components/Flex';
import Description from '../Description';

const ClassRepresentImage = () => {
  return (
    <Flex tag="section" direction="column" gap="2rem" width="100%" marginBottom="4rem">
      <Description title="클래스 대표 이미지" subTitle="대표 이미지는 최대 한 장까지 등록 가능해요" />
    </Flex>
  );
};

export default ClassRepresentImage;
