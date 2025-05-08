import { useNavigate } from 'react-router-dom';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import SvgIcArrowRightGray0614 from '@/shared/assets/svg/IcArrowRightGray0614';
import * as styles from '@/shared/components/InfoComponent/infoComponent.css';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface InfoComponentPropTypes {
  profileImageUrl: string;
  mainText: React.ReactNode;
  subContent: React.ReactNode;
  type: string;
}

const InfoComponent = ({ type, profileImageUrl, mainText, subContent }: InfoComponentPropTypes) => {
  const navigate = useNavigate();
  const handleEditProfileClick = () => {
    if (type === 'student') {
      navigate(ROUTES_CONFIG.editProfile.path);
    } else {
      navigate(ROUTES_CONFIG.instructorRegister.path);
    }
  };

  return (
    <section className={styles.infoContainerStyle}>
      <div className={sprinkles({ display: 'flex', gap: 12, alignItems: 'center' })}>
        <img src={profileImageUrl} alt="프로필 이미지" className={styles.imgStyle} />
        <div className={styles.wrapperStyle}>
          <div className={styles.textWrapperStyle}>{mainText}</div>
          <div>{subContent}</div>
        </div>
      </div>

      <button type="button" onClick={handleEditProfileClick}>
        <SvgIcArrowRightGray0614 className={sprinkles({ width: 24, height: 24 })} />
      </button>
    </section>
  );
};

export default InfoComponent;
