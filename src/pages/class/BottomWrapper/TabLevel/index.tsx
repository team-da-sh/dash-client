import React from 'react';
import Card from '@/pages/class/Card';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';
import { lessonData } from '@/constants/LessonData';
import { IcClose, IcQuesitonmark } from '@/assets/svg';

interface LessonDataProps {
  lessonLevel: string;
  lessonLevelDetail: string;
  lessonRecommendation: string;
}

const Level = () => {
  const { lessonLevel, lessonLevelDetail, lessonRecommendation }: LessonDataProps = lessonData;

  return (
    <Flex direction="column" gap="3.6rem">
      <Flex width="100%" align="flexEnd" direction="column" gap="0.6rem">
        <Card>
          <Flex gap="0.8rem" align="center">
            <IcClose width={36} />
            <Head level="h6" tag="h6">
              {lessonLevel}
            </Head>
            <Text tag="b8" color="gray8">
              {lessonLevelDetail}
            </Text>
          </Flex>
        </Card>
        <Flex justify="flexEnd" align="center" gap="0.6rem">
          <Text tag="c3" color="gray7">
            클래스 난이도는 이렇게 설정되어있어요!
          </Text>
          <button>
            <IcQuesitonmark width={14} />
          </button>
        </Flex>
      </Flex>
      <Flex direction="column" gap="1.2rem">
        <Flex justify="flexStart" align="center" gap="0.8rem">
          <IcClose width={24} />
          <Head level="h5" tag="h6">
            이런 분들에게 해당 클래스를 추천해요!
          </Head>
        </Flex>

        {/* 줄바꿈 처리된 텍스트 */}
        <Text tag="b3" color="gray8">
          {lessonRecommendation.split('\n').map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Level;
