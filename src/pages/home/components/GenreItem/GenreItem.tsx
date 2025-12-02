import { containerStyle, genreStyle, medalStyle } from '@/pages/home/components/GenreItem/genreItem.css';
import Text from '@/shared/components/Text/Text';

interface GenreItemPropTypes {
  medalIcon: JSX.Element;
  genre: string;
  onClick: () => void;
}

const GenreItem = ({ medalIcon, genre, onClick }: GenreItemPropTypes) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClick();
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
    <li className={containerStyle} onClick={onClick} role="button" tabIndex={0} onKeyDown={handleKeyDown}>
      <div className={medalStyle}>{medalIcon}</div>

      <Text tag="b2_m" className={genreStyle}>
        {genre}
      </Text>
    </li>
  );
};

export default GenreItem;
