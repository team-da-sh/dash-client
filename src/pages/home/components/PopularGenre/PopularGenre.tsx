import { useNavigate } from 'react-router-dom';
import { useGetPopularGenres } from '@/pages/home/apis/queries';
import GenreItem from '@/pages/home/components/GenreItem/GenreItem';
import { genreWrapperStyle } from '@/pages/home/components/LessonItem/lessonItem.css';
import { DUMMY, GENRE_ICONS } from '@/pages/home/constants';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import Head from '@/shared/components/Head/Head';
import { genreMapping } from '@/shared/constants';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const PopularGenre = () => {
  const { data } = useGetPopularGenres();

  const navigate = useNavigate();

  const handleGenreClick = (genre: string) => {
    navigate(ROUTES_CONFIG.search.path, { state: { genre } });
  };

  return (
    <div className={genreWrapperStyle}>
      <Head level="h2" tag="h5_sb">
        지금 가장 인기있는 댄스 장르
      </Head>

      <ul className={sprinkles({ display: 'flex', justifyContent: 'space-between', gap: 7, marginTop: 20 })}>
        {data?.genres.map((genre, index) => (
          <GenreItem
            key={genre}
            medalIcon={GENRE_ICONS[index]}
            genre={genre === DUMMY ? DUMMY : genreMapping[genre]}
            onClick={() => handleGenreClick(genreMapping[genre])}
          />
        ))}
      </ul>
    </div>
  );
};

export default PopularGenre;
