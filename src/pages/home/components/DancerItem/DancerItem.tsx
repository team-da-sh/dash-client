import { useNavigate } from 'react-router-dom';
import { dancerImageStyle, dancerItemStyle, dancerInfoStyle } from '@/pages/home/components/DancerItem/dancerItem.css';
import type { DancerTypes } from '@/pages/home/types/dancerTypes';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';

interface DancerItemPropTypes extends Omit<DancerTypes, 'genres'> {
  genre: string;
}

const DancerItem = ({ id, profileImage, genre, nickname }: DancerItemPropTypes) => {
  const navigate = useNavigate();

  const handleDancerClick = () => {
    navigate(ROUTES_CONFIG.dancer.path(id.toString()));
  };

  return (
    <li className={dancerItemStyle} onClick={handleDancerClick}>
      <img src={profileImage} alt="댄서 프로필" className={dancerImageStyle} />
      <div className={dancerInfoStyle}>
        <Head tag="b1_sb">{nickname}</Head>
        <Text tag="b3_r">{genre}</Text>
      </div>
    </li>
  );
};

export default DancerItem;
