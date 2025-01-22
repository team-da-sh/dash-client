import { containerStyle, genreStyle, medalStyle } from '@/pages/home/components/GenreItem/index.css';
import Text from '@/components/Text';

interface GenreItemProps {
  medalIcon: JSX.Element;
  genre: string;
}

const GenreItem = ({ medalIcon, genre }: GenreItemProps) => {
  console.log(genre);
  return (
    <li className={containerStyle}>
      <div className={medalStyle}>{medalIcon}</div>

      <Text tag="b2" className={genreStyle}>
        {genre}
      </Text>
    </li>
  );
};

export default GenreItem;
