'use client';

import { useParams, useRouter } from 'next/navigation';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { flexGapStyle } from '@/app/class/[id]/components/ClassButtonWrapper/classButtonWrapper.css';
import { useClassButtonState } from '@/app/class/[id]/hooks/useClassButtonState';
import { useHeartToggle } from '@/app/class/[id]/hooks/useHeartToggle';
import type { LessonDetailResponseTypes } from '@/app/class/[id]/types/api';
import BlurButton from '@/common/components/BlurButton/BlurButton';
import BoxButton from '@/common/components/BoxButton/BoxButton';
import IcHeartFilledGray07 from '@/shared/assets/svg/IcHeartFilledGray07';
import IcHeartOutlinedGray07 from '@/shared/assets/svg/IcHeartOutlinedGray07';
import { WITHDRAW_USER_NAME } from '@/shared/constants/withdrawUser';

const ClassButtonWrapper = ({ lessonData }: { lessonData: LessonDetailResponseTypes }) => {
  const router = useRouter();
  const params = useParams() ?? {};
  const id = (params as { id?: string }).id;
  const isMyLesson = lessonData.isMyLesson;

  const { isHeartFilled, toggleHeart } = useHeartToggle();
  const isDeletedTeacher = lessonData.teacherNickname === WITHDRAW_USER_NAME && lessonData.imageUrl === null;

  const { buttonText, isDisabled } = useClassButtonState(lessonData.status, lessonData.bookStatus);

  const finalButtonText = isDeletedTeacher ? '신청불가' : buttonText;
  const finalIsDisabled = isDeletedTeacher || isDisabled || isMyLesson;

  const handleApplyClick = () => {
    if (!isDisabled && id) {
      const path = ROUTES_CONFIG.reservation.path(id);
      router.push(path);
    }
  };

  return (
    <BlurButton blurColor="white" className={flexGapStyle}>
      <BoxButton variant="heart" onClick={toggleHeart}>
        {isHeartFilled ? <IcHeartFilledGray07 width={28} /> : <IcHeartOutlinedGray07 width={28} />}
      </BoxButton>

      <BoxButton variant="primary" isDisabled={finalIsDisabled} onClick={handleApplyClick}>
        {finalButtonText}
      </BoxButton>
    </BlurButton>
  );
};

export default ClassButtonWrapper;
