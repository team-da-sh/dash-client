import { introTextStyle } from '@/pages/class/components/TabWrapper/TabIntro/index.css';
import { LessonDetailApiResponse } from '@/pages/class/types/index';
import Flex from '@/shared/components/Flex';
import Text from '@/shared/components/Text';

const TabIntro = ({ lessonData }: { lessonData: LessonDetailApiResponse }) => {
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
