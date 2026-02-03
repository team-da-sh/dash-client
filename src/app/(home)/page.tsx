'use client';

import Footer from '@/app/(home)/components/Footer/Footer';
import HomeCarousel from '@/app/(home)/components/HomeCarousel/HomeCarousel';
import LatestLessons from '@/app/(home)/components/LatestLessons/LatestLessons';
import PopularGenre from '@/app/(home)/components/PopularGenre/PopularGenre';
import UpcomingLessons from '@/app/(home)/components/UpcomingLessons/UpcomingLessons';

export default function Page() {
  return (
    <main>
      <HomeCarousel />
      <LatestLessons />
      <PopularGenre />
      <UpcomingLessons />
      <Footer />
    </main>
  );
}
