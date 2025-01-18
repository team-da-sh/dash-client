import { genreListStyle } from '@/pages/onboarding/components/GenreStep/index.css';
import GenreChip from '@/pages/onboarding/components/GenreChip';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';

interface GenreStepProps {}

const GENRE_INFO = [
  { genre: '힙합', url: '../../../../../public/svg/ic_image_temp.svg' },
  { genre: '피메일힙합', url: '../../../../../public/svg/ic_image_temp.svg' },
  { genre: '팝핑', url: '../../../../../public/svg/ic_image_temp.svg' },
  { genre: '브레이킹', url: '../../../../../public/svg/ic_image_temp.svg' },
  { genre: '왁킹', url: '../../../../../public/svg/ic_image_temp.svg' },
  { genre: '락킹', url: '../../../../../public/svg/ic_image_temp.svg' },
  { genre: '하우스', url: '../../../../../public/svg/ic_image_temp.svg' },
  { genre: '보깅', url: '../../../../../public/svg/ic_image_temp.svg' },
  { genre: '크럼프', url: '../../../../../public/svg/ic_image_temp.svg' },
  { genre: '소울', url: '../../../../../public/svg/ic_image_temp.svg' },
  { genre: '코레오그래피', url: '../../../../../public/svg/ic_image_temp.svg' },
  { genre: '케이팝', url: '../../../../../public/svg/ic_image_temp.svg' },
];

const GenreStep = ({}: GenreStepProps) => {
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
          <GenreChip key={`${index}-${data.genre}`} genre={data.genre} imageUrl={data.url} />
        ))}
      </Flex>
    </Flex>
  );
};

export default GenreStep;
