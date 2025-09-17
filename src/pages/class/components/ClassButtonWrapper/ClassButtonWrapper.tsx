import { useNavigate, useParams } from 'react-router-dom';
import { useClassButtonState } from '@/pages/class/hooks/useClassButtonState';
import { useHeartToggle } from '@/pages/class/hooks/useHeartToggle';
import type { LessonDetailResponseTypes } from '@/pages/class/types/api';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import IcHeartFilledGray07 from '@/shared/assets/svg/IcHeartFilledGray07';
import IcHeartOutlinedGray07 from '@/shared/assets/svg/IcHeartOutlinedGray07';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import ButtonBlur from '@/shared/components/BlurButton/BlurButton';

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
    <ButtonBlur blurColor='white'>
      <BoxButton variant="heart" onClick={toggleHeart}>
        {isHeartFilled ? <IcHeartFilledGray07 width={28} /> : <IcHeartOutlinedGray07 width={28} />}
      </BoxButton>

      <BoxButton
        variant="primary"
        isDisabled={isDisabled}
        onClick={handleApplyClick}
        className="flex-1"
      >
        {buttonText}
      </BoxButton>
    </ButtonBlur>
  );
};

export default ClassButtonWrapper;
