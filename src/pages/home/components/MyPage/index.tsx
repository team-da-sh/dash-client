import * as styles from '@/pages/home/components/MyPage/index.css';
import TopSection from '@/pages/home/components/TopSection';
import Divider from '@/components/Divider';
import { MYPAGE_DATA } from '@/mocks/mockMyPageData';
import BottomSection from '../BottomSection';

interface MyPageProps {
  showMyPage: boolean;
  onClose: () => void;
}

const MyPage = ({ showMyPage, onClose }: MyPageProps) => {
  const userData = MYPAGE_DATA[0];

  // wrapper 영역 외부 클릭시 onClose 호출
  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div onClick={handleClickOutside} className={showMyPage ? styles.visibleStyle : styles.invisibleStyle}>
      <div className={styles.wrapperStyle}>
        <TopSection userData={userData} onClose={onClose} />
        <Divider length="100%" color="gray1" thickness={8} />
        <BottomSection userData={userData} />
      </div>
    </div>
  );
};

export default MyPage;
