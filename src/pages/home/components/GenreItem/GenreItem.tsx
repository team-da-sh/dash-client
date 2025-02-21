import { containerStyle, genreStyle, medalStyle } from '@/pages/home/components/GenreItem/genreItem.css';
import Text from '@/shared/components/Text/Text';

interface GenreItemProps {
  medalIcon: JSX.Element;
  genre: string;
  onClick: () => void;
}

const GenreItem = ({ medalIcon, genre, onClick }: GenreItemProps) => {
  return (
    <li className={containerStyle} onClick={onClick}>
      <div className={medalStyle}>{medalIcon}</div>

      <Text tag="b2" className={genreStyle}>
        {genre}
      </Text>
    </li>
  );
};

export default GenreItem;
