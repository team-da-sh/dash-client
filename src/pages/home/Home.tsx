import { lazy, Suspense, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/pages/home/components/Footer/Footer';
import HomeCarousel from '@/pages/home/components/HomeCarousel/HomeCarousel';
import HomeHeader from '@/pages/home/components/HomeHeader/HomeHeader';
import PopularDancers from '@/pages/home/components/PopularDancers/PopularDancers';
import PopularGenre from '@/pages/home/components/PopularGenre/PopularGenre';
import RecommendationLessons from '@/pages/home/components/RecommendationLessons/RecommendationLessons';
import UpcomingLessones from '@/pages/home/components/UpcomingLessons/UpcomingLessons';
import { carouselContainerStyle, overlayActiveStyle, overlayStyle } from '@/pages/home/home.css';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { useIntersect } from '@/shared/hooks/useIntersect';
import { isLoggedIn } from '@/shared/utils/authUtil';

const images = 'public/images/image_kkukgirl.webp';

const preload = (imageArray: string) => {
  const img = new Image();
  img.src = imageArray;
};

const MyPage = lazy(() => import('@/pages/home/components/MyPage/MyPage'));

const Home = () => {
  preload(images);
  const navigate = useNavigate();

  const [targetRef, isVisible] = useIntersect(false);
  const [showMyPage, setShowMyPage] = useState(false);

  const handleMyPageClick = () => {
    if (!isLoggedIn()) {
      navigate(ROUTES_CONFIG.login.path);
      return;
    }
    setShowMyPage(!showMyPage);
  };

  const handleCloseMyPageClick = () => {
    setShowMyPage(false);
  };

  return (
    <>
      <div className={`${overlayStyle} ${showMyPage ? overlayActiveStyle : ''}`} />
      {showMyPage && (
        <Suspense fallback={<div />}>
          <MyPage showMyPage={showMyPage} onClose={handleCloseMyPageClick} />
        </Suspense>
      )}

      <HomeHeader isVisible={isVisible} onMyPageClick={handleMyPageClick} />
      <div ref={targetRef} className={carouselContainerStyle}>
        <HomeCarousel />
      </div>
      <RecommendationLessons />
      <PopularGenre />
      <PopularDancers />
      <UpcomingLessones />
      <Footer />
    </>
  );
};

export default Home;
