import { ChangeEvent } from 'react';
import Description from '@/pages/instructor/classRegister/Description';
import Flex from '@/components/Flex';
import Input from '@/components/Input';

interface ClassPlaceProps {
  defaultPlace: string;
  detailPlace: string;
  handleDefaultPlace: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDetailPlace: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmitDefaultPlace: () => void;
}

const ClassPlace = ({
  defaultPlace,
  detailPlace,
  handleDefaultPlace,
  handleDetailPlace,
  handleSubmitDefaultPlace,
}: ClassPlaceProps) => {
  return (
    <Flex tag="section" direction="column" gap="2rem" width="100%" marginBottom="4rem">
      <Description title="클래스 장소" subTitle="클래스가 진행될 장소를 알려주세요" />
      <Flex width="100%" direction="column" gap="0.8rem">
        <Input value={defaultPlace} onChange={handleDefaultPlace} />
        <button onClick={() => handleSubmitDefaultPlace()}>버튼</button>
        <Input value={detailPlace} onChange={handleDetailPlace} />
      </Flex>
    </Flex>
  );
};

export default ClassPlace;
