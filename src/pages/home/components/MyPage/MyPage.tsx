import { useGetMyPage } from '@/pages/home/apis/queries';
import BottomSection from '@/pages/home/components/BottomSection/BottomSection';
import * as styles from '@/pages/home/components/MyPage/myPage.css';
import TopSection from '@/pages/home/components/TopSection/TopSection';
import { DEFAULT_USER_DATA } from '@/pages/home/constants';
import { getUserRole, setUserRole } from '@/pages/mypage/utils/storage';
import { useGetRole } from '@/shared/apis/queries';
import Divider from '@/shared/components/Divider/Divider';

interface MyPagePropTypes {
  showMyPage: boolean;
  onClose: () => void;
}

const MyPage = ({ showMyPage, onClose }: MyPagePropTypes) => {
  let initialRole = getUserRole();

  const { data: fetchedRole, isSuccess } = useGetRole({
    enabled: showMyPage && !initialRole,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const roleData = isSuccess && fetchedRole ? fetchedRole : initialRole;

  if (isSuccess && fetchedRole) {
    setUserRole(fetchedRole.role);
  }

  const isInstructor = roleData?.role === 'TEACHER';

  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const { data: userData = DEFAULT_USER_DATA } = useGetMyPage({
    enabled: showMyPage,
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
