import * as Sentry from '@sentry/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

async function enableMocks() {
  if (import.meta.env.MODE === 'development') {
    const { worker } = await import('@/mocks/browser.ts');
    await worker.start();
  }
}

Sentry.init({
  dsn: 'https://de43663a906ecf125d4c78794239a6a6@o4509679305424896.ingest.us.sentry.io/4509684367753216',
  sendDefaultPii: true,
});

enableMocks().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
