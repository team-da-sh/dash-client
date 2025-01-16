import { ReactNode } from 'react';
import Flex from '@/components/Flex';
import Text from '@/components/Text';

interface GenreChipProps {
  genre: string;
  genreSvg: ReactNode;
}

const GenreChip = ({ genre, genreSvg }: GenreChipProps) => {
  return (
    <Flex direction="column" gap="1rem" paddingLeft="1.2rem" paddingRight="1.2rem" align="center">
      {genreSvg}
      <Text tag="b2">{genre}</Text>
    </Flex>
  );
};

export default GenreChip;
