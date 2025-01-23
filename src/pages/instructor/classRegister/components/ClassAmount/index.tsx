import { ChangeEvent } from 'react';
import {
  amountContainerStyle,
  amountTextStyle,
} from '@/pages/instructor/classRegister/components/ClassAmount/index.css';
import Description from '@/pages/instructor/classRegister/components/Description';
import Flex from '@/components/Flex';
import Input from '@/components/Input';
import Text from '@/components/Text';

interface ClassAmountProps {
  amount: string;
  handleAmountChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ClassAmount = ({ amount, handleAmountChange }: ClassAmountProps) => {
  return (
    <Flex tag="section" direction="column" gap="2rem" width="100%">
      <Description title="수강료" subTitle="전체 회차를 포함한 최종 금액을 알려주세요" />
      <div className={amountContainerStyle}>
        <Input placeholder="0" value={amount} onChange={handleAmountChange} />
        <Text tag="b5" className={amountTextStyle}>
          원
        </Text>
      </div>
    </Flex>
  );
};

export default ClassAmount;
