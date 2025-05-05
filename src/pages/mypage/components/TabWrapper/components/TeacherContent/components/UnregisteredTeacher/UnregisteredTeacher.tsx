import { useNavigate } from 'react-router-dom';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import IcProfile from '@/shared/assets/svg/IcProfile';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import * as styles from './unregisteredTeacher.css';

interface UnregisteredTeacherPropTypes {
  nickname: string;
}
const UnregisteredTeacher = ({ nickname }: UnregisteredTeacherPropTypes) => {
  const navigate = useNavigate();
  const handleRegisterButtonClick = () => {
    navigate(ROUTES_CONFIG.instructorRegister.path);
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
            {nickname} 님의 강사 프로필을 등록하고
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
