import { genreButtonContainerStyle } from '@/pages/instructor/classRegister/components/ClassGenre/classGenre.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import GenreButton from '@/pages/search/components/TabContainer/TagSection/BottomSheet/GenreButton/GenreButton';
import Flex from '@/shared/components/Flex/Flex';
import { GENRE_CATEGORY } from '@/shared/constants';

interface ClassGenreProps {
  selectedGenre: string | null;
  toggleCategory: (category: string) => void;
}

const ClassGenre = ({ selectedGenre, toggleCategory }: ClassGenreProps) => {
  return (
    <Flex tag="section" direction="column" gap="2rem" width="100%" marginBottom="4rem">
      <Description title="장르" subTitle="클래스에 해당하는 장르를 한 가지만 골라 주세요" />

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
