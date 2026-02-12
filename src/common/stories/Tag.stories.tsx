import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Tag from '@/common/components/Tag/Tag';

const meta = {
  title: 'Common/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large', 'thumbnail', 'mypage'],
    },
    type: {
      control: { type: 'radio' },
      options: ['genre', 'level', 'search', 'deadline'],
    },
    hasAuth: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
  args: {
    size: 'medium',
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Tag',
  },
};

export const SmallTag: Story = {
  args: {
    size: 'small',
    children: '힙합',
  },
};

export const MediumTag: Story = {
  args: {
    size: 'medium',
    children: '힙합',
  },
};

export const ThumbnailTag: Story = {
  args: {
    type: 'deadline',
    size: 'thumbnail',
    children: '마감 D-4',
  },
};

export const GenreTag: Story = {
  args: {
    type: 'genre',
    children: '힙합',
  },
};

export const LevelTag: Story = {
  args: {
    type: 'level',
    children: '입문자',
  },
};
export const SearchTag: Story = {
  args: {
    type: 'search',
    size: 'large',
    children: 'K-POP',
  },
};

export const DeadlineTag: Story = {
  args: {
    type: 'deadline',
    children: '힙합',
  },
};
