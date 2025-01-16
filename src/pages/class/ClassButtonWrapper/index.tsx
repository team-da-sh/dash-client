import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BoxButton from '@/components/BoxButton';
import Flex from '@/components/Flex';
import { buttonWrapperStyle } from './index.css';
import { IcHeartOutlinedGray07, IcHeartFilledGray07 } from '@/assets/svg';
import { ROUTES_CONFIG } from "@/routes/routesConfig";

const FixedFooter = () => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const navigate = useNavigate();

  const toggleHeart = () => {
    setIsHeartFilled((prev) => !prev);
  };

  const handleApplyClick = () => {
    navigate(ROUTES_CONFIG.reservation.path);
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

      <BoxButton variant="primary" isDisabled={false} onClick={handleApplyClick}>
        신청하기
      </BoxButton>
    </Flex>
  );
};

export default FixedFooter;
