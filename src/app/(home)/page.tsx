import type { Metadata } from 'next';
import Footer from '@/app/(home)/components/Footer/Footer';
import HomeCarousel from '@/app/(home)/components/HomeCarousel/HomeCarousel';
import LatestLessons from '@/app/(home)/components/LatestLessons/LatestLessons';
import PopularGenre from '@/app/(home)/components/PopularGenre/PopularGenre';
import UpcomingLessons from '@/app/(home)/components/UpcomingLessons/UpcomingLessons';

export const metadata: Metadata = {
  title: 'Dash 대쉬 | 꿈꾸던 댄스 클래스를 만나다',
  description: '원데이 클래스부터 프라이빗 스쿨까지, 대쉬에서 댄서와 클래스를 검색하고 지금 바로 신청하세요!',
  alternates: { canonical: '/' },
};

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
