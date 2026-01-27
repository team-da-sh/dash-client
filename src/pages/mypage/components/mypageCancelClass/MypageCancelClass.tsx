import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import DepositeButton from '@/pages/mypage/components/mypageCancelClass/DepositeButton/DepositeButton';
import AccountInputSection from '@/pages/mypage/components/mypageCancelClass/components/AccountInputSection/AccountInputSection';
import {
  layoutStyle,
  containerStyle,
  scrollAreaStyle,
  titleWrapperStyle,
  reservationListWrapperStyle,
  depositButtonWrapperStyle,
  buttonStyle,
} from '@/pages/mypage/components/mypageCancelClass/mypageCancelClass.css';
import ReservationList from '@/pages/mypage/components/mypageReservation/components/ReservationList';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import BlurButton from '@/common/components/BlurButton/BlurButton';
import BoxButton from '@/common/components/BoxButton/BoxButton';
import Head from '@/common/components/Head/Head';
import { useGetBankList } from '@/shared/apis/queries';
import BankBottomSheet from '@/shared/components/BankBottomSheet/BankBottomSheet';

const MypageCancelClass = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [selectedStatus, setSelectedStatus] = useState<'before' | 'after' | null>(null);
  const [isBankSheetOpen, setIsBankSheetOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState<{
    bankId: number;
    bankName: string;
    bankImageUrl: string;
  }>({ bankId: 0, bankName: '', bankImageUrl: '' });

  const { register, watch } = useForm({
    defaultValues: {
      accountNumber: '',
    },
  });

  const { data: bankList } = useGetBankList();
  const reservationId = id ? Number(id) : 0;
  const accountNumber = watch('accountNumber');

  const handleDepositStatusChange = (status: 'before' | 'after') => {
    setSelectedStatus((prev) => (prev === status ? null : status));
  };

  const handleBankSheetClose = () => {
    setIsBankSheetOpen(false);
  };

  const handleBankSelect = (selectedBankId: number, selectedBankName: string, imageUrl: string) => {
    setSelectedBank({
      bankId: selectedBankId,
      bankName: selectedBankName,
      bankImageUrl: imageUrl,
    });
  };

  const handleNext = () => {
    if (selectedStatus) {
      const state = {
        depositStatus: selectedStatus,
        bankInfo: selectedBank,
        accountNumber: accountNumber,
      };
      navigate(ROUTES_CONFIG.mypageCancelConfirm.path(id!), { state });
    }
  };

  const isButtonActive = () => {
    if (selectedStatus === null) return false;

    if (selectedStatus === 'before') return true;

    if (selectedStatus === 'after') {
      const isBankSelected = selectedBank.bankId > 0 && selectedBank.bankName !== '';
      const isAccountNumberValid = Boolean(accountNumber && accountNumber.trim().length > 0);
      return isBankSelected && isAccountNumberValid;
    }

    return false;
  };

  return (
    <div className={layoutStyle}>
      <div className={containerStyle}>
        <div className={scrollAreaStyle}>
          <div>
            <div className={titleWrapperStyle}>
              <Head tag="h6_sb" color="black">
                클래스 취소하기
              </Head>
            </div>

            <div className={reservationListWrapperStyle}>
              <ReservationList status="ALL" targetReservationId={reservationId} showActions={false} />
            </div>

            <div className={depositButtonWrapperStyle}>
              <DepositeButton
                text="입금 전"
                isSelected={selectedStatus === 'before'}
                onClick={() => handleDepositStatusChange('before')}
              />
              <DepositeButton
                text="입금 후"
                isSelected={selectedStatus === 'after'}
                onClick={() => handleDepositStatusChange('after')}
              />
            </div>

            <AccountInputSection
              isVisible={selectedStatus === 'after'}
              selectedBank={selectedBank}
              onBankSelectClick={() => setIsBankSheetOpen(true)}
              register={register}
            />
          </div>

          <BlurButton>
            <BoxButton variant="primary" onClick={handleNext} disabled={!isButtonActive()} className={buttonStyle}>
              다음
            </BoxButton>
          </BlurButton>
        </div>
      </div>

      {bankList && (
        <BankBottomSheet
          isOpen={isBankSheetOpen}
          onClose={handleBankSheetClose}
          banks={bankList}
          handleBankSelect={handleBankSelect}
        />
      )}
    </div>
  );
};

export default MypageCancelClass;
