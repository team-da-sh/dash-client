import type { Meta, StoryObj } from '@storybook/react';
import Text from '../components/Text';

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
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    children: '텍스트',
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <li>
        <Text tag="b1">DASH 웨비들 행복 앱잼해~</Text>
      </li>
      <li>
        <Text tag="b2"> DASH 웨비들 행복 앱잼해~</Text>
      </li>
      <li>
        <Text tag="b3"> DASH 웨비들 행복 앱잼해~</Text>
      </li>
      <li>
        <Text tag="b4"> DASH 웨비들 행복 앱잼해~</Text>
      </li>
      <li>
        <Text tag="b5"> DASH 웨비들 행복 앱잼해~</Text>
      </li>
      <li>
        <Text tag="b6"> DASH 웨비들 행복 앱잼해~</Text>
      </li>
      <li>
        <Text tag="b7"> DASH 웨비들 행복 앱잼해~</Text>
      </li>
      <li>
        <Text tag="b8"> DASH 웨비들 행복 앱잼해~</Text>
      </li>
      <li>
        <Text tag="b9"> DASH 웨비들 행복 앱잼해~</Text>
      </li>
      <li>
        <Text tag="b10"> DASH 웨비들 행복 앱잼해~</Text>
      </li>
      <li>
        <Text tag="c1"> DASH 웨비들 행복 앱잼해~</Text>
      </li>
      <li>
        <Text tag="c2"> DASH 웨비들 행복 앱잼해~</Text>
      </li>
      <li>
        <Text tag="c3"> DASH 웨비들 행복 앱잼해~</Text>
      </li>
      <li>
        <Text tag="c4"> DASH 웨비들 행복 앱잼해~</Text>
      </li>
    </ul>
  ),
};
