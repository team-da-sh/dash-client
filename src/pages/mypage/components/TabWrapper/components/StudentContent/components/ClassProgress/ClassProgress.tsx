import { useGetMyLessonCounts } from '@/pages/mypage/apis/queries';
import {
  containerStyle,
  progressStyle,
  wrapperStyle,
  arrowIconStyle,
} from '@/pages/mypage/components/TabWrapper/components/StudentContent/components/ClassProgress/ClassProgress.css';
import SvgIcArrowRightGray0614 from '@/shared/assets/svg/IcArrowRightGray0614';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';

const ClassProgress = () => {
  const { data, isLoading } = useGetMyLessonCounts();

  if (isLoading || !data) {
    return <></>;
  }

  const isAllZero = data.beforeLessonCount === 0 && data.duringLessonCount === 0 && data.afterLessonCount === 0;

  return (
    <div className={containerStyle}>
      <div className={progressStyle}>
        <div className={wrapperStyle}>
          <Text tag="b3_r" color="gray8">
            수강 전
          </Text>
          <Head level="h3" tag="h6_sb" color={isAllZero ? 'gray5' : 'gray10'}>
            {data.beforeLessonCount}
          </Head>
        </div>
        <SvgIcArrowRightGray0614 className={arrowIconStyle} />
        <div className={wrapperStyle}>
          <Text tag="b3_r" color="gray8">
            수강 중
          </Text>
          <Head level="h3" tag="h6_sb" color={isAllZero ? 'gray5' : 'gray10'}>
            {data.duringLessonCount}
          </Head>
        </div>
        <SvgIcArrowRightGray0614 className={arrowIconStyle} />
        <div className={wrapperStyle}>
          <Text tag="b3_r" color="gray8">
            수강 완료
          </Text>
          <Head level="h3" tag="h6_sb" color={isAllZero ? 'gray5' : 'gray10'}>
            {data.afterLessonCount}
          </Head>
        </div>
      </div>
    </div>
  );
};

export default ClassProgress;
