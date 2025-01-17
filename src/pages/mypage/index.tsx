import TopSection from '@/pages/mypage/TopSection';
import * as styles from '@/pages/mypage/index.css';
import Divider from '@/components/Divider';
import { MYPAGE_DATA } from '@/mocks/mockMyPageData';
import BottomSection from './BottomSection';

const MyPage = () => {
  const userData = MYPAGE_DATA[0];

  return (
    <div className={styles.layoutStyle}>
      <main className={styles.containerStyle}>
        <TopSection userData={userData} />
        <Divider length="100%" color="gray1" thickness={8} />
        <BottomSection userData={userData} />
      </main>
    </div>
  );
};

export default MyPage;
