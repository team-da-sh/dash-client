import type { Meta, StoryObj } from '@storybook/react';
import ReservationProgress from '@/pages/mypage/components/mypageReservationDetail/components/ReservationProgress/ReservationProgress';

const meta = {
  title: 'Common/ReservationProgress',
  component: ReservationProgress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    reservationStatus: {
      control: 'radio',
      options: ['PENDING_APPROVAL', 'APPROVED', 'PENDING_CANCELLATION', 'CANCELLED', 'IN_PROGRESS', 'COMPLETED'],
    },
  },
  args: {
    reservationStatus: 'PENDING_APPROVAL',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '375px', border: '1px solid #eee', padding: '1rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ReservationProgress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
