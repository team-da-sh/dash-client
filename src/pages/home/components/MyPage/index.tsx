import * as styles from '@/pages/home/components/MyPage/index.css';
import TopSection from '@/pages/home/components/TopSection';
import Divider from '@/components/Divider';
import { MYPAGE_DATA } from '@/mocks/mockMyPageData';
import BottomSection from '../BottomSection';

const MyPage = ({ onClose }: { onClose: () => void }) => {
  const userData = MYPAGE_DATA[0];

  return (
    <div className={styles.layoutStyle}>
      <main className={styles.containerStyle}>
        <TopSection userData={userData} onClose={onClose} />
        <Divider length="100%" color="gray1" thickness={8} />
        <BottomSection userData={userData} />
      </main>
    </div>
  );
};

export default MyPage;
