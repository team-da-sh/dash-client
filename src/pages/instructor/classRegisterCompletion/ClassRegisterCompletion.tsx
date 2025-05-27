import { useNavigate } from 'react-router-dom';
import * as styles from '@/pages/instructor/classRegisterCompletion/classRegisterCompletion.css';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { ClearGif } from '@/shared/assets/gif';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const ClassRegisterCompletion = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate(ROUTES_CONFIG.home.path);
  };

  return (
    <main>
      <div className={sprinkles({ pr: 20, pl: 20 })}>
        <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 8, width: '100%', mt: 44 })}>
          <div className={sprinkles({ display: 'flex', flexDirection: 'column' })}>
            <Head level="h1" tag="h3_sb">
              축하드립니다 <br />
              클래스 개설이 완료되었어요
            </Head>
          </div>
          <Text tag="b2_m" color="gray7">
            방금 등록한 클래스는 마이페이지에서 관리할 수 있어요
          </Text>
          <img src={ClearGif} alt="완료 페이지 캐릭터" className={styles.clearGifStyle} />
        </div>
      </div>
      <div className={styles.buttonContainerStyle}>
        <BoxButton onClick={handleComplete}>완료</BoxButton>
      </div>
    </main>
  );
};

export default ClassRegisterCompletion;
