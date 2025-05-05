import TabWrapper from '@/pages/mypage/components/TabWrapper/TabWrapper';
import * as styles from '@/pages/mypage/myPage.css';
import { getUserRole, setUserRole } from '@/pages/mypage/utils/storage';
import { useGetRole } from '@/shared/apis/queries';

const MyPage = () => {
  const { data: fetchedRole, isSuccess } = useGetRole();

  // const roleData = isSuccess && fetchedRole ? fetchedRole : initialRole;

  if (isSuccess && fetchedRole) {
    setUserRole(fetchedRole.role);
  }

  // const isInstructor = roleData === 'TEACHER';

  return (
    <main className={styles.containerStyle}>
      <TabWrapper />
    </main>
  );
};

export default MyPage;
