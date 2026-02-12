import Link from 'next/link';
import { containerStyle, genreStyle, medalStyle } from '@/app/(home)/components/GenreItem/genreItem.css';
import Text from '@/common/components/Text/Text';
import { genreMapping } from '@/shared/constants';

interface GenreItemPropTypes {
  medalIcon: JSX.Element;
  genre: string;
}

const GenreItem = ({ medalIcon, genre }: GenreItemPropTypes) => {
  return (
    <li className={containerStyle}>
      <Link href={`/search?genre=${genre}`}>
        <div className={medalStyle}>{medalIcon}</div>

        <Text tag="b2_m" className={genreStyle}>
          {genreMapping[genre]}
        </Text>
      </Link>
    </li>
  );
};

export default GenreItem;
