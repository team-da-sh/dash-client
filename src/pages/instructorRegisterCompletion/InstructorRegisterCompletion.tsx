import { useNavigate } from 'react-router-dom';
import * as style from '@/pages/instructorRegisterCompletion/instructorRegisterCompletion.css';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { ClearGif } from '@/shared/assets/gif';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const InstructorRegisterCompletion = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate(ROUTES_CONFIG.home.path);
  };

  return (
    <main>
      <div className={style.containerStyle}>
        <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 8 })}>
          <Head level="h1" tag="h3_sb">
            강사 등록 완료! <br />
            멋진 클래스 기대할게요
          </Head>
          <Text tag="b2_m" color="gray7">
            이제 마이페이지에서 내 클래스를 개설할 수 있어요
          </Text>
        </div>
        <img src={ClearGif} alt="완료 페이지 캐릭터" className={style.clearStyle} />
      </div>

      <div className={style.buttonContainerStyle}>
        <BoxButton onClick={handleComplete}>홈으로 이동</BoxButton>
      </div>
    </main>
  );
};

export default InstructorRegisterCompletion;
