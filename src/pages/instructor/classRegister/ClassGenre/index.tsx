import GenreButton from '@/pages/search/components/TabContainer/TagSection/BottomSheet/GenreButton';
import Flex from '@/components/Flex';
import { GENRE_CATEGORY } from '@/constants';
import Description from '../Description';
import { genreButtonContainerStyle } from './index.css';

interface ClassGenreProps {
  selectedGenre: string | null;
  toggleCategory: (category: string) => void;
}

const ClassGenre = ({ selectedGenre, toggleCategory }: ClassGenreProps) => {
  return (
    <Flex tag="section" direction="column" gap="2rem" width="100%" marginBottom="4rem">
      <Description title="장르" subTitle="클래스에 해당하는 장르를 최대 2개까지 골라 주세요" />

      <div className={genreButtonContainerStyle}>
        {GENRE_CATEGORY.flat().map((category, index) => (
          <GenreButton
            key={index}
            category={category}
            isSelected={selectedGenre === category}
            onClick={() => toggleCategory(category)}
          />
        ))}
      </div>
    </Flex>
  );
};

export default ClassGenre;
