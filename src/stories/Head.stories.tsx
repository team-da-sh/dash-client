import type { Meta, StoryObj } from '@storybook/react';
import Head from '@/shared/components/Head/Head';

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
      options: [
        'h1_sb',
        'h3_sb',
        'h5_sb',
        'h5_m',
        'h6_sb',
        'b1_sb_long',
        'b1_sb',
        'b2_sb_long',
        'b2_sb',
        'b2_m_long',
        'b2_m',
        'b2_r',
        'b3_sb_narrow',
        'b3_sb',
        'b3_m_narrow',
        'b3_m',
        'b3_r',
      ],
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    level: 'h3',
    tag: 'h1_sb',
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
        <Head level="h2" tag="h1_sb">
          DASH 웨비들 행복 앱잼해~
        </Head>
      </li>
      <li>
        <Head level="h2" tag="h3_sb">
          DASH 웨비들 행복 앱잼해~
        </Head>
      </li>
      <li>
        <Head level="h2" tag="h5_sb">
          DASH 웨비들 행복 앱잼해~
        </Head>
      </li>
      <li>
        <Head level="h2" tag="h5_m">
          DASH 웨비들 행복 앱잼해~
        </Head>
      </li>
      <li>
        <Head level="h2" tag="h6_sb">
          DASH 웨비들 행복 앱잼해~
        </Head>
      </li>
    </ul>
  ),
};
