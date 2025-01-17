import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { LESSON_DATA } from '@/mocks/mockLessonData';
import { introTextStyle } from "@/pages/class/TabWrapper/TabIntro/index.css";

const Intro = () => {
  const { lessonDetail } = LESSON_DATA;

  return (
      <Flex paddingTop="0.8rem">
        <Text tag="b3" color="gray8" className={introTextStyle}>
          {lessonDetail}
        </Text>
      </Flex>
  );
};

export default Intro;
