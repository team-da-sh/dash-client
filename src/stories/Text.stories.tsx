import type { Meta, StoryObj } from '@storybook/react';
import Text from '@/components/Text';

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
      options: ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10', 'c1', 'c2', 'c3', 'c4'],
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
        <Text tag="b1" color="main1">
          DASH 웨비들 행복 앱잼해~
        </Text>
      </li>
      <li>
        <Text tag="b2" color="main2">
          DASH 웨비들 행복 앱잼해~
        </Text>
      </li>
      <li>
        <Text tag="b3" color="main3">
          DASH 웨비들 행복 앱잼해~
        </Text>
      </li>
      <li>
        <Text tag="b4" color="main4">
          DASH 웨비들 행복 앱잼해~
        </Text>
      </li>
      <li>
        <Text tag="b5" color="main5">
          DASH 웨비들 행복 앱잼해~
        </Text>
      </li>
      <li>
        <Text tag="b6" color="main6">
          DASH 웨비들 행복 앱잼해~
        </Text>
      </li>
      <li>
        <Text tag="b7" color="sub1">
          DASH 웨비들 행복 앱잼해~
        </Text>
      </li>
      <li>
        <Text tag="b8" color="alert1">
          DASH 웨비들 행복 앱잼해~
        </Text>
      </li>
      <li>
        <Text tag="b9" color="black">
          DASH 웨비들 행복 앱잼해~
        </Text>
      </li>
      <li>
        <Text tag="b10" color="white">
          DASH 웨비들 행복 앱잼해~
        </Text>
      </li>
    </ul>
  ),
};
