import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from '@/components/Button';

const meta = {
  title: 'Common/Button',
  component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const createButtonStory = (variant: ButtonProps['variant']) => ({
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
