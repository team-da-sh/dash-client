import { lazy, Suspense } from 'react';
import Card from '@/pages/class/components/Card/Card';
import {
  levelStyle,
  questionStyle,
  recommendClassStyle,
} from '@/pages/class/components/TabWrapper/TabLevel/tabLevel.css';
import { LessonDetailResponse } from '@/pages/class/types/api';
import IcQuesitonmark from '@/shared/assets/svg/IcQuesitonmark';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { LEVEL, levelMapping } from '@/shared/constants/index';

const IcSparkleMain20 = lazy(() => import('@/shared/assets/svg/IcSparkleMain20'));
const IcLevelStarter = lazy(() => import('@/shared/assets/svg/IcLevelStarter'));

const TabLevel = ({ lessonData }: { lessonData: LessonDetailResponse }) => {
  const { level, recommendation } = lessonData;

  // 영 -> 한
  const translatedLevel = levelMapping[level] || level;

  const levelData = LEVEL.find((item) => item.title === translatedLevel);

  return (
    <Flex direction="column" gap="3.6rem">
      <Flex width="100%" align="flexEnd" direction="column" gap="0.6rem">
        <Card>
          <Flex gap="0.8rem" align="center">
            {levelData?.icon || (
              <Suspense fallback={<div>Loading...</div>}>
                <IcLevelStarter width={'3.6rem'} />{' '}
              </Suspense>
            )}
            <Head level="h6" tag="h6" className={levelStyle}>
              {translatedLevel}
            </Head>
            <Text tag="b8" color="gray8">
              {levelData?.description}
            </Text>
          </Flex>
        </Card>
        <Flex justify="flexEnd" align="center" gap="0.6rem">
          <Text tag="c3" color="gray7">
            클래스 난이도는 이렇게 설정되어있어요!
          </Text>
          <button className={questionStyle}>
            <IcQuesitonmark width={'1.4rem'} />
          </button>
        </Flex>
      </Flex>
      <Flex direction="column" gap="1.2rem">
        <Flex justify="flexStart" align="center" gap="0.4rem">
          <Suspense fallback={<div>Loading...</div>}>
            <IcSparkleMain20 width={'2.4rem'} />
          </Suspense>
          <Head level="h5" tag="h6">
            이런 분들에게 해당 클래스를 추천해요!
          </Head>
        </Flex>

        <Text tag="b3" color="gray8" className={recommendClassStyle}>
          {recommendation}
        </Text>
      </Flex>
    </Flex>
  );
};

export default TabLevel;
