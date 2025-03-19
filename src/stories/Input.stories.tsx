import type { Meta, StoryObj } from '@storybook/react';
import Input from '@/shared/components/Input/Input';

const meta = {
  title: 'Common/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'placeholder',
    isError: false,
    value: 'value',
  },
};
