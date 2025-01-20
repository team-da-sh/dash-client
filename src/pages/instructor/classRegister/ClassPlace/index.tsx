import { ChangeEvent } from 'react';
import { searchContainerStyle } from '@/pages/instructor/classRegister/ClassPlace/index.css';
import Description from '@/pages/instructor/classRegister/Description';
import Flex from '@/components/Flex';
import Input from '@/components/Input';
import Text from '@/components/Text';
import { IcSearchGray } from '@/assets/svg';

interface ClassPlaceProps {
  defaultPlace: string;
  detailPlace: string;
  handleDefaultPlace: () => void;
  handleDetailPlace: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ClassPlace = ({ defaultPlace, detailPlace, handleDefaultPlace, handleDetailPlace }: ClassPlaceProps) => {
  return (
    <Flex tag="section" direction="column" gap="2rem" width="100%" marginBottom="4rem">
      <Description title="클래스 장소" subTitle="클래스가 진행될 장소를 알려주세요" />
      <Flex width="100%" direction="column" gap="0.8rem" onClick={handleDefaultPlace}>
        <Flex width="100%" justify="spaceBetween" align="center" className={searchContainerStyle}>
          <Text tag="b5" color="gray5">
            {defaultPlace ? defaultPlace : '지번, 도로명, 건물명으로 검색해 주세요'}
          </Text>
          {!defaultPlace && <IcSearchGray width={24} />}
        </Flex>
        <Input value={detailPlace} onChange={handleDetailPlace} />
      </Flex>
    </Flex>
  );
};

export default ClassPlace;
