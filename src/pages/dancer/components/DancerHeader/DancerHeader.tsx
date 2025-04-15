import { useNavigate } from 'react-router-dom';
import * as styles from '@/pages/dancer/components/DancerHeader/dancerHeader.css';
import IcBack from '@/shared/assets/svg/IcBack';
import IcBackWhite24 from '@/shared/assets/svg/IcBackWhite24';

interface DancerHeaderPropTypes {
  isWhite: boolean;
}

const DancerHeader = ({ isWhite }: DancerHeaderPropTypes) => {
  const navigate = useNavigate();

  return (
    <div className={styles.containerStyle({ isWhite })}>
      <div onClick={() => navigate(-1)} >
        {isWhite ? <IcBack width={24} /> : <IcBackWhite24 width={24} />}
      </div>
    </div>
  );
};

export default DancerHeader;
