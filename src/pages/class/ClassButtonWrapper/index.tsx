import { useState } from 'react';
import BoxButton from '@/components/BoxButton';
import Flex from '@/components/Flex';
import { buttonWrapperStyle } from './index.css';
import { IcHeartOutlinedGray07, IcHeartFilledGray07 } from '@/assets/svg';

const FixedFooter = () => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const toggleHeart = () => {
    setIsHeartFilled((prev) => !prev);
  };

  return (
    <Flex height="10.2rem" width="100%" className={buttonWrapperStyle}>
      <BoxButton variant="heart" isDisabled={false} onClick={toggleHeart}>
        {isHeartFilled ? (
          <IcHeartFilledGray07 width={28} />
        ) : (
          <IcHeartOutlinedGray07 width={28} />
        )}
      </BoxButton>

      <BoxButton variant="primary" isDisabled={false}>
        신청하기
      </BoxButton>
    </Flex>
  );
};

export default FixedFooter;
