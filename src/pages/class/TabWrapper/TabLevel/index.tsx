import Card from '@/pages/class/Card';
import { questionStyle } from '@/pages/class/TabWrapper/TabLevel/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';
import {
  IcAssetLevelStarter,
  IcAssetLevelBasic,
  IcAssetLevelIntermediate,
  IcAssetLevelAdvanced,
  IcClose,
  IcQuesitonmark,
} from '@/assets/svg';
import { LESSON_DATA } from '@/mocks/mockLessonData';

type LessonLevelType = '입문' | '초급' | '중급' | '고급';

const levelIconMap = {
  입문: <IcAssetLevelStarter width={'3.6rem'} />,
  초급: <IcAssetLevelBasic width={'3.6rem'} />,
  중급: <IcAssetLevelIntermediate width={'3.6rem'} />,
  고급: <IcAssetLevelAdvanced width={'3.6rem'} />,
};

const Level = () => {
  const { lessonLevel, lessonLevelDetail, lessonRecommendation } = LESSON_DATA as {
    lessonLevel: LessonLevelType;
    lessonLevelDetail: string;
    lessonRecommendation: string;
  };

  return (
    <Flex direction="column" gap="3.6rem">
      <Flex width="100%" align="flexEnd" direction="column" gap="0.6rem">
        <Card>
          <Flex gap="0.8rem" align="center">
            {levelIconMap[lessonLevel] || <IcAssetLevelStarter width={'3.6rem'} />}
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
          <button className={questionStyle}>
            <IcQuesitonmark width={'1.4rem'} />
          </button>
        </Flex>
      </Flex>
      <Flex direction="column" gap="1.2rem">
        <Flex justify="flexStart" align="center" gap="0.8rem">
          <IcClose width={'2.4rem'} />
          <Head level="h5" tag="h6">
            이런 분들에게 해당 클래스를 추천해요!
          </Head>
        </Flex>

        <Text tag="b3" color="gray8" style={{ whiteSpace: 'pre-line' }}>
          {lessonRecommendation}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Level;
