import { DEFAULT_USER_DATA } from '@/pages/home/constants';
import { useGetMyPage } from '@/pages/mypage/apis/queries';
import TabWrapper from '@/pages/mypage/components/TabWrapper/TabWrapper';
import * as styles from '@/pages/mypage/myPage.css';
import { getUserRole, setUserRole } from '@/pages/mypage/utils/storage';
import { useGetRole } from '@/shared/apis/queries';

const MyPage = () => {
  const initialRole = getUserRole();

  const { data: fetchedRole, isSuccess } = useGetRole({
    enabled: !initialRole,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  // const roleData = isSuccess && fetchedRole ? fetchedRole : initialRole;

  if (isSuccess && fetchedRole) {
    setUserRole(fetchedRole.role);
  }

  // const isInstructor = roleData === 'TEACHER';

  const { data: userData = DEFAULT_USER_DATA } = useGetMyPage({});
  console.log(userData);

  return (
    <main className={styles.containerStyle}>
      <TabWrapper />
    </main>
  );
};

export default MyPage;
