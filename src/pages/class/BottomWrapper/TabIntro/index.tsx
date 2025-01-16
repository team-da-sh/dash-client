import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { LESSON_DATA } from '@/constants/mockLessonData';

const Intro = () => {
  const { lessonDetail } = LESSON_DATA;

  return (
    <>
      <Flex paddingTop="0.8rem">
        <Text tag="b3" color="gray8" style={{ whiteSpace: 'pre-line' }}>
          {lessonDetail}
        </Text>
      </Flex>
    </>
  );
};

export default Intro;
