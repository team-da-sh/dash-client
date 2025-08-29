import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

async function enableMocks() {
  // if (import.meta.env.MODE === 'development') {
  //   const { worker } = await import('@/mocks/browser.ts');
  //   await worker.start();
  // }
}

enableMocks().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
