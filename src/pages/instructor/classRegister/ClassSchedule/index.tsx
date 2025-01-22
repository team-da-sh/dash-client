import {
  addInputBoxStyle,
  scheduleItemContainerStyle,
  tagStyle,
} from '@/pages/instructor/classRegister/ClassSchedule/index.css';
import Description from '@/pages/instructor/classRegister/Description';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { IcPlusGray0524, IcXCircleGray0424 } from '@/assets/svg';

const ClassSchedule = ({ openBottomSheet }: { openBottomSheet: () => void }) => {
  return (
    <Flex tag="section" direction="column" gap="2rem" width="100%" marginBottom="5rem">
      <Description title="클래스 일정" subTitle="클래스가 진행될 회차별 날짜와 시간을 등록해 주세요" />
      <Flex direction="column" gap="0.8rem" width="100%">
        <Flex justify="spaceBetween" align="center" width="100%" className={scheduleItemContainerStyle}>
          <Flex gap="1.6rem" align="center">
            <div className={tagStyle}>1회차</div>
            <Flex direction="column" gap="0.4rem">
              <Text tag="b4">2025년 1월 9일 목요일</Text>
              <Text tag="b7" color="gray7">
                22:00 - 익일 02:00 (총 4시간)
              </Text>
            </Flex>
          </Flex>
          {/* 임시 아이콘 */}
          <IcXCircleGray0424 width={'2.4rem'} />
        </Flex>

        <Flex justify="center" align="center" className={addInputBoxStyle} onClick={openBottomSheet}>
          <IcPlusGray0524 width={'2.4rem'} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ClassSchedule;
