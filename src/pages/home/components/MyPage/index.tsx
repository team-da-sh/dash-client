import * as styles from '@/pages/home/components/MyPage/index.css';
import TopSection from '@/pages/home/components/TopSection';
import Divider from '@/components/Divider';
import { useGetRole } from '@/apis/common/queries';
import { useGetMyPage } from '@/apis/home/queries';
import BottomSection from '../BottomSection';

interface MyPageProps {
  showMyPage: boolean;
  onClose: () => void;
}

const MyPage = ({ showMyPage, onClose }: MyPageProps) => {
  const { data: userData, isError } = useGetMyPage();
  const { data: role } = useGetRole();

  console.log('이게 role', role);

  if (isError || !userData) {
    return <div>에러 발생</div>;
  }

  const isInstructor = role === 'TEACHER';

  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (showMyPage) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return (
    <div onClick={handleClickOutside} className={showMyPage ? styles.visibleStyle : styles.invisibleStyle}>
      <div className={styles.wrapperStyle}>
        <TopSection userData={userData} onClose={onClose} isInstructor={isInstructor} />
        <Divider length="100%" color="gray1" thickness={8} />
        <BottomSection isInstructor={isInstructor} />
      </div>
    </div>
  );
};

export default MyPage;
