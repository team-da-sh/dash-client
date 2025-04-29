import { lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from '@/pages/mypage/components/TopSection/topSection.css';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import IcArrowRightGray0614 from '@/shared/assets/svg/IcArrowRightGray0614';
import IcClose from '@/shared/assets/svg/IcClose';
import Divider from '@/shared/components/Divider/Divider';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';
import Tag from '@/shared/components/Tag/Tag';
import Text from '@/shared/components/Text/Text';
import { notify } from '@/shared/components/Toast/Toast';
import type { MyPageResponseTypes } from '@/shared/types/myPageTypes';

const IcCalendarcheckColor3D24 = lazy(() => import('@/shared/assets/svg/IcCalendarcheckColor3D24'));
const IcCalendarcheckMono3D24 = lazy(() => import('@/shared/assets/svg/IcCalendarcheckMono3D24'));

interface TopSectionPropTypes {
  userData: MyPageResponseTypes;
  isInstructor: boolean;
}

const LazyIcon = ({ component: Component, size = 24 }: { component: React.ElementType; size?: number }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component width={size} height={size} />
  </Suspense>
);
const TopSection = ({ userData, isInstructor }: TopSectionPropTypes) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const isMyLessonsZero = () => {
    if (userData.reservationCount > 0) return handleNavigate(ROUTES_CONFIG.mypageReservation.path);
    return;
  };

  const getTextColor = (value: number) => {
    return value > 0 ? 'gray8' : 'gray4';
  };

  const handleMyClassesClick = () => {
    if (isInstructor && userData.lessonCount !== null) {
      handleNavigate(ROUTES_CONFIG.instructorClassList.path);
    }
  };

  return (
    <section className={styles.sectionStyle}>
      <Flex tag="section" direction="column" align="center">
        <Flex align="center" width="100%" justify="spaceBetween">
          <IcClose width={24} height={24} />
          <Flex align="center" gap="0.2rem">
            <Text tag="b3_m" color="gray7" onClick={notify}>
              프로필 수정
            </Text>
            <IcArrowRightGray0614 width={14} height={14} />
          </Flex>
        </Flex>

        <img src={userData.profileImageUrl} alt="프로필 이미지" className={styles.profileImageStyle} />
        <Head level="h1" tag="h3_sb">
          {userData.nickname}
        </Head>

        <Flex marginTop="1.2rem" gap="0.8rem">
          <Tag hasAuth={true} size="mypage">
            <LazyIcon component={IcCalendarcheckColor3D24} />
            클래스 신청 가능
          </Tag>
          <Tag hasAuth={isInstructor} size="mypage">
            <LazyIcon component={isInstructor ? IcCalendarcheckColor3D24 : IcCalendarcheckMono3D24} />
            {isInstructor ? '클래스 개설 가능' : '클래스 개설 불가'}
          </Tag>
        </Flex>
      </Flex>

      <Flex paddingTop="2.4rem" paddingLeft="3.2rem" paddingRight="3.2rem" gap="2.1rem">
        <Flex align="center" onClick={isMyLessonsZero}>
          <Flex direction="column" align="center" gap="0.5rem">
            <Head
              tag="h5_sb"
              color={getTextColor(userData.reservationCount)}
              className={userData.reservationCount === 0 ? styles.disabledStyle : ''}>
              {userData.reservationCount}
            </Head>
            <Text tag="b3_r" color={getTextColor(userData.reservationCount)}>
              신청내역
            </Text>
          </Flex>
        </Flex>

        <Divider direction="vertical" color="gray2" length={32} thickness={1} />

        <Flex direction="column" align="center" gap="0.5rem" className={styles.disabledStyle} onClick={notify}>
          <Head tag="h5_sb" color={getTextColor(userData.favoriteCount)}>
            {userData.favoriteCount}
          </Head>
          <Text tag="b3_r" color={getTextColor(userData.favoriteCount)}>
            관심목록
          </Text>
        </Flex>

        <Divider direction="vertical" color="gray2" length={32} thickness={1} />

        <Flex
          gap="0.5rem"
          direction="column"
          align="center"
          onClick={handleMyClassesClick}
          className={isInstructor ? '' : styles.disabledStyle}>
          <Head tag="h5_sb" color={getTextColor(userData.lessonCount ?? 0)}>
            {userData.lessonCount ?? 0}
          </Head>
          <Text tag="b3_r" color={getTextColor(userData.lessonCount ?? 0)}>
            내 클래스
          </Text>
        </Flex>
      </Flex>
    </section>
  );
};

export default TopSection;
