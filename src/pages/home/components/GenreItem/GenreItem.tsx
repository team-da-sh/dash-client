import { containerStyle, dummyStyle, genreStyle, medalStyle } from '@/pages/home/components/GenreItem/genreItem.css';
import { DUMMY } from '@/pages/home/constants';
import Text from '@/shared/components/Text/Text';

interface GenreItemPropTypes {
  medalIcon: JSX.Element;
  genre: string;
  onClick: () => void;
}

const GenreItem = ({ medalIcon, genre, onClick }: GenreItemPropTypes) => {
  if (genre === DUMMY) {
    return <li className={dummyStyle} />;
  }

  return (
    <li className={containerStyle} onClick={onClick}>
      <div className={medalStyle}>{medalIcon}</div>

      <Text tag="b2_m" className={genreStyle}>
        {genre}
      </Text>
    </li>
  );
};

export default GenreItem;
