import type { FieldError } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import {
  genreButtonContainerStyle,
  containerStyle,
  buttonWrapperStyle,
  errorMessageStyle,
} from '@/pages/instructor/classRegister/components/ClassGenre/classGenre.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import { CLASS_GENRE_SUBTITLE } from '@/pages/instructor/classRegister/constants/registerSectionText';
import GenreButton from '@/pages/search/components/TabContainer/TagSection/BottomSheet/GenreButton/GenreButton';
import Text from '@/shared/components/Text/Text';
import { GENRE_CATEGORY } from '@/shared/constants';

interface ClassGenrePropTypes {
  selectedGenre: string | null;
  toggleCategory: (category: string) => void;
}

const ClassGenre = ({ selectedGenre, toggleCategory }: ClassGenrePropTypes) => {
  const {
    formState: { errors },
  } = useFormContext();
  const error = errors.selectedGenre as FieldError | undefined;

  return (
    <div className={containerStyle}>
      <Description title="장르" subTitle={CLASS_GENRE_SUBTITLE} />

      <div className={buttonWrapperStyle}>
        <div className={genreButtonContainerStyle}>
          {GENRE_CATEGORY.flatMap((categoryArray) =>
            categoryArray.map((category, index) => (
              <GenreButton
                key={`${category}-${index}`}
                category={category}
                isSelected={selectedGenre === category}
                onClick={() => toggleCategory(category)}
              />
            ))
          )}
        </div>
      </div>

      {error && (
        <div className={errorMessageStyle}>
          <Text tag="b3_r" color="alert3">
            {error.message}
          </Text>
        </div>
      )}
    </div>
  );
};

export default ClassGenre;
