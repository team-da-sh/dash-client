import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { buttonWrapperStyle } from '@/pages/class/ClassButtonWrapper/index.css';
import BoxButton from '@/components/BoxButton';
import Flex from '@/components/Flex';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { IcHeartOutlinedGray07, IcHeartFilledGray07 } from '@/assets/svg';
import { LESSON_DATA } from '@/mocks/mockLessonData';

type StatusType = 'APPLY' | 'COMPLETE' | 'CLOSED';

const FixedFooter = () => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const navigate = useNavigate();

  const { status } = LESSON_DATA as { status: StatusType };

  const buttonConfig: Record<StatusType, { text: string; isDisabled: boolean }> = {
    APPLY: { text: '신청하기', isDisabled: false },
    COMPLETE: { text: '신청 완료', isDisabled: true },
    CLOSED: { text: '클래스 마감', isDisabled: true },
  };

  const { text, isDisabled } = buttonConfig[status];

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

export default FixedFooter;
