import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DancerItem from '@/pages/home/components/DancerItem';
import Footer from '@/pages/home/components/Footer';
import HomeCarousel from '@/pages/home/components/HomeCarousel';
import HomeHeader from '@/pages/home/components/HomeHeader';
import MyPage from '@/pages/home/components/MyPage';
import PopularGenre from '@/pages/home/components/PopularGenre';
import RecommendationLessons from '@/pages/home/components/RecommendationLessons';
import UpcomingLessones from '@/pages/home/components/UpcomingLessons';
import {
  overlayActiveStyle,
  containerStyle,
  dancerListWrapperstyle,
  overlayStyle,
  carouselContainerStyle,
} from '@/pages/home/index.css';
import { DANCERLIST } from '@/pages/home/mocks';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
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

      <div className={dancerListWrapperstyle}>
        <Head level="h2" tag="h4">
          가장 핫한 댄서들만 모아봤어요
        </Head>
        <Flex tag="ul" gap="0.8rem" marginTop="2rem" className={containerStyle}>
          {DANCERLIST.map((data) => (
            <DancerItem
              key={data.teacherId}
              teacherImageUrl={data.teacherImageUrl}
              teacherGenre={data.teacherGenre}
              teacherNickName={data.teacherNickName}
            />
          ))}
        </Flex>
      </div>

      <UpcomingLessones />

      <Footer />
    </>
  );
};

export default Home;
