import { useNavigate } from 'react-router-dom';
import { dancerImageStyle } from '@/pages/home/components/DancerItem/dancerItem.css';
import type { DancerTypes } from '@/pages/home/types/dancerTypes';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface DancerItemProps extends Omit<DancerTypes, 'genres'> {
  genre: string;
}

const DancerItem = ({ id, profileImage, genre, nickname }: DancerItemProps) => {
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
        <Head tag="h6">{nickname}</Head>
        <Text tag="b6">{genre}</Text>
      </div>
    </li>
  );
};

export default DancerItem;
