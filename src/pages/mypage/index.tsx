import TopSection from '@/pages/mypage/TopSection';
import * as styles from '@/pages/mypage/index.css';
import Divider from '@/components/Divider';
import { MYPAGE_DATA } from '@/mocks/mockMyPageData';
import BottomSection from './BottomSection';

const MyPage = () => {
  const userData = MYPAGE_DATA[0];

  // 강사 권한을 가질 때는 null 이 아닌 number가 옴
  const isInstuctor = userData.lessonCount !== null;

  return (
    <div className={styles.layoutStyle}>
      <main className={styles.containerStyle}>
        <TopSection isInstructor={isInstuctor} />
        <Divider length="100%" color="gray1" thickness={8} />
        <BottomSection isInstructor={isInstuctor} />
      </main>
    </div>
  );
};

export default MyPage;
