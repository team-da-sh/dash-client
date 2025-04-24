import { useNavigate } from 'react-router-dom';
import * as styles from '@/pages/search/components/TabContainer/DancerList/dancerList.css';
import type { DancerTypes } from '@/pages/search/types/dancer';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import Head from '@/shared/components/Head/Head';
import Tag from '@/shared/components/Tag/Tag';
import { genreMapping } from '@/shared/constants/index';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import { vars } from '@/shared/styles/theme.css';

interface DancerListPropTypes {
  dancers: DancerTypes[];
}

const DancerList = ({ dancers }: DancerListPropTypes) => {
  const navigate = useNavigate();

  const handleDancerClick = (id: number) => {
    navigate(ROUTES_CONFIG.dancer.path(`${id}`));
  };
  return (
    <ul className={sprinkles({ display: 'flex', width: '100%', flexDirection: 'column' })}>
      {dancers.map((dancer) => (
        <li
          className={sprinkles({
            display: 'flex',
            alignItems: 'center',
            paddingTop: 16,
            paddingBottom: 16,
            gap: 20,
            width: '100%',
          })}
          style={{ borderBottom: `1px solid ${vars.colors.gray01}` }}
          key={dancer.id}
          onClick={() => handleDancerClick(dancer.id)}>
          <img src={dancer.profileImage} alt={dancer.nickname} className={styles.dancerImageStyle} />
          <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 8 })}>
            <Head level="h6" tag="b1_sb">
              {dancer.nickname}
            </Head>
            <div className={sprinkles({ display: 'flex', gap: 5 })}>
              {dancer.genres.map((genre, index) => (
                <Tag key={index} type="search" size="large">
                  {genreMapping[genre] || genre}
                </Tag>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DancerList;
