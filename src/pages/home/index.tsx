import HomeHeader from '@/pages/home/components/HomeHeader';
import { useIntersect } from '@/utils/useIntersect';
import { vars } from '@/styles/theme.css';

const Home = () => {
  const [targetRef, isVisible] = useIntersect(false);

  return (
    <div style={{ height: '300rem' }}>
      <div ref={targetRef} style={{ height: '37.5rem', backgroundColor: vars.colors.gray02 }}></div>
      <HomeHeader isVisible={isVisible}></HomeHeader>
    </div>
  );
};

export default Home;
