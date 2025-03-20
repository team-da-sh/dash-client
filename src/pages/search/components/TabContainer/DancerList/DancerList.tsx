import { useNavigate } from 'react-router-dom';
import { dancerImageStyle } from '@/pages/search/components/TabContainer/DancerList/dancerList.css';
import { Dancer } from '@/pages/search/types/dancer';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';
import Tag from '@/shared/components/Tag/Tag';
import { genreMapping } from '@/shared/constants/index';
import { vars } from '@/shared/styles/theme.css';

interface DancerListProps {
  dancers: Dancer[];
}

const DancerList = ({ dancers }: DancerListProps) => {
  const navigate = useNavigate();

  const handleDancerClick = (id: number) => {
    navigate(ROUTES_CONFIG.dancer.path(`${id}`));
  };
  return (
    <Flex tag="ul" width="100%" direction="column">
      {dancers.map((dancer) => (
        <Flex
          align="center"
          paddingTop="1.6rem"
          paddingBottom="1.6rem"
          gap="2rem"
          tag="li"
          borderBottom={`1px solid ${vars.colors.gray01}`}
          width="100%"
          key={dancer.id}
          onClick={() => handleDancerClick(dancer.id)}>
          <img src={dancer.profileImage} alt={dancer.nickname} className={dancerImageStyle} />
          <Flex direction="column" gap="0.8rem">
            <Head level="h6" tag="h6">
              {dancer.nickname}
            </Head>
            <Flex gap="0.5rem">
              {dancer.genres.map((genre, index) => (
                <Tag key={index} type="search" size="large">
                  {genreMapping[genre] || genre}
                </Tag>
              ))}
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default DancerList;
