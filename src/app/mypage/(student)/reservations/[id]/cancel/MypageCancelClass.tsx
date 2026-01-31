'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import AccountInputSection from '@/app/mypage/(student)/reservations/[id]/cancel/components/AccountInputSection/AccountInputSection';
import DepositeButton from '@/app/mypage/(student)/reservations/[id]/cancel/components/DepositeButton/DepositeButton';
import {
  layoutStyle,
  containerStyle,
  scrollAreaStyle,
  titleWrapperStyle,
  reservationListWrapperStyle,
  depositButtonWrapperStyle,
  buttonStyle,
} from '@/app/mypage/(student)/reservations/[id]/cancel/mypageCancelClass.css';
import ReservationList from '@/app/mypage/(student)/reservations/components/ReservationList';
import BlurButton from '@/common/components/BlurButton/BlurButton';
import BoxButton from '@/common/components/BoxButton/BoxButton';
import Head from '@/common/components/Head/Head';
import { useGetBankList } from '@/shared/apis/queries';
import BankBottomSheet from '@/shared/components/BankBottomSheet/BankBottomSheet';
import { MYPAGE_CANCEL_CONFIRM_STATE_KEY } from '@/shared/constants/api';

const MypageCancelClass = () => {
  const router = useRouter();
  const params = useParams() ?? {};
  const id = (params as { id?: string }).id;
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
    if (selectedStatus && id) {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(
          MYPAGE_CANCEL_CONFIRM_STATE_KEY,
          JSON.stringify({
            depositStatus: selectedStatus,
            bankInfo: selectedBank,
            accountNumber: accountNumber,
          })
        );
      }
      router.push(ROUTES_CONFIG.mypageCancelConfirm.path(id));
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
