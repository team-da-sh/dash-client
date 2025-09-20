import { useNavigate, useParams } from 'react-router-dom';
import { useClassButtonState } from '@/pages/class/hooks/useClassButtonState';
import { useHeartToggle } from '@/pages/class/hooks/useHeartToggle';
import type { LessonDetailResponseTypes } from '@/pages/class/types/api';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import IcHeartFilledGray07 from '@/shared/assets/svg/IcHeartFilledGray07';
import IcHeartOutlinedGray07 from '@/shared/assets/svg/IcHeartOutlinedGray07';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import BlurButton from '@/shared/components/BlurButton/BlurButton';
import { flexGapStyle } from '@/pages/class/components/ClassButtonWrapper/classButtonWrapper.css';

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
    <BlurButton blurColor='white' className={flexGapStyle}>
      <BoxButton variant="heart" onClick={toggleHeart}>
        {isHeartFilled ? <IcHeartFilledGray07 width={28} /> : <IcHeartOutlinedGray07 width={28} />}
      </BoxButton>

      <BoxButton
        variant="primary"
        isDisabled={isDisabled}
        onClick={handleApplyClick}
      >
        {buttonText}
      </BoxButton>
    </BlurButton>
  );
};

export default ClassButtonWrapper;
