import { useState } from 'react';
import DancerItem from '@/pages/home/components/DancerItem';
import Footer from '@/pages/home/components/Footer';
import GenreItem from '@/pages/home/components/GenreItem';
import HomeCarousel from '@/pages/home/components/HomeCarousel';
import HomeHeader from '@/pages/home/components/HomeHeader';
import { genreWrapperStyle } from '@/pages/home/components/LessonItem/index.css';
import MyPage from '@/pages/home/components/MyPage';
import RecommendationLessons from '@/pages/home/components/RecommendationLessons';
import UpcomingClasses from '@/pages/home/components/UpcomingClasses';
import {
  myPageContainerStyle,
  overlayActiveStyle,
  containerStyle,
  dancerListWrapperstyle,
  overlayStyle,
} from '@/pages/home/index.css';
import { DANCERLIST, GENRELIST } from '@/pages/home/mocks';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import { useIntersect } from '@/utils/useIntersect';

const Home = () => {
  const [targetRef, isVisible] = useIntersect(false);
  const [showMyPage, setShowMyPage] = useState(false);

  const handleMyPageClick = () => {
    setShowMyPage(!showMyPage);
  };

  const handleCloseMyPageClick = () => {
    setShowMyPage(false);
  };

  return (
    <div className={myPageContainerStyle}>
      <div className={`${overlayStyle} ${showMyPage ? overlayActiveStyle : ''}`} />
      <MyPage showMyPage={showMyPage} onClose={handleCloseMyPageClick} />

      <HomeHeader isVisible={isVisible} onMyPageClick={handleMyPageClick} />

      <div ref={targetRef}>
        <HomeCarousel />
      </div>

      <RecommendationLessons />

      <div className={genreWrapperStyle}>
        <Head level="h2" tag="h4">
          지금 가장 인기있는 댄스 장르
        </Head>
        <Flex tag="ul" gap="0.7rem" marginTop="2rem">
          {GENRELIST.map((data, index) => (
            <GenreItem key={`${index}-${data.genre}`} medalIcon={data.medal} genre={data.genre} />
          ))}
        </Flex>
      </div>

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

      <UpcomingClasses />

      <Footer />
    </div>
  );
};

export default Home;
