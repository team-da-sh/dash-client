import { fetchPopularGenres } from '@/app/(home)/apis/serverFetch';
import GenreItem from '@/app/(home)/components/GenreItem/GenreItem';
import { genreWrapperStyle } from '@/app/(home)/components/LessonItem/lessonItem.css';
import { genreListStyle } from '@/app/(home)/components/PopularGenre/popularGenre.css';
import { GENRE_ICONS } from '@/app/(home)/constants';
import Head from '@/common/components/Head/Head';

const PopularGenre = async () => {
  const popularGenres = await fetchPopularGenres();

  return (
    <section className={genreWrapperStyle} aria-labelledby="popular-genre-title">
      <Head level="h2" tag="h5_sb" id="popular-genre-title">
        지금 가장 인기있는 댄스 장르
      </Head>

      <ul className={genreListStyle}>
        {popularGenres.genres.map((genre, index) => (
          <GenreItem key={genre} medalIcon={GENRE_ICONS[index]} genre={genre} />
        ))}
      </ul>
    </section>
  );
};

export default PopularGenre;
