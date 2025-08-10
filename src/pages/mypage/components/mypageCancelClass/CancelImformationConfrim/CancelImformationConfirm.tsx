import BoxButton from '@/shared/components/BoxButton/BoxButton';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import MyPageReservationDetail from '../../mypageReservationDetail/MypageReservationDetail';

const CancelImformationConfirm = () => {
  const handleConfirm = () => {
    window.location.href = '/mypage';
  };

  return (
    <div
      className={sprinkles({
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
      })}>
      <MyPageReservationDetail />

      <BoxButton variant="primary" onClick={handleConfirm}>
        취소하기
      </BoxButton>
    </div>
  );
};

export default CancelImformationConfirm;
