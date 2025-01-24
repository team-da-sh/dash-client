import { useNavigate } from 'react-router-dom';
import GenreItem from '@/pages/home/components/GenreItem';
import { genreWrapperStyle } from '@/pages/home/components/LessonItem/index.css';
import { GENRE_ICONS } from '@/pages/home/constants';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import { useGetPopularGenres } from '@/apis/home/queries';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { genreMapping } from '@/constants';

const PopularGenre = () => {
  const { data } = useGetPopularGenres();

  const navigate = useNavigate();

  const handleGenreClick = (genre: string) => {
    navigate(ROUTES_CONFIG.search.path, { state: { genre } });
  };

  return (
    <div className={genreWrapperStyle}>
      <Head level="h2" tag="h4">
        지금 가장 인기있는 댄스 장르
      </Head>

      <Flex tag="ul" gap="0.7rem" marginTop="2rem">
        {data?.genres.map((genre, index) => (
          <GenreItem
            key={`${index}-${genre}`}
            medalIcon={GENRE_ICONS[index]}
            genre={genreMapping[genre]}
            onClick={() => handleGenreClick(genreMapping[genre])}
          />
        ))}
      </Flex>
    </div>
  );
};

export default PopularGenre;
