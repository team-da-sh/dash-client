import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as styles from '@/pages/class/components/ClassButtonWrapper/classButtonWrapper.css';
import type { LessonDetailResponseTypes } from '@/pages/class/types/api';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import IcHeartFilledGray07 from '@/shared/assets/svg/IcHeartFilledGray07';
import IcHeartOutlinedGray07 from '@/shared/assets/svg/IcHeartOutlinedGray07';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import { BUTTON_TEXT, DISABLED_STATUS } from '@/shared/constants';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const ClassButtonWrapper = ({ lessonData }: { lessonData: LessonDetailResponseTypes }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const navigate = useNavigate();

  const { status, bookStatus } = lessonData;
  let buttonText = '';
  let isDisabled = false;

  if (status === 'EXPIRED' || status === 'OVER_BOOKED') {
    buttonText = BUTTON_TEXT[status];
    isDisabled = DISABLED_STATUS[status];
  } else if (status === 'OPEN') {
    if (bookStatus) {
      buttonText = BUTTON_TEXT.OPEN.BOOKED;
      isDisabled = DISABLED_STATUS.OPEN.BOOKED;
    } else {
      buttonText = BUTTON_TEXT.OPEN.AVAILABLE;
      isDisabled = DISABLED_STATUS.OPEN.AVAILABLE;
    }
  }
  const toggleHeart = () => {
    setIsHeartFilled((prev) => !prev);
  };

  const { id } = useParams<{ id: string }>();

  const handleApplyClick = () => {
    if (!isDisabled && id) {
      const path = ROUTES_CONFIG.reservation.path(id); // id 사용
      navigate(path);
    }
  };

  return (
    <section className={`${sprinkles({ display: 'flex', height: 102, width: '100%' })} ${styles.buttonWrapperStyle}`}>
      <BoxButton variant="heart" isDisabled={false} onClick={toggleHeart}>
        {isHeartFilled ? <IcHeartFilledGray07 width={28} /> : <IcHeartOutlinedGray07 width={28} />}
      </BoxButton>

      <BoxButton variant="primary" isDisabled={isDisabled} onClick={handleApplyClick}>
        {buttonText}
      </BoxButton>
    </section>
  );
};

export default ClassButtonWrapper;
