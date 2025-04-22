import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { BrowserRouter } from 'react-router-dom';
import Header from '@/shared/components/Header/Header';

const meta: Meta<typeof Header> = {
  title: 'Common/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => <Header />,
};

export const WithMyPageOpen: Story = {
  parameters: {
    reactRouter: {
      browserPath: '/',
      routePath: '/',
    },
  },
  render: () => <Header />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const mypageButton = canvas.getByRole('button', { name: /마이페이지로 이동/i });
    await userEvent.click(mypageButton);
  },
};

export const InSearchPage: Story = {
  parameters: {
    reactRouter: {
      browserPath: '/search',
      routePath: '/search',
    },
  },
  render: () => <Header />,
};
