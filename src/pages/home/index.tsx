import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/pages/home/components/Footer';
import HomeCarousel from '@/pages/home/components/HomeCarousel';
import HomeHeader from '@/pages/home/components/HomeHeader';
import MyPage from '@/pages/home/components/MyPage';
import PopularDancers from '@/pages/home/components/PopularDancers';
import PopularGenre from '@/pages/home/components/PopularGenre';
import RecommendationLessons from '@/pages/home/components/RecommendationLessons';
import UpcomingLessones from '@/pages/home/components/UpcomingLessons';
import { overlayActiveStyle, overlayStyle, carouselContainerStyle } from '@/pages/home/index.css';
import { isLoggedIn } from '@/utils/authUtil';
import { useIntersect } from '@/utils/useIntersect';
import { ROUTES_CONFIG } from '@/routes/routesConfig';

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
