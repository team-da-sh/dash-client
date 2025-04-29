import type { Meta, StoryObj } from '@storybook/react';
import Text from '@/shared/components/Text/Text';

const meta = {
  title: 'Common/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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
        'c1_sb',
        'c1_m',
        'c1_r_narrow',
        'c1_r',
      ],
    },
    color: {
      control: { type: 'select' },
      options: [
        'main1',
        'main2',
        'main3',
        'main4',
        'main5',
        'main6',
        'sub1',
        'sub2',
        'sub3',
        'sub4',
        'sub5',
        'sub6',
        'sub7',
        'alert1',
        'alert2',
        'alert3',
        'kakao1',
        'kakao2',
        'black70',
        'white50',
        'white',
        'gray1',
        'gray2',
        'gray3',
        'gray4',
        'gray5',
        'gray6',
        'gray7',
        'gray8',
        'gray9',
        'gray10',
        'gray11',
        'black',
      ],
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    children: '텍스트',
    color: 'black', // 기본 색상
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <li>
        <Text tag="h1_sb" color="main1">
          DASH 웨비들 행복 앱잼해~
        </Text>
      </li>
      <li>
        <Text tag="h3_sb" color="main2">
          DASH 웨비들 행복 앱잼해~
        </Text>
      </li>
      <li>
        <Text tag="h5_sb" color="main3">
          DASH 웨비들 행복 앱잼해~
        </Text>
      </li>
      <li>
        <Text tag="h5_m" color="main4">
          DASH 웨비들 행복 앱잼해~
        </Text>
      </li>
      <li>
        <Text tag="h6_sb" color="main5">
          DASH 웨비들 행복 앱잼해~
        </Text>
      </li>
      <li>
        <Text tag="b1_sb_long" color="main6">
          DASH 웨비들 행복 앱잼해~
        </Text>
      </li>
      <li>
        <Text tag="b1_sb" color="sub1">
          DASH 웨비들 행복 앱잼해~
        </Text>
      </li>
      <li>
        <Text tag="b2_sb_long" color="alert1">
          DASH 웨비들 행복 앱잼해~
        </Text>
      </li>
      <li>
        <Text tag="b2_sb" color="black">
          DASH 웨비들 행복 앱잼해~
        </Text>
      </li>
      <li>
        <Text tag="b2_m_long" color="white">
          DASH 웨비들 행복 앱잼해~
        </Text>
      </li>
    </ul>
  ),
};
