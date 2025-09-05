import type { Meta, StoryObj } from '@storybook/react';
import type { ReactElement } from 'react';
import Modal from '@/common/components/Modal/Modal';
import { useModalStore } from '@/common/stores/modal';
import BoxButton from '@/shared/components/BoxButton/BoxButton';

const meta = {
  title: 'Common/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    content: {
      control: {
        type: 'text',
      },
      description: '모달의 설명을 적어주세요.',
    },
    type: {
      control: {
        type: 'radio',
      },
      options: ['default', 'single'],
      description: '모달의 유형을 선택해주세요.',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

const ModalWithHooks = ({ type, content }: { type: 'default' | 'single'; content: string | ReactElement }) => {
  const { openModal } = useModalStore();

  const handleModalOpen = () => {
    openModal(({ close }) => <Modal content={content} type={type} onClose={close} onClickHandler={() => {}} />);
  };
  return (
    <BoxButton variant="primary" onClick={handleModalOpen} style={{ width: '10rem' }}>
      모달 오픈
    </BoxButton>
  );
};

export const Primary: Story = {
  args: {
    type: 'default',
    content: '취소하겠습니다.',
    onClose: () => {},
  },
  render: (args) => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '37.5rem', height: '50rem' }}>
      <ModalWithHooks {...args} />
    </div>
  ),
};
