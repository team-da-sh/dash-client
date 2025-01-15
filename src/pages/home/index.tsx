import HomeHeader from '@/pages/home/components/HomeHeader';
import { containerStyle } from '@/pages/home/index.css';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import { useIntersect } from '@/utils/useIntersect';
import { vars } from '@/styles/theme.css';

const Home = () => {
  const [targetRef, isVisible] = useIntersect(false);

  return (
    <div style={{ height: '300rem' }}>
      <div ref={targetRef} style={{ height: '37.5rem', backgroundColor: vars.colors.gray02 }}></div>
      <HomeHeader isVisible={isVisible}></HomeHeader>

      <Flex justify="spaceBetween" className={containerStyle}>
        <Flex direction="column">
          <header>제목</header>
          <p>ㄴㅁ오라ㅓㅁㄴ올</p>
        </Flex>
        <Text>가나다라마바사</Text>
        <Text>sdjfksajdkf</Text>
      </Flex>
    </div>
  );
};

export default Home;
