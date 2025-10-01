import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Dropdown from '@/common/components/Dropdown/Dropdown';

const meta = {
  title: 'Common/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

const options = ['전체(20)', '승인대기(10)', '승인완료(8)', '수강완료(6)'];

const DropdownWithHooks = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectedOption = (option: string) => {
    setSelectedOption(option);
  };
  return <Dropdown selectedOption={selectedOption} options={options} handleSelectedOption={handleSelectedOption} />;
};

export const Primary: Story = {
  args: {
    selectedOption: '전체(20)',
    options: ['전체(20)', '승인대기(10)', '승인완료(8)', '수강완료(6)'],
    handleSelectedOption: (option: string) => console.log(option),
  },
  render: () => (
    <div style={{ width: '37.5rem', height: '30rem' }}>
      <DropdownWithHooks />
    </div>
  ),
};
