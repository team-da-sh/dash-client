import { ReactNode } from 'react';
import { checkboxStyle, genreCheckboxContainerStyle } from '@/pages/login/components/GenreChip/index.css';
import Flex from '@/components/Flex';
import Text from '@/components/Text';

interface GenreChipProps {
  genre: string;
  genreSvg: ReactNode;
}

const GenreChip = ({ genre, genreSvg }: GenreChipProps) => {
  return (
    <Flex
      tag="label"
      direction="column"
      gap="1rem"
      paddingLeft="1.2rem"
      paddingRight="1.2rem"
      align="center"
      className={genreCheckboxContainerStyle}>
      <input type="checkbox" className={checkboxStyle} />
      <div>{genreSvg}</div>
      <Text tag="b2">{genre}</Text>
    </Flex>
  );
};

export default GenreChip;
