'use client';

import { useRouter } from 'next/navigation';
import BoxButton from '@/common/components/BoxButton/BoxButton';

interface InfoEditButtonProps {
  id: string;
  startDateTime: string;
}

const InfoEditButton = ({ id, startDateTime }: InfoEditButtonProps) => {
  const router = useRouter();

  const handleEditClick = () => {
    if (id) {
      router.push(`/mypage/class-register/${id}/edit`);
    }
  };

  const isClassStarted = new Date() >= new Date(startDateTime);

  return (
    <BoxButton variant="primary" onClick={handleEditClick} disabled={isClassStarted}>
      수정하기
    </BoxButton>
  );
};

export default InfoEditButton;
