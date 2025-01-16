import { dancerImageStyle } from '@/pages/home/components/DancerItem/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';

interface DanceItemProps {
  teacherImageUrl: string;
  teacherGenre: string;
  teacherNickName: string;
}

const DancerItem = ({ teacherImageUrl, teacherGenre, teacherNickName }: DanceItemProps) => {
  return (
    <Flex tag="li" direction="column" gap="1.2rem" align="center">
      <img src={teacherImageUrl} alt="댄서 프로필" width={78} height={78} className={dancerImageStyle} />
      <Flex direction="column" gap="0.4rem" align="center">
        <Head tag="h6">{teacherNickName}</Head>
        <Text tag="b6">{teacherGenre}</Text>
      </Flex>
    </Flex>
  );
};

export default DancerItem;
