import { introTextStyle } from '@/pages/class/components/TabWrapper/TabIntro/tabIntro.css';
import { LessonDetailResponse } from '@/pages/class/types/api';
import Flex from '@/shared/components/Flex/Flex';
import Text from '@/shared/components/Text/Text';

const TabIntro = ({ lessonData }: { lessonData: LessonDetailResponse }) => {
  const { detail } = lessonData;

  return (
    <Flex paddingTop="0.8rem">
      <Text tag="b3" color="gray8" className={introTextStyle}>
        {detail}
      </Text>
    </Flex>
  );
};

export default TabIntro;
