import { useGetMyPage } from '@/pages/home/apis/queries';
import { DEFAULT_USER_DATA } from '@/pages/home/constants';
import BottomSection from '@/pages/mypage/components/BottomSection/BottomSection';
import TopSection from '@/pages/mypage/components/TopSection/TopSection';
import * as styles from '@/pages/mypage/myPage.css';
import { getUserRole, setUserRole } from '@/pages/mypage/utils/storage';
import { useGetRole } from '@/shared/apis/queries';
import Divider from '@/shared/components/Divider/Divider';

const MyPage = () => {
  const initialRole = getUserRole();

  const { data: fetchedRole, isSuccess } = useGetRole({
    enabled: !initialRole,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const roleData = isSuccess && fetchedRole ? fetchedRole : initialRole;

  if (isSuccess && fetchedRole) {
    setUserRole(fetchedRole.role);
  }

  const isInstructor = roleData === 'TEACHER';

  const { data: userData = DEFAULT_USER_DATA } = useGetMyPage({});

  return (
    <div>
      <div className={styles.wrapperStyle}>
        <TopSection userData={userData} isInstructor={isInstructor} />
        <Divider length="100%" color="gray1" thickness={8} />
        <BottomSection isInstructor={isInstructor} />
      </div>
    </div>
  );
};

export default MyPage;
