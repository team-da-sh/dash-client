import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Input from '@/common/components/Input/Input';

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
