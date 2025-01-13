import type { Meta, StoryObj } from '@storybook/react';
import Tag from '../components/Tag/index';

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
      options: ['small', 'medium', 'thumbnail'],
    },
    type: {
      control: { type: 'radio' },
      options: ['genre', 'level', 'deadline'],
    },
  },
  args: {
    type: 'genre',
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
    children: 'Small Tag',
  },
};

export const MediumTag: Story = {
  args: {
    size: 'medium',
    children: 'Medium Tag',
  },
};

export const ThumbnailTag: Story = {
  args: {
    type: 'deadline',
    size: 'thumbnail',
    children: 'Thumbnail Tag',
  },
};

export const GenreTag: Story = {
  args: {
    type: 'genre',
    children: 'Genre Tag',
  },
};

export const LevelTag: Story = {
  args: {
    type: 'level',
    children: 'Level Tag',
  },
};

export const DeadlineTag: Story = {
  args: {
    type: 'deadline',
    children: 'Deadline Tag',
  },
};
