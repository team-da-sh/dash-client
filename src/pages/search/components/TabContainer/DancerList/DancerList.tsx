import { useNavigate } from 'react-router-dom';
import {
  dancerImageStyle,
  listStyle,
  listItemStyle,
  dancerInfoStyle,
  tagWrapperStyle,
} from '@/pages/search/components/TabContainer/DancerList/dancerList.css';
import type { DancerTypes } from '@/pages/search/types/dancer';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import Head from '@/common/components/Head/Head';
import Tag from '@/common/components/Tag/Tag';
import { genreMapping } from '@/shared/constants/index';
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
    <ul className={listStyle}>
      {dancers.map((dancer) => (
        <li
          className={listItemStyle}
          style={{ borderBottom: `1px solid ${vars.colors.gray01}` }}
          key={dancer.id}
          onClick={() => handleDancerClick(dancer.id)}>
          <img src={dancer.profileImage} alt={dancer.nickname} className={dancerImageStyle} />
          <div className={dancerInfoStyle}>
            <Head level="h6" tag="b1_sb">
              {dancer.nickname}
            </Head>
            <div className={tagWrapperStyle}>
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
