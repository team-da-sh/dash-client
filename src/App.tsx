import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect } from 'react';
import Button from './components/BoxButton';
import queryClient from './queryClient';
import './styles/index.css';

const App = () => {
  const setScreenSize = () => {
    // vh 관련
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // window width 관련
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const maxWidth = Math.min(375, windowWidth);
    document.documentElement.style.setProperty('--app-max-width', `${maxWidth}px`);
  };

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenSize);

    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div>DASH</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* <Button variant="primary" isDisabled={false}>
          button
        </Button> */}
        <Button variant="outline" isDisabled={true}>
          outlined Button
        </Button>
        <Button variant="outline" isDisabled={false}>
          outlined Button
        </Button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="secondary" isDisabled={true}>
          초기화
        </Button>
      </div>
    </QueryClientProvider>
  );
};

export default App;
