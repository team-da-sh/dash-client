import { useGetMyLessonCounts } from '@/pages/mypage/apis/queries';
import * as styles from '@/pages/mypage/components/TabWrapper/components/StudentContent/components/ClassProgress/ClassProgress.css';
import SvgIcArrowRightGray0614 from '@/shared/assets/svg/IcArrowRightGray0614';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const ClassProgress = () => {
  const { data, isLoading } = useGetMyLessonCounts();

  if (isLoading || !data) {
    return <></>;
  }

  const isAllZero = data.beforeLessonCount === 0 && data.duringLessonCount === 0 && data.afterLessonCount === 0;

  return (
    <div className={styles.containerStyle}>
      <div className={styles.wrapperStyle}>
        <Text tag="b3_r" color="gray8">
          수강 전
        </Text>
        <Head level="h3" tag="h6_sb" color={isAllZero ? 'gray5' : 'gray10'}>
          {data.beforeLessonCount}
        </Head>
      </div>
      <SvgIcArrowRightGray0614 className={sprinkles({ width: 14, height: 14 })} />
      <div className={styles.wrapperStyle}>
        <Text tag="b3_r" color="gray8">
          수강 중
        </Text>
        <Head level="h3" tag="h6_sb" color={isAllZero ? 'gray5' : 'gray10'}>
          {data.duringLessonCount}
        </Head>
      </div>
      <SvgIcArrowRightGray0614 className={sprinkles({ width: 14, height: 14 })} />
      <div className={styles.wrapperStyle}>
        <Text tag="b3_r" color="gray8">
          수강 완료
        </Text>
        <Head level="h3" tag="h6_sb" color={isAllZero ? 'gray5' : 'gray10'}>
          {data.afterLessonCount}
        </Head>
      </div>
    </div>
  );
};

export default ClassProgress;
