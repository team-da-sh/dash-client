import { useNavigate } from 'react-router-dom';
import * as styles from '@/pages/mypage/TopSection/index.css';
import Divider from '@/components/Divider';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Tag from '@/components/Tag';
import Text from '@/components/Text';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { IcClose, IcArrowRightGray0614, IcCalendarcheckColor3D24, IcCalendarcheckMono3D24 } from '@/assets/svg';
import { MyPageProps } from '@/types/myPageTypes';

const TopSection = ({ userData }: { userData: MyPageProps }) => {
  const navigate = useNavigate();

  // 신청 내역, 내 클래스 클릭 시 이동
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  // 강사 권한을 가질 때는 null 이 아닌 number가 옴
  const isInstructor = userData.lessonCount !== null;

  // 신청 내역, 관심목록, 내 클래스 값이 0 이상일 때 gray8 색상 적용
  const getTextColor = (value: number) => {
    return value > 0 ? 'gray8' : 'gray4';
  };

  // 강사 권한에 따른 접근 처리
  const renderTagContent = (isInstructor: boolean) => {
    if (isInstructor) {
      return (
        <>
          <IcCalendarcheckColor3D24 width={24} height={24} />
          클래스 개설 가능
        </>
      );
    } else {
      return (
        <>
          <IcCalendarcheckMono3D24 width={24} height={24} />
          클래스 개설 불가
        </>
      );
    }
  };

  return (
    <section className={styles.sectionStyle}>
      <Flex direction="column" align="center">
        <Flex align="center" width="100%" justify="spaceBetween">
          <IcClose width={24} height={24} />
          <Flex align="center" gap="0.2rem">
            <Text tag="b7" color="gray7">
              프로필 수정
            </Text>
            <IcArrowRightGray0614 width={14} height={14} />
          </Flex>
        </Flex>
        <img src={userData.profileImageUrl} alt="프로필 이미지" className={styles.imageStyle} />
        <Head level="h1" tag="h2">
          BADALEE
        </Head>
        <Flex marginTop="1.2rem" gap="0.8rem">
          <Tag hasAuth={true} size="mypage">
            <IcCalendarcheckColor3D24 width={24} height={24} />
            클래스 개설 가능
          </Tag>
          <Tag hasAuth={isInstructor} size="mypage">
            {renderTagContent(isInstructor)}
          </Tag>
        </Flex>
      </Flex>
      <Flex paddingTop="2.4rem" paddingLeft="3.2rem" paddingRight="3.2rem" gap="2.1rem">
        <Flex align="center" onClick={() => handleNavigate(ROUTES_CONFIG.mypageReservation.path)}>
          <Flex direction="column" align="center" gap="0.5rem">
            <Head tag="h4" color={getTextColor(userData.reservationCount)}>
              {userData.reservationCount}
            </Head>
            <Text tag="b6" color={getTextColor(userData.reservationCount)}>
              신청내역
            </Text>
          </Flex>
        </Flex>
        <Divider direction="vertical" color="gray2" length={32} thickness={1} />
        <Flex direction="column" align="center">
          <Head tag="h4" color={getTextColor(userData.reservationCount)}>
            {userData.reservationCount}
          </Head>
          <Text tag="b6" color={getTextColor(userData.reservationCount)}>
            관심목록
          </Text>
        </Flex>
        <Divider direction="vertical" color="gray2" length={32} thickness={1} />
        <Flex direction="column" align="center" onClick={() => handleNavigate(ROUTES_CONFIG.instructorClassList.path)}>
          <Head tag="h4" color={getTextColor(userData.reservationCount)}>
            {userData.lessonCount ?? 0}
          </Head>
          <Text tag="b6" color={getTextColor(userData.reservationCount)}>
            내 클래스
          </Text>
        </Flex>
      </Flex>
    </section>
  );
};

export default TopSection;
