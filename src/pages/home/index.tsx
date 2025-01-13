import Divider from '@/components/Divider';

const Home = () => {
  return (
    <div style={{ height: '100vh', backgroundColor: 'black', padding: '5rem' }}>
      홈
      <Divider direction="vertical" color="primary" length="100px" />
      <div>헤헤</div>
      <Divider />
    </div>
  );
};

export default Home;
