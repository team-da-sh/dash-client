import type { FieldError } from 'react-hook-form';
import { genreButtonContainerStyle } from '@/pages/instructor/classRegister/components/ClassGenre/classGenre.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import { CLASS_GENRE_SUBTITLE } from '@/pages/instructor/classRegister/constants/registerSectionText';
import GenreButton from '@/pages/search/components/TabContainer/TagSection/BottomSheet/GenreButton/GenreButton';
import Text from '@/shared/components/Text/Text';
import { GENRE_CATEGORY } from '@/shared/constants';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface ClassGenrePropTypes {
  selectedGenre: string | null;
  toggleCategory: (category: string) => void;
  error?: FieldError;
}

const ClassGenre = ({ selectedGenre, toggleCategory, error }: ClassGenrePropTypes) => {
  return (
    <div
      className={sprinkles({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        mb: 40,
      })}>
      <Description title="장르" subTitle={CLASS_GENRE_SUBTITLE} />

      <div className={sprinkles({ mt: 20 })}>
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

      {error && (
        <div className={sprinkles({ mt: 8 })}>
          <Text tag="b3_r" color="alert3">
            {error.message}
          </Text>
        </div>
      )}
    </div>
  );
};

export default ClassGenre;
