import React from "react";
import Text from '@/components/Text'
import Flex from "@/components/Flex";
import { lessonData } from "@/constants/LessonData";

interface LessonData {
  lessonDetail: string;
}

const Intro = () => {
  const { lessonDetail }:LessonData = lessonData;

  return (
    <>
      <Flex padding="0.8rem 0 0">
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
