import type { Preview } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ModalProvider from '../src/shared/components/ModalProvider/ModalProvier';
import '../src/shared/styles/global.css';
import '../src/shared/styles/reset.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      const queryClient = new QueryClient();

      return (
        <QueryClientProvider client={queryClient}>
          <Story />
          <ModalProvider />
        </QueryClientProvider>
      );
    },
  ],
};

export default preview;
