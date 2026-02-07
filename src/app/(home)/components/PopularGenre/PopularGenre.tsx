'use client';

import { useRouter } from 'next/navigation';
import { useGetPopularGenres } from '@/app/(home)/apis/queries';
import GenreItem from '@/app/(home)/components/GenreItem/GenreItem';
import { genreWrapperStyle } from '@/app/(home)/components/LessonItem/lessonItem.css';
import { genreListStyle } from '@/app/(home)/components/PopularGenre/popularGenre.css';
import { GENRE_ICONS } from '@/app/(home)/constants';
import Head from '@/common/components/Head/Head';
import { genreMapping } from '@/shared/constants';

const PopularGenre = () => {
  const { data } = useGetPopularGenres();

  const router = useRouter();

  const handleGenreClick = (genre: string) => {
    router.push(`/search?genre=${encodeURIComponent(genre)}`);
  };

  return (
    <section className={genreWrapperStyle} aria-labelledby="popular-genre-title">
      <Head level="h2" tag="h5_sb" id="popular-genre-title">
        지금 가장 인기있는 댄스 장르
      </Head>

      <ul className={genreListStyle}>
        {data?.genres?.map((genre, index) => (
          <GenreItem
            key={genre}
            medalIcon={GENRE_ICONS[index]}
            genre={genreMapping[genre]}
            onClick={() => handleGenreClick(genreMapping[genre])}
          />
        ))}
      </ul>
    </section>
  );
};

export default PopularGenre;
