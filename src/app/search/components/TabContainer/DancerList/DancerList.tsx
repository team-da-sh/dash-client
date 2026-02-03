'use client';

import { useRouter } from 'next/navigation';
import {
  dancerImageStyle,
  listStyle,
  listItemStyle,
  dancerInfoStyle,
  tagWrapperStyle,
} from '@/app/search/components/TabContainer/DancerList/dancerList.css';
import type { DancerTypes } from '@/app/search/types/dancer';
import Head from '@/common/components/Head/Head';
import Tag from '@/common/components/Tag/Tag';
import { genreMapping } from '@/shared/constants/index';
import { vars } from '@/shared/styles/theme.css';

interface DancerListPropTypes {
  dancers: DancerTypes[];
}

const DancerList = ({ dancers }: DancerListPropTypes) => {
  const router = useRouter();

  const handleDancerClick = (id: number) => {
    router.push(`/dancer/${id}`);
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
