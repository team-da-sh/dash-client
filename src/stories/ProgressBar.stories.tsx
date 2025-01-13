import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from '@/components/ProgressBar';

const meta = {
  title: 'Common/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    totalStep: {
      control: { type: 'number' },
      description: 'Total number of steps in the progress bar',
      defaultValue: 5,
    },
    currentStep: {
      control: { type: 'number' },
      description: 'Current active step in the progress bar',
      defaultValue: 1,
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const totalFiveStep: Story = {
  args: {
    totalStep: 5,
    currentStep: 1,
  },
};

export const totalFourStep: Story = {
  args: {
    totalStep: 4,
    currentStep: 1,
  },
};
