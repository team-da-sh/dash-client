import GenreChip from '@/pages/onboarding/components/GenreChip';
import { genreListStyle } from '@/pages/onboarding/components/GenreStep/index.css';
import { GENRELIST, INFO_KEY } from '@/pages/onboarding/constants';
import { GENRE_INFO } from '@/pages/onboarding/mocks';
import { GenreTypes, onboardInfoTypes } from '@/pages/onboarding/types';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';

const MAX_GENRE_COUNT = 3;

interface GenreStepProps extends Pick<onboardInfoTypes, 'genres'> {
  onInfoChange: (key: string, value: string | GenreTypes[]) => void;
}

const GenreStep = ({ genres = [], onInfoChange }: GenreStepProps) => {
  const handleCheckboxClick = (genre: GenreTypes) => {
    if (genres.includes(genre)) {
      onInfoChange(
        INFO_KEY.GENRES,
        genres.filter((i) => i !== genre)
      );
    } else {
      if (genres.length === MAX_GENRE_COUNT) {
        genres.shift();
        onInfoChange(INFO_KEY.GENRES, [...genres, genre]);
        return;
      }

      onInfoChange(INFO_KEY.GENRES, [...genres, genre]);
    }
  };

  return (
    <Flex direction="column" width="100%">
      <Flex direction="column" gap="0.8rem">
        <Head level="h1" tag="h2">
          선호하는 댄스 장르
        </Head>
        <Text tag="b2" color="gray7">
          최대 3개까지 고를 수 있어요
        </Text>
      </Flex>

      <Flex tag="ul" marginTop="2.8rem" justify="spaceBetween" className={genreListStyle}>
        {GENRE_INFO.map((data, index) => (
          <GenreChip
            key={`${index}-${data.genre}`}
            id={GENRELIST[index] as GenreTypes}
            genre={data.genre}
            imageUrl={data.url}
            isChecked={genres.includes(GENRELIST[index] as GenreTypes)}
            onCheckboxClick={handleCheckboxClick}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default GenreStep;
