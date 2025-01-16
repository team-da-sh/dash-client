import React from 'react';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { LESSON_DATA } from '@/constants/mockLessonData';

interface LessonDataProps {
  lessonDetail: string;
}

const Intro = () => {
  const { lessonDetail }: LessonDataProps = LESSON_DATA;

  return (
    <>
      <Flex paddingTop="0.8rem">
        <Text tag="b3" color="gray8">
          {lessonDetail.split('\n').map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </Text>
      </Flex>
    </>
  );
};

export default Intro;
