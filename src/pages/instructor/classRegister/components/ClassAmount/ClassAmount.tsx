import type { ChangeEvent } from 'react';
import Description from '@/pages/instructor/classRegister/components/Description';
import Flex from '@/shared/components/Flex/Flex';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';

interface ClassAmountProps {
  amount: string;
  handleAmountChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ClassAmount = ({ amount, handleAmountChange }: ClassAmountProps) => {
  return (
    <Flex tag="section" direction="column" gap="2rem" width="100%">
      <Description title="수강료" subTitle="전체 회차를 포함한 최종 금액을 알려주세요" />
      <Input
        placeholder="0"
        value={amount}
        onChange={handleAmountChange}
        rightAddOn={<Text tag="b2_sb_long">원</Text>}
      />
    </Flex>
  );
};

export default ClassAmount;
