'use client';

import Link from 'next/link';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { dancerImageStyle, dancerItemStyle, dancerInfoStyle } from '@/app/(home)/components/DancerItem/dancerItem.css';
import type { DancerTypes } from '@/app/(home)/types/dancerTypes';
import Head from '@/common/components/Head/Head';
import Text from '@/common/components/Text/Text';

interface DancerItemPropTypes extends Omit<DancerTypes, 'genres'> {
  genre: string;
}

const DancerItem = ({ id, profileImage, genre, nickname }: DancerItemPropTypes) => {
  return (
    <li className={dancerItemStyle}>
      <Link
        href={ROUTES_CONFIG.dancer.path(id.toString())}
        style={{ display: 'contents', textDecoration: 'none', color: 'inherit' }}>
        <img src={profileImage} alt="댄서 프로필" className={dancerImageStyle} />
        <div className={dancerInfoStyle}>
          <Head tag="b1_sb">{nickname}</Head>
          <Text tag="b3_r">{genre}</Text>
        </div>
      </Link>
    </li>
  );
};

export default DancerItem;
