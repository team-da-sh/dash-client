import { useGetMyPage } from '@/pages/home/apis/queries';
import BottomSection from '@/pages/home/components/BottomSection/BottomSection';
import * as styles from '@/pages/home/components/MyPage/myPage.css';
import TopSection from '@/pages/home/components/TopSection/TopSection';
import { DEFAULT_USER_DATA } from '@/pages/home/constants';
import { useGetRole } from '@/shared/apis/queries';
import Divider from '@/shared/components/Divider/Divider';

interface MyPagePropTypes {
  showMyPage: boolean;
  onClose: () => void;
}

const MyPage = ({ showMyPage, onClose }: MyPagePropTypes) => {
  const storedRole = localStorage.getItem('userRole');
  let initialRole = storedRole ? JSON.parse(storedRole) : null;

  const { data: fetchedRole, isSuccess } = useGetRole({
    enabled: showMyPage && !initialRole,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const roleData = isSuccess && fetchedRole ? fetchedRole : initialRole;

  if (isSuccess && fetchedRole) {
    localStorage.setItem('userRole', JSON.stringify(fetchedRole));
  }

  const isInstructor = roleData?.role === 'TEACHER';

  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const { data: userData } = useGetMyPage({
    enabled: showMyPage,
    placeholderData: DEFAULT_USER_DATA,
  });

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
