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
      options: [
        'body01_reg',
        'body01_med',
        'body01_med_long',
        'body01_smbold',
        'body01_smbold_long',
        'body02_reg',
        'body02_med',
        'body02_med_narrow',
        'body02_smbold',
        'body02_smbold_narrow',
        'caption01_reg',
        'caption01_reg_narr',
        'caption01_med',
        'caption01_smbold',
      ],
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
        <Text tag="body01_reg">DASH 웨비들 행복 앱잼해~</Text>
      </li>
      <li>
        <Text tag="body01_med"> DASH 웨비들 행복 앱잼해~</Text>
      </li>
      <li>
        <Text tag="body01_med_long"> DASH 웨비들 행복 앱잼해~</Text>
      </li>
      <li>
        <Text tag="body01_smbold"> DASH 웨비들 행복 앱잼해~</Text>
      </li>
      <li>
        <Text tag="body01_smbold_long"> DASH 웨비들 행복 앱잼해~</Text>
      </li>
      <li>
        <Text tag="body02_reg"> DASH 웨비들 행복 앱잼해~</Text>
      </li>
      <li>
        <Text tag="body02_med"> DASH 웨비들 행복 앱잼해~</Text>
      </li>
      <li>
        <Text tag="body02_med_narrow"> DASH 웨비들 행복 앱잼해~</Text>
      </li>
      <li>
        <Text tag="body02_smbold"> DASH 웨비들 행복 앱잼해~</Text>
      </li>
      <li>
        <Text tag="body02_smbold_narrow"> DASH 웨비들 행복 앱잼해~</Text>
      </li>
      <li>
        <Text tag="caption01_reg"> DASH 웨비들 행복 앱잼해~</Text>
      </li>
      <li>
        <Text tag="caption01_reg_narr"> DASH 웨비들 행복 앱잼해~</Text>
      </li>
      <li>
        <Text tag="caption01_med"> DASH 웨비들 행복 앱잼해~</Text>
      </li>
      <li>
        <Text tag="caption01_smbold"> DASH 웨비들 행복 앱잼해~</Text>
      </li>
    </ul>
  ),
};
