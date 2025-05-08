import { useNavigate, useParams } from 'react-router-dom';
import * as styles from '@/pages/class/components/ClassButtonWrapper/classButtonWrapper.css';
import { useClassButtonState } from '@/pages/class/hooks/useClassButtonState';
import { useHeartToggle } from '@/pages/class/hooks/useHeartToggle';
import type { LessonDetailResponseTypes } from '@/pages/class/types/api';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import IcHeartFilledGray07 from '@/shared/assets/svg/IcHeartFilledGray07';
import IcHeartOutlinedGray07 from '@/shared/assets/svg/IcHeartOutlinedGray07';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const ClassButtonWrapper = ({ lessonData }: { lessonData: LessonDetailResponseTypes }) => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { isHeartFilled, toggleHeart } = useHeartToggle();
  const { buttonText, isDisabled } = useClassButtonState(lessonData.status, lessonData.bookStatus);

  const handleApplyClick = () => {
    if (!isDisabled && id) {
      const path = ROUTES_CONFIG.reservation.path(id);
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
