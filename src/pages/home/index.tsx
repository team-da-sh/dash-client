import ClassItem from '@/pages/home/components/ClassItem';
import { genreWrapperStyle } from '@/pages/home/components/ClassItem/index.css';
import DancerItem from '@/pages/home/components/DancerItem';
import Footer from '@/pages/home/components/Footer';
import GenreItem from '@/pages/home/components/GenreItem';
import HomeHeader from '@/pages/home/components/HomeHeader';
import {
  containerStyle,
  dancerListWrapperstyle,
  deadlineClassWrapperStyle,
  recommandClassWrapperStyle,
} from '@/pages/home/index.css';
import { DANCERLIST, GENRELIST } from '@/pages/home/mocks';
import Flex from '@/components/Flex';
import Head from '@/components/Head';
import { useIntersect } from '@/utils/useIntersect';
import { vars } from '@/styles/theme.css';
import { CLASS_LIST } from '../search/mocks';

const Home = () => {
  const [targetRef, isVisible] = useIntersect(false);

  return (
    <>
      <div ref={targetRef} style={{ height: '37.5rem', backgroundColor: vars.colors.gray02 }}></div>
      <HomeHeader isVisible={isVisible} />

      <div className={recommandClassWrapperStyle}>
        <Head level="h2" tag="h4">
          이 클래스는 꼭 들어야 해요!
        </Head>
        <Flex tag="ul" gap="0.8rem" marginTop="2rem" className={containerStyle}>
          {CLASS_LIST.map((data) => (
            <ClassItem
              key={data.id}
              lessonId={data.id}
              lessonImageUrl={data.teacherProfileImage}
              lessonLevel={data.level}
              lessonGenre={data.genre}
              lessonName={data.name}
              teacherNickname={data.teacherName}
              teacherImageUrl={data.teacherProfileImage}
              lessonStartDateTime={data.startDate}
              lessonEndDateTime={data.endDate}
              lessonStreetAddress={data.location}
              lessonRemainingDays={data.remainingDays}
              useNewStyles={false}
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
          {CLASS_LIST.map((data) => (
            <ClassItem
              key={data.id}
              lessonId={data.id}
              lessonImageUrl={data.teacherProfileImage}
              lessonLevel={data.level}
              lessonGenre={data.genre}
              lessonName={data.name}
              teacherNickname={data.teacherName}
              teacherImageUrl={data.teacherProfileImage}
              lessonStartDateTime={data.startDate}
              lessonEndDateTime={data.endDate}
              lessonStreetAddress={data.location}
              lessonRemainingDays={data.remainingDays}
              useNewStyles={false}
            />
          ))}
        </Flex>
      </div>

      <Footer />
    </>
  );
};

export default Home;
