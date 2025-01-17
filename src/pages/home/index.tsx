import ClassItem from '@/pages/home/components/ClassItem';
import { genreWrapperStyle } from '@/pages/home/components/ClassItem/index.css';
import DancerItem from '@/pages/home/components/DancerItem';
import Footer from '@/pages/home/components/Footer';
import GenreItem from '@/pages/home/components/GenreItem';
import HomeCarousel from '@/pages/home/components/HomeCarousel';
import HomeHeader from '@/pages/home/components/HomeHeader';
import {
  containerStyle,
  dancerListWrapperstyle,
  deadlineClassWrapperStyle,
  recommandClassWrapperStyle,
} from '@/pages/home/index.css';
import { DANCERLIST, GENRELIST, RECOMMAND_CLASSLIST } from '@/pages/home/mocks';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import { useIntersect } from '@/utils/useIntersect';

const Home = () => {
  const [targetRef, isVisible] = useIntersect(false);

  return (
    <>
      <HomeHeader isVisible={isVisible} />

      <div ref={targetRef}>
        <HomeCarousel />
      </div>

      <div className={recommandClassWrapperStyle}>
        <Head level="h2" tag="h4">
          이 클래스는 꼭 들어야 해요!
        </Head>
        <Flex tag="ul" gap="0.8rem" marginTop="2rem" className={containerStyle}>
          {RECOMMAND_CLASSLIST.map((data) => (
            <ClassItem
              key={data.lessonId}
              lessonId={data.lessonId}
              lessonImageUrl={data.teacherImageUrl}
              lessonLevel={data.lessonLevel}
              lessonGenre={data.lessonGenre}
              lessonName={data.lessonName}
              teacherNickname={data.teacherNickname}
              teacherImageUrl={data.teacherImageUrl}
              lessonStartDateTime={data.lessonStartDateTime}
              lessonEndDateTime={data.lessonEndDateTime}
              lessonStreetAddress={data.lessonStreetAddress}
            />
          ))}
        </Flex>
      </div>

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

      <div className={deadlineClassWrapperStyle}>
        <Head level="h2" tag="h4">
          놓치면 아쉬울 마지막 기회
        </Head>
        <Flex tag="ul" marginTop="2rem" gap="0.8rem" className={containerStyle}>
          {RECOMMAND_CLASSLIST.map((data) => (
            <ClassItem
              key={data.lessonId}
              lessonId={data.lessonId}
              lessonImageUrl={data.teacherImageUrl}
              lessonLevel={data.lessonLevel}
              lessonGenre={data.lessonGenre}
              lessonName={data.lessonName}
              teacherNickname={data.teacherNickname}
              teacherImageUrl={data.teacherImageUrl}
              lessonStartDateTime={data.lessonStartDateTime}
              lessonEndDateTime={data.lessonEndDateTime}
              lessonStreetAddress={data.lessonStreetAddress}
            />
          ))}
        </Flex>
      </div>

      <Footer />
    </>
  );
};

export default Home;
