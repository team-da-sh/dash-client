import type { Meta, StoryObj } from '@storybook/react';
import BoxButton, { BoxButtonProps } from '@/components/BoxButton';

const meta = {
  title: 'Common/BoxButton',
  component: BoxButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'outline'],
    },
    children: {
      control: { type: 'text' },
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    variant: 'primary',
    children: 'Button',
    isDisabled: false,
  },
} satisfies Meta<typeof BoxButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const createButtonStory = (variant: BoxButtonProps['variant']) => ({
  args: {
    variant,
  },
  argsType: {
    variant: {
      control: false,
    },
  },
});

export const Primary: Story = createButtonStory('primary');

export const Secondary: Story = createButtonStory('secondary');

export const Outline: Story = createButtonStory('outline');
