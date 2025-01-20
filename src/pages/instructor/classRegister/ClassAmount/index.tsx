import { ChangeEvent } from 'react';
import Flex from '@/components/Flex';
import Input from '@/components/Input';
import Text from '@/components/Text';
import Description from '../Description';
import { amountContainerStyle, amountTextStyle } from './index.css';

interface ClassAmountProps {
  amount: string;
  handleAmountChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ClassAmount = ({ amount, handleAmountChange }: ClassAmountProps) => {
  return (
    <Flex tag="section" direction="column" gap="2rem" width="100%" marginBottom="4rem">
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
