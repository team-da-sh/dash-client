import { addInputBoxStyle } from '@/pages/instructor/classRegister/ClassSchedule/index.css';
import Description from '@/pages/instructor/classRegister/Description';
import Flex from '@/components/Flex';
import { IcPlusGray0524 } from '@/assets/svg';

const ClassSchedule = ({ openBottomSheet }: { openBottomSheet: () => void }) => {
  return (
    <Flex tag="section" direction="column" gap="2rem" width="100%" marginBottom="5rem">
      <Description title="클래스 일정" subTitle="클래스가 진행될 회차별 날짜와 시간을 등록해 주세요" />
      <Flex justify="center" align="center" className={addInputBoxStyle} onClick={openBottomSheet}>
        <IcPlusGray0524 width={'2.4rem'} />
      </Flex>
    </Flex>
  );
};

export default ClassSchedule;
