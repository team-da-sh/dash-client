import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Toaster } from 'react-hot-toast';
import type { iconType, notifyProps } from '@/shared/components/Toast/Toast';
import { notify } from '@/shared/components/Toast/Toast';

const meta: Meta = {
  title: 'Common/Toast',
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'radio',
      options: ['success', 'fail', 'default'],
      description: '토스트의 아이콘을 지정합니다.',
      table: {
        type: {
          summary: 'success | fail | default',
        },
      },
    },
    message: { description: '토스트의 내용을 작성합니다.' },
  },
  decorators: [
    (Story: StoryFn) => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Toaster />
        <Story />
      </div>
    ),
  ],
};
export default meta;

const ToastSample = ({ option }: { option: notifyProps }) => {
  return (
    <button
      onClick={() => notify(option)}
      style={{ padding: '10px', border: '1px solid black', borderRadius: '8px', cursor: 'poin' }}>
      Toast 열기
    </button>
  );
};

export const Default: StoryObj = {
  argTypes: { icon: { control: { disable: true } } },
  render: () => {
    const option = {
      message: '기본 토스트입니다.',
    };
    return <ToastSample option={option} />;
  },
};

export const Success: StoryObj = {
  argTypes: { icon: { control: { disable: true } } },
  render: () => {
    const option = {
      message: 'success 토스트입니다.',
      icon: 'success' as iconType,
    };
    return <ToastSample option={option} />;
  },
};

export const Fail: StoryObj = {
  argTypes: { icon: { control: { disable: true } } },
  render: () => {
    const option = {
      message: 'fail 토스트입니다.',
      icon: 'fail' as iconType,
    };
    return <ToastSample option={option} />;
  },
};
