import { dancerImageStyle } from '@/pages/home/components/DancerItem/index.css';
import { DancerTypes } from '@/pages/home/types/dancerTypes';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';

interface DancerItemProps extends Omit<DancerTypes, 'genres' | 'id'> {
  genre: string;
}
const DancerItem = ({ profileImage, genre, nickname }: DancerItemProps) => {
  return (
    <Flex tag="li" direction="column" gap="1.2rem" align="center">
      <img src={profileImage} alt="댄서 프로필" className={dancerImageStyle} />
      <Flex direction="column" gap="0.4rem" align="center">
        <Head tag="h6">{nickname}</Head>
        <Text tag="b6">{genre}</Text>
      </Flex>
    </Flex>
  );
};

export default DancerItem;
