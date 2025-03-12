import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/pages/home/components/Footer/Footer';
import HomeCarousel from '@/pages/home/components/HomeCarousel/HomeCarousel';
import HomeHeader from '@/pages/home/components/HomeHeader/HomeHeader';
import MyPage from '@/pages/home/components/MyPage/MyPage';
import PopularDancers from '@/pages/home/components/PopularDancers/PopularDancers';
import PopularGenre from '@/pages/home/components/PopularGenre/PopularGenre';
import RecommendationLessons from '@/pages/home/components/RecommendationLessons/RecommendationLessons';
import UpcomingLessones from '@/pages/home/components/UpcomingLessons/UpcomingLessons';
import { carouselContainerStyle, overlayActiveStyle, overlayStyle } from '@/pages/home/home.css';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { isLoggedIn } from '@/shared/utils/authUtil';
import { useIntersect } from '@/shared/utils/useIntersect';

const preLoad = (arr: string[]) => {
  arr.forEach((url: string) => {
    const image = new Image();
    image.src = url;
  });
};
const preloadImage = (url: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = url;
  document.head.appendChild(link);
};
// preloadImage('public/images/image_kkukgirl.webp');
const Home = () => {
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
      <MyPage showMyPage={showMyPage} onClose={handleCloseMyPageClick} />
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
