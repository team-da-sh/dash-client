import { lazy, Suspense } from 'react';
import Card from '@/pages/class/components/Card/Card';
import * as styles from '@/pages/class/components/TabWrapper/TabLevel/tabLevel.css';
import type { LessonDetailResponseTypes } from '@/pages/class/types/api';
import IcQuesitonmark from '@/shared/assets/svg/IcQuesitonmark';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { notify } from '@/shared/components/Toast/Toast';
import { LEVEL, levelMapping } from '@/shared/constants/index';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const IcSparkleMain20 = lazy(() => import('@/shared/assets/svg/IcSparkleMain20'));
const IcLevelStarter = lazy(() => import('@/shared/assets/svg/IcLevelStarter'));

const TabLevel = ({ lessonData }: { lessonData: LessonDetailResponseTypes }) => {
  const { level, recommendation } = lessonData;

  const levelData = LEVEL.find((item) => item.title === levelMapping[level]);

  return (
    <section className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 36 })}>
      <div
        className={sprinkles({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          width: '100%',
          gap: 8,
        })}>
        <Card className={styles.cardStyle}>
          <div className={sprinkles({ display: 'flex', alignItems: 'center', gap: 8 })}>
            {levelData?.icon || <IcLevelStarter width={'3.6rem'} />}
            <Head level="h6" tag="b1_sb" className={styles.levelStyle}>
              {levelMapping[level]}
            </Head>
            <Text tag="b3_m_narrow" color="gray8">
              {levelData?.description}
            </Text>
          </div>
        </Card>
        <div
          className={sprinkles({
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 6,
          })}>
          <Text tag="c1_m" color="gray7">
            클래스 난이도는 이렇게 설정되어있어요!
          </Text>
          <IcQuesitonmark width={'1.4rem'} onClick={() => notify({ message: '해당 기능은 추후 구현 예정이에요' })} />
        </div>
      </div>
      <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 17 })}>
        <div className={sprinkles({ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 4 })}>
          <Suspense fallback={<div style={{ width: '2.4rem', height: '22.85px' }} />}>
            <IcSparkleMain20 width={'2.4rem'} />
          </Suspense>
          <Head level="h5" tag="b1_sb">
            이런 분들에게 해당 클래스를 추천해요!
          </Head>
        </div>

        <Text tag="b2_m_long" color="gray8" className={styles.recommendClassStyle}>
          {recommendation}
        </Text>
      </div>
    </section>
  );
};

export default TabLevel;
