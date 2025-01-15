import '@/pages/search/components/DancerList/index.css';
import { dancerImageStyle } from '@/pages/search/components/DancerList/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Tag from '@/components/Tag';
import { vars } from '@/styles/theme.css';

interface Dancer {
  id: number;
  profileImage: string;
  nickname: string;
  genres: string[];
}

interface DancerListProps {
  dancers: Dancer[];
}

const DancerList = ({ dancers }: DancerListProps) => {
  return (
    <>
      {dancers.map((dancer) => (
        <Flex
          align="center"
          padding="1.6rem 2rem"
          gap="2rem"
          borderBottom={`1px solid ${vars.colors.gray01}`}
          key={dancer.id}>
          <img src={dancer.profileImage} alt={dancer.nickname} className={dancerImageStyle} />
          <Flex direction="column">
            <Head>{dancer.nickname}</Head>
            <Flex gap="0.5rem">
              {dancer.genres.map((genre, index) => (
                <Tag key={index} type="search" size="large">
                  {genre}
                </Tag>
              ))}
            </Flex>
          </Flex>
        </Flex>
      ))}
    </>
  );
};

export default DancerList;
