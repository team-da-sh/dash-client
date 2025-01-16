import TopSection from '@/pages/mypage/TopSection';
import * as styles from '@/pages/mypage/index.css';
import Divider from '@/components/Divider';
import BottomSection from './BottomSection';

const MyPage = () => {
  return (
    <div className={styles.layoutStyle}>
      <main className={styles.containerStyle}>
        <TopSection />
        <Divider length="100%" color="gray1" thickness={8} />
        <BottomSection />
      </main>
    </div>
  );
};

export default MyPage;
