import { genreButtonContainerStyle } from '@/pages/instructor/classRegister/components/ClassGenre/classGenre.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import GenreButton from '@/pages/search/components/TabContainer/TagSection/BottomSheet/GenreButton/GenreButton';
import { GENRE_CATEGORY } from '@/shared/constants';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface ClassGenrePropTypes {
  selectedGenre: string | null;
  toggleCategory: (category: string) => void;
}

const ClassGenre = ({ selectedGenre, toggleCategory }: ClassGenrePropTypes) => {
  return (
    <div
      className={sprinkles({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: 20,
        mb: 40,
      })}>
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
    </div>
  );
};

export default ClassGenre;
