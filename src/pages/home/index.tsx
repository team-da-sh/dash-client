import { useRef, useState } from 'react';
import HomeHeader from '@/pages/home/components/HomeHeader';
import { imageStyle } from '@/pages/home/index.css';

const Home = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);

  window.addEventListener('scroll', (e) => {
    console.log(headerRef.current?.getBoundingClientRect().y);
  });

  return (
    <div style={{ height: '100rem' }}>
      <HomeHeader />
      <div className={imageStyle}>여백</div>
      <div>보여야함</div>
    </div>
  );
};

export default Home;
