import type { Meta, StoryObj } from '@storybook/react';
import Head from '@/components/Head';

const meta = {
  title: 'Common/Head',
  component: Head,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: { type: 'radio' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    tag: {
      control: { type: 'radio' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7'],
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    level: 'h3',
    tag: 'h3',
    children: '텍스트',
  },
} satisfies Meta<typeof Head>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <li>
        <Head level="h2" tag="h1">
          DASH 웨비들 행복 앱잼해~
        </Head>
      </li>
      <li>
        <Head level="h2" tag="h2">
          DASH 웨비들 행복 앱잼해~
        </Head>
      </li>
      <li>
        <Head level="h2" tag="h3">
          DASH 웨비들 행복 앱잼해~
        </Head>
      </li>
      <li>
        <Head level="h2" tag="h4">
          DASH 웨비들 행복 앱잼해~
        </Head>
      </li>
      <li>
        <Head level="h2" tag="h5">
          DASH 웨비들 행복 앱잼해~
        </Head>
      </li>
      <li>
        <Head level="h2" tag="h6">
          DASH 웨비들 행복 앱잼해~
        </Head>
      </li>
      <li>
        <Head level="h2" tag="h7">
          DASH 웨비들 행복 앱잼해~
        </Head>
      </li>
    </ul>
  ),
};
