import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { buttonWrapperStyle } from '@/pages/class/ClassButtonWrapper/index.css';
import BoxButton from '@/components/BoxButton';
import Flex from '@/components/Flex';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { IcHeartOutlinedGray07, IcHeartFilledGray07 } from '@/assets/svg';
import { LESSON_DATA } from '@/mocks/mockLessonData';
import { BUTTON_CONFIG, StatusType } from '@/constants/index.tsx';

const ClassButtonWrapper = () => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const navigate = useNavigate();

  const { status } = LESSON_DATA as { status: StatusType };

  const { text, isDisabled } = BUTTON_CONFIG[status];  // 상수 파일에서 가져오기

  const toggleHeart = () => {
    setIsHeartFilled((prev) => !prev);
  };

  const handleApplyClick = () => {
    if (!isDisabled) {
      navigate(ROUTES_CONFIG.reservation.path);
    }
  };

  return (
    <Flex height="10.2rem" width="100%" className={buttonWrapperStyle}>
      <BoxButton variant="heart" isDisabled={false} onClick={toggleHeart}>
        {isHeartFilled ? <IcHeartFilledGray07 width={28} /> : <IcHeartOutlinedGray07 width={28} />}
      </BoxButton>

      <BoxButton variant="primary" isDisabled={isDisabled} onClick={handleApplyClick}>
        {text}
      </BoxButton>
    </Flex>
  );
};

export default ClassButtonWrapper;
