import type { Meta, StoryObj } from '@storybook/react';
import { IcPlus1, IcPlusGray } from '@/assets/svg';
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
      options: ['small', 'medium', 'large', 'thumbnail', 'mypage'],
    },
    type: {
      control: { type: 'radio' },
      options: ['genre', 'level', 'search', 'deadline', 'authority', 'authDisabled'],
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

export const AuthorityTag: Story = {
  args: {
    size: 'mypage',
    type: 'authority',
    children: (
      <>
        <IcPlus1 width={24} name="check-circle" />
        클래스 신청 가능
      </>
    ),
  },
};

export const AuthDisabledTag: Story = {
  args: {
    size: 'mypage',
    type: 'authDisabled',
    children: (
      <>
        <IcPlusGray width={24} name="check-circle" />
        클래스 개설 불가
      </>
    ),
  },
};
