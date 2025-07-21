import Footer from '@/pages/home/components/Footer/Footer';
import HomeCarousel from '@/pages/home/components/HomeCarousel/HomeCarousel';
import LatestLessons from '@/pages/home/components/LatestLessons/LatestLessons';
import PopularGenre from '@/pages/home/components/PopularGenre/PopularGenre';
import UpcomingLessones from '@/pages/home/components/UpcomingLessons/UpcomingLessons';
import { FetchErrorBoundary } from '@/shared/components/ErrorBoundary/FetchErrorBoundary/FetchErrorBoundary';

const images = '/images/image_kkukgirl.webp';

const preload = (imageArray: string) => {
  const img = new Image();
  img.src = imageArray;
};

const Home = () => {
  preload(images);

  return (
    <main>
      <HomeCarousel />
      <FetchErrorBoundary>
        <UpcomingLessones />
      </FetchErrorBoundary>
      <FetchErrorBoundary>
        <PopularGenre />
      </FetchErrorBoundary>
      <FetchErrorBoundary>
        <LatestLessons />
      </FetchErrorBoundary>

      <Footer />
    </main>
  );
};

export default Home;
