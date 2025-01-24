import {
  checkboxStyle,
  checkStyle,
  genreCheckboxContainerStyle,
  imageStyle,
  imageWrapperStyle,
} from '@/pages/onboarding/components/GenreChip/index.css';
import { GenreTypes } from '@/pages/onboarding/types';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import IcCheckMain0424 from '@/assets/svg/IcCheckMain0424';

interface GenreChipProps {
  genre: string;
  imageUrl: string;
  id: GenreTypes;
  onCheckboxClick: (genre: GenreTypes) => void;
  isChecked: boolean;
}

const GenreChip = ({ genre, imageUrl, id, onCheckboxClick, isChecked }: GenreChipProps) => {
  return (
    <Flex
      tag="label"
      direction="column"
      gap="1rem"
      paddingLeft="1.2rem"
      paddingRight="1.2rem"
      paddingBottom="2rem"
      align="center"
      className={genreCheckboxContainerStyle}>
      <input type="checkbox" className={checkboxStyle} onChange={() => onCheckboxClick(id)} />
      <Flex justify="center" align="center" className={imageWrapperStyle}>
        <img src={imageUrl} className={imageStyle({ isChecked })} />
        <IcCheckMain0424 width={40} height={40} className={checkStyle({ isChecked })} />
      </Flex>

      <Text tag={isChecked ? 'b4' : 'b2'}>{genre}</Text>
    </Flex>
  );
};

export default GenreChip;
