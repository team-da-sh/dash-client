import type { ChangeEvent } from 'react';
import Description from '@/pages/instructor/classRegister/components/Description';
import { CLASS_AMOUNT_SUBTITLE } from '@/pages/instructor/classRegister/constants/registerSectionText';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

interface ClassAmountPropTypes {
  amount: string;
  handleAmountChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ClassAmount = ({ amount, handleAmountChange }: ClassAmountPropTypes) => {
  return (
    <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 20, width: '100%' })}>
      <Description title="수강료" subTitle={CLASS_AMOUNT_SUBTITLE} />
      <Input
        placeholder="0"
        value={amount}
        onChange={handleAmountChange}
        rightAddOn={<Text tag="b2_sb_long">원</Text>}
      />
    </div>
  );
};

export default ClassAmount;
