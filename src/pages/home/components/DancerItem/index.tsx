import { useNavigate } from 'react-router-dom';
import { dancerImageStyle } from '@/pages/home/components/DancerItem/index.css';
import { DancerTypes } from '@/pages/home/types/dancerTypes';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';
import { ROUTES_CONFIG } from '@/routes/routesConfig';

interface DancerItemProps extends Omit<DancerTypes, 'genres'> {
  genre: string;
}
const DancerItem = ({ id, profileImage, genre, nickname }: DancerItemProps) => {
  const navigate = useNavigate();

  const handleDancerClick = () => {
    navigate(ROUTES_CONFIG.dancer.path(id.toString()));
  };

  return (
    <Flex tag="li" direction="column" gap="1.2rem" align="center" onClick={handleDancerClick}>
      <img src={profileImage} alt="댄서 프로필" className={dancerImageStyle} />
      <Flex direction="column" gap="0.4rem" align="center">
        <Head tag="h6">{nickname}</Head>
        <Text tag="b6">{genre}</Text>
      </Flex>
    </Flex>
  );
};

export default DancerItem;
