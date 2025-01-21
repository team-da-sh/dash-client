import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { buttonWrapperStyle } from '@/pages/class/components/ClassButtonWrapper/index.css';
import BoxButton from '@/components/BoxButton';
import Flex from '@/components/Flex';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { BUTTON_CONFIG } from '@/constants/index.tsx';
import { IcHeartOutlinedGray07, IcHeartFilledGray07 } from '@/assets/svg';
import { LessonDetail } from "@/apis/class/axios";

const ClassButtonWrapper = ({ lessonData }: { lessonData: LessonDetail }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const navigate = useNavigate();

  const { status, bookStatus } = lessonData;
  let buttonText = '';
  let isDisabled = false;

  if (status === 'EXPIRED' || status === 'OVER_BOOKED') {
    buttonText = BUTTON_CONFIG[status].text;
    isDisabled = true;
  } else if (status === 'OPEN') {
    if (bookStatus) {
      buttonText = '신청 완료';
      isDisabled = true;
    } else {
      buttonText = '신청하기';
      isDisabled = false;
    }
  }

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
        {buttonText}
      </BoxButton>
    </Flex>
  );
};

export default ClassButtonWrapper;
