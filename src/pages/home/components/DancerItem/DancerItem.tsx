import { useNavigate } from 'react-router-dom';
import { dancerImageStyle } from '@/pages/home/components/DancerItem/dancerItem.css';
import type { DancerTypes } from '@/pages/home/types/dancerTypes';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface DancerItemPropTypes extends Omit<DancerTypes, 'genres'> {
  genre: string;
}

const DancerItem = ({ id, profileImage, genre, nickname }: DancerItemPropTypes) => {
  const navigate = useNavigate();

  const handleDancerClick = () => {
    navigate(ROUTES_CONFIG.dancer.path(id.toString()));
  };

  return (
    <li
      className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' })}
      onClick={handleDancerClick}>
      <img src={profileImage} alt="댄서 프로필" className={dancerImageStyle} />
      <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' })}>
        <Head tag="b1_sb">{nickname}</Head>
        <Text tag="b3_r">{genre}</Text>
      </div>
    </li>
  );
};

export default DancerItem;
