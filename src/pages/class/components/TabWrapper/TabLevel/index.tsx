import Card from '@/pages/class/components/Card';
import { questionStyle, recommendClassStyle, levelStyle } from '@/pages/class/components/TabWrapper/TabLevel/index.css';
import { LessonDetailApiResponse } from '@/pages/class/types/index';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';
import { levelMapping, LEVEL } from '@/constants/index';
import { IcLevelStarter, IcQuesitonmark, IcSparkleMain20 } from '@/assets/svg';

const TabLevel = ({ lessonData }: { lessonData: LessonDetailApiResponse }) => {
  const { level, recommendation } = lessonData;

  // 영 -> 한
  const translatedLevel = levelMapping[level] || level;

  const levelData = LEVEL.find((item) => item.title === translatedLevel);

  return (
    <Flex direction="column" gap="3.6rem">
      <Flex width="100%" align="flexEnd" direction="column" gap="0.6rem">
        <Card>
          <Flex gap="0.8rem" align="center">
            {levelData?.icon || <IcLevelStarter width={'3.6rem'} />}
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
          <IcSparkleMain20 width={'2.4rem'} />
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
