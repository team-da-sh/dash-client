import type { Meta, StoryObj } from '@storybook/react';
import Header from '@/shared/components/Header/Header';

const meta: Meta = {
  title: 'Common/Header',
  component: Header.Root,

  parameters: {
    layout: 'centered',
  },
  subcomponents: {
    BackIcon: Header.BackIcon,
    Title: Header.Title,
    CloseIcon: Header.CloseIcon,
  },

  argTypes: {
    title: {
      control: { type: 'text' },
      description: '헤더 타이틀 텍스트',
      defaultValue: 'HEADER TITLE',
    },
    onClickBack: {
      action: 'onClickBack',
      description: '뒤로가기 버튼 클릭 이벤트',
    },
    onClickClose: {
      action: 'onClickClose',
      description: '닫기 버튼 클릭 이벤트',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'HEADER TITLE',
  },
  render: ({ title }) => (
    <Header.Root>
      <Header.BackIcon />
      <Header.Title title={title} />
      <Header.CloseIcon />
    </Header.Root>
  ),
};

export const BackOnly: Story = {
  args: {
    title: 'Go Back',
  },
  render: ({ title }) => (
    <Header.Root>
      <Header.BackIcon />
      <Header.Title title={title} />
    </Header.Root>
  ),
};

export const CloseOnly: Story = {
  render: () => (
    <Header.Root>
      <Header.CloseIcon />
    </Header.Root>
  ),
};
