import GenreChip from '@/pages/login/components/GenreChip';
import { genreListStyle } from '@/pages/login/components/GenreStep/index.css';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import Text from '@/components/Text';
import { IcLogoSmallBlack } from '@/assets/svg';

interface GenreStepProps {}

const GENRE_INFO = [
  { genre: '힙합', svg: <IcLogoSmallBlack width={84} height={84} /> },
  { genre: '피메일힙합', svg: <IcLogoSmallBlack width={84} height={84} /> },
  { genre: '팝핑', svg: <IcLogoSmallBlack width={84} height={84} /> },
  { genre: '브레이킹', svg: <IcLogoSmallBlack width={84} height={84} /> },
  { genre: '왁킹', svg: <IcLogoSmallBlack width={84} height={84} /> },
  { genre: '락킹', svg: <IcLogoSmallBlack width={84} height={84} /> },
  { genre: '하우스', svg: <IcLogoSmallBlack width={84} height={84} /> },
  { genre: '보깅', svg: <IcLogoSmallBlack width={84} height={84} /> },
  { genre: '크럼프', svg: <IcLogoSmallBlack width={84} height={84} /> },
  { genre: '소울', svg: <IcLogoSmallBlack width={84} height={84} /> },
  { genre: '코레오그래피', svg: <IcLogoSmallBlack width={84} height={84} /> },
  { genre: '케이팝', svg: <IcLogoSmallBlack width={84} height={84} /> },
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
        {GENRE_INFO.map((data) => (
          <GenreChip genre={data.genre} genreSvg={data.svg} />
        ))}
      </Flex>
    </Flex>
  );
};

export default GenreStep;
