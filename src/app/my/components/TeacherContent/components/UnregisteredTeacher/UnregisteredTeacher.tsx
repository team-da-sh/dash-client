import { useRouter } from 'next/navigation';
import Head from '@/common/components/Head/Head';
import Text from '@/common/components/Text/Text';
import IcProfile from '@/shared/assets/svg/IcProfile';
import * as styles from './unregisteredTeacher.css';

interface UnregisteredTeacherPropTypes {
  name: string;
}
const UnregisteredTeacher = ({ name }: UnregisteredTeacherPropTypes) => {
  const router = useRouter();
  const handleRegisterButtonClick = () => {
    router.push('/my/manage-profile');
  };

  return (
    <section className={styles.layoutStyle}>
      <IcProfile width={120} height={120} />
      <div className={styles.textConatinerStyle}>
        <Head level="h3" tag="h6_sb">
          강사 프로필을 등록해 보세요!
        </Head>
        <div className={styles.textStyle}>
          <Text tag="b2_m_long" color="gray6">
            {name} 님의 강사 프로필을 등록하고
          </Text>
          <Text tag="b2_m_long" color="gray6">
            수강생들을 만나보세요!
          </Text>
        </div>
      </div>
      <button type="button" className={styles.buttonStyle} onClick={handleRegisterButtonClick}>
        <Text tag="b1_sb_long" color="white">
          강사 프로필 만들기
        </Text>
      </button>
    </section>
  );
};

export default UnregisteredTeacher;
