import BoxButton from '@/components/BoxButton';
import Flex from '@/components/Flex';
import { bottomButtonStyle } from './index.css';

type BottomButtonProps = {
  isEnabled: boolean;
  onClick: () => void;
};
const BottomButton = ({ isEnabled, onClick }: BottomButtonProps) => {
  return (
    <Flex width="100% " className={bottomButtonStyle}>
      <BoxButton variant="primary" isDisabled={!isEnabled} onClick={isEnabled ? onClick : undefined}>
        {' '}
        신청하기
      </BoxButton>
    </Flex>
  );
};

export default BottomButton;
