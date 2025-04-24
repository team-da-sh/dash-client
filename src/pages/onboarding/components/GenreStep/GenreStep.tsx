import GenreChip from '@/pages/onboarding/components/GenreChip/GenreChip';
import { genreListStyle } from '@/pages/onboarding/components/GenreStep/genreStep.css';
import { GENRELIST, INFO_KEY } from '@/pages/onboarding/constants';
import { GENRE_INFO } from '@/pages/onboarding/mocks';
import type { GenreTypes } from '@/pages/onboarding/types/genreTypes';
import type { onboardInfoTypes } from '@/pages/onboarding/types/onboardInfoTypes';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';

const MAX_GENRE_COUNT = 3;

interface GenreStepProps extends Pick<onboardInfoTypes, 'genres'> {
  onInfoChange: <K extends keyof onboardInfoTypes>(key: K, value: onboardInfoTypes[K]) => void;
}

const GenreStep = ({ genres = [], onInfoChange }: GenreStepProps) => {
  const handleCheckboxClick = (genre: GenreTypes) => {
    // 클릭된 장르 클릭시 제거
    if (genres.includes(genre)) {
      onInfoChange(
        INFO_KEY.GENRES,
        genres.filter((i) => i !== genre)
      );
    } else {
      // 최대개수만큼 선택하고 한번 더 선택하면 가장 처음 클릭된 장르 제거
      if (genres.length === MAX_GENRE_COUNT) {
        genres.shift();
        onInfoChange(INFO_KEY.GENRES, [...genres, genre]);
        return;
      }

      // 클릭한 장르 추가
      onInfoChange(INFO_KEY.GENRES, [...genres, genre]);
    }
  };

  return (
    <Flex direction="column" width="100%">
      <Flex direction="column" gap="0.8rem">
        <Head level="h1" tag="h3_sb">
          선호하는 댄스 장르
        </Head>
        <Text tag="b2_m" color="gray7">
          최대 3개까지 고를 수 있어요
        </Text>
      </Flex>

      <Flex marginTop="2.8rem" justify="spaceBetween" className={genreListStyle}>
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
