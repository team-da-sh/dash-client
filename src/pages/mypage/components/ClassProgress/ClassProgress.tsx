import SvgIcArrowRightGray0614 from '@/shared/assets/svg/IcArrowRightGray0614';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import { mockMyLessonData } from '../TabWrapper/mockData';
import * as styles from './ClassProgress.css';

const ClassProgress = () => {
  const data = mockMyLessonData;
  return (
    <div className={styles.containerStyle}>
      <div className={styles.wrapperStyle}>
        <Text tag="b3_r" color="gray8">
          수강 전
        </Text>
        <Head level="h3" tag="h6_sb">
          {data.beforeLessonCount}
        </Head>
      </div>
      <SvgIcArrowRightGray0614 className={sprinkles({ width: 14, height: 14 })} />
      <div className={styles.wrapperStyle}>
        <Text tag="b3_r" color="gray8">
          수강 중
        </Text>
        <Head level="h3" tag="h6_sb">
          {data.duringLessonCount}
        </Head>
      </div>
      <SvgIcArrowRightGray0614 className={sprinkles({ width: 14, height: 14 })} />
      <div className={styles.wrapperStyle}>
        <Text tag="b3_r" color="gray8">
          수강 완료
        </Text>
        <Head level="h3" tag="h6_sb">
          {data.afterLessonCount}
        </Head>
      </div>
    </div>
  );
};

export default ClassProgress;
