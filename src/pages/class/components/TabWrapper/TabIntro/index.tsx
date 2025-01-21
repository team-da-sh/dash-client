import { introTextStyle } from '@/pages/class/components/TabWrapper/TabIntro/index.css';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
//import { LESSON_DATA } from '@/pages/class/mocks/mockLessonData';
import { LessonDetail } from "@/apis/class/axios";

const TabIntro = ({ lessonData }: { lessonData: LessonDetail }) => {
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
