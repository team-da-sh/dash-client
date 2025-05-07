import { genreButtonContainerStyle } from '@/pages/instructor/classRegister/components/ClassGenre/classGenre.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import { CLASS_GENRE_SUBTITLE } from '@/pages/instructor/classRegister/constants/registerSectionText';
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
      <Description title="장르" subTitle={CLASS_GENRE_SUBTITLE} />

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
