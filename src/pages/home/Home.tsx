import Footer from '@/pages/home/components/Footer/Footer';
import HomeCarousel from '@/pages/home/components/HomeCarousel/HomeCarousel';
import LatestLessons from '@/pages/home/components/LatestLessons/LatestLessons';
import PopularGenre from '@/pages/home/components/PopularGenre/PopularGenre';
import UpcomingLessones from '@/pages/home/components/UpcomingLessons/UpcomingLessons';
import { carouselContainerStyle } from '@/pages/home/home.css';

const images = '/images/image_kkukgirl.webp';

const preload = (imageArray: string) => {
  const img = new Image();
  img.src = imageArray;
};

const Home = () => {
  preload(images);

  return (
    <main>
      <div className={carouselContainerStyle}>
        <HomeCarousel />
      </div>
      <LatestLessons />
      <PopularGenre />
      <UpcomingLessones />
      <Footer />
    </main>
  );
};

export default Home;
