import BoxButton from '@/components/BoxButton';
import Flex from "@/components/Flex";

const BottomButton = () => {
  return (
    <Flex width="100% " className="bottomButtonStyle">
      <BoxButton variant="primary" isDisabled={true}>
        신청하기
      </BoxButton>
    </Flex>
  );
};

export default BottomButton;
