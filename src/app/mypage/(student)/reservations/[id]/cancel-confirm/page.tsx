'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useGetReservationsDetail } from '@/app/mypage/(student)/reservations/[id]/apis/queries';
import { useCancelReservation } from '@/app/mypage/(student)/reservations/[id]/cancel-confirm/apis/query/useCancelReservation';
import {
  CANCEL_CONFIRM_DESCRIPTION,
  CANCEL_CONFIRM_MESSAGE,
} from '@/app/mypage/(student)/reservations/[id]/cancel-confirm/constants/modalMessage';
import {
  layoutStyle,
  containerStyle,
  dividerStyle,
  mainWrapperStyle,
  contentWrapperStyle,
  titleWrapperStyle,
  titleContentStyle,
  sectionWrapperStyle,
  classInfoSectionStyle,
  classInfoWrapper,
  buttonStyle,
} from '@/app/mypage/(student)/reservations/[id]/cancel-confirm/index.css';
import ApplicantInfo from '@/app/mypage/(student)/reservations/[id]/components/ApplicantInfo/ApplicantInfo';
import ClassInfo from '@/app/mypage/(student)/reservations/[id]/components/ClassInfo/ClassInfo';
import { useGetMyPage } from '@/app/mypage/apis/queries';
import BlurBotton from '@/common/components/BlurButton/BlurButton';
import BoxButton from '@/common/components/BoxButton/BoxButton';
import Head from '@/common/components/Head/Head';
import Modal from '@/common/components/Modal/Modal';
import { useOpenModal } from '@/common/stores/modal';
import { useGetBankList } from '@/shared/apis/queries';
import BankBottomSheet from '@/shared/components/BankBottomSheet/BankBottomSheet';
import { MYPAGE_CANCEL_CONFIRM_STATE_KEY } from '@/shared/constants/api';
import RefundAccountSection from './components/RefundAccountSection/RefundAccountSection';
import RefundPolicySection from './components/RefundPolicySection/RefundPolicySection';

interface NavigationState {
  depositStatus: 'before' | 'after';
  bankInfo: {
    bankId: number;
    bankName: string;
    bankImageUrl: string;
  };
  accountNumber: string;
}

function getCancelConfirmState(): NavigationState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(MYPAGE_CANCEL_CONFIRM_STATE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    sessionStorage.removeItem(MYPAGE_CANCEL_CONFIRM_STATE_KEY);
    return parsed;
  } catch {
    return null;
  }
}

const CancelConfirmPage = () => {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const reservationId = Number(id);

  const [navigationState] = useState<NavigationState | null>(() => getCancelConfirmState());

  const { data: reservationData } = useGetReservationsDetail(reservationId);
  const { data: myPageData } = useGetMyPage();
  const { data: bankList } = useGetBankList();

  const openModal = useOpenModal();
  const { mutate: cancelReservation, isPending } = useCancelReservation();
  const depositStatus = navigationState?.depositStatus || 'before';
  const isAfterDeposit = depositStatus === 'after';

  const [isBankSheetOpen, setIsBankSheetOpen] = useState(false);
  type FormValues = {
    accountNumber: string;
    bank: { bankId: number; bankName: string; bankImageUrl: string };
  };
  const [isPolicyAgreed, setIsPolicyAgreed] = useState(false);

  const { register, watch, setValue } = useForm<FormValues>({
    defaultValues: {
      accountNumber: navigationState?.accountNumber || '',
      bank: {
        bankId: navigationState?.bankInfo.bankId || 0,
        bankName: navigationState?.bankInfo.bankName || '',
        bankImageUrl: navigationState?.bankInfo.bankImageUrl || '',
      },
    },
  });

  const accountNumber = watch('accountNumber');
  const selectedBank = watch('bank');

  const handleBankSheetClose = () => {
    setIsBankSheetOpen(false);
  };

  const handleBankSelect = (selectedBankId: number, selectedBankName: string, imageUrl: string) => {
    setValue(
      'bank',
      { bankId: selectedBankId, bankName: selectedBankName, bankImageUrl: imageUrl },
      {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: false,
      }
    );
  };

  const handlePolicyAgreementChange = (isAgreed: boolean) => {
    setIsPolicyAgreed(isAgreed);
  };

  const isButtonActive = () => {
    if (isAfterDeposit) {
      const isBankSelected = selectedBank?.bankId > 0 && selectedBank?.bankName !== '';
      const isAccountNumberValid = Boolean(accountNumber && accountNumber.trim().length > 0);
      return isBankSelected && isAccountNumberValid && isPolicyAgreed;
    }
    return true;
  };

  const handleConfirm = () => {
    openModal(({ close }) => (
      <Modal
        content={CANCEL_CONFIRM_MESSAGE}
        description={CANCEL_CONFIRM_DESCRIPTION}
        type="single"
        onClose={close}
        onClickHandler={() => {
          cancelReservation({
            reservationId,
            requestData: {
              deposited: isAfterDeposit,
              bankId: isAfterDeposit ? selectedBank?.bankId : undefined,
              bankName: isAfterDeposit ? selectedBank?.bankName : undefined,
              accountNumber: isAfterDeposit ? accountNumber : undefined,
            },
          });
        }}
      />
    ));
  };

  return (
    <div className={layoutStyle}>
      <div className={containerStyle}>
        <div className={mainWrapperStyle}>
          <div className={contentWrapperStyle}>
            <div className={titleWrapperStyle}>
              <div className={titleContentStyle}>
                <Head tag="h6_sb" color="black">
                  해당 클래스 신청을
                </Head>
                <Head tag="h6_sb" color="main4">
                  취소
                </Head>
                <Head tag="h6_sb" color="black">
                  하시겠습니까?
                </Head>
              </div>
              <div className={sectionWrapperStyle}>
                <Head tag="h6_sb" color="black">
                  신청자 정보
                </Head>
                <ApplicantInfo memberName={myPageData?.name || ''} memberPhoneNumber={myPageData?.phoneNumber || ''} />
              </div>

              <div className={classInfoSectionStyle}>
                <Head tag="h6_sb" color="black">
                  클래스 정보
                </Head>
                <div className={classInfoWrapper}>
                  <ClassInfo
                    location={reservationData?.location || ''}
                    locationDetail={reservationData?.detailedAddress}
                    lessonRound={reservationData?.rounds}
                  />
                </div>
              </div>

              {isAfterDeposit && (
                <>
                  <hr className={dividerStyle} />
                  <RefundAccountSection
                    isVisible={isAfterDeposit}
                    selectedBank={selectedBank}
                    onBankSelectClick={() => setIsBankSheetOpen(true)}
                    register={register}
                  />

                  <RefundPolicySection isVisible={isAfterDeposit} onAgreementChange={handlePolicyAgreementChange} />
                </>
              )}
            </div>

            <BlurBotton blurColor="gray">
              <BoxButton
                variant="primary"
                onClick={handleConfirm}
                className={buttonStyle}
                disabled={isPending || !isButtonActive()}>
                {isPending ? '처리 중...' : '취소하기'}
              </BoxButton>
            </BlurBotton>
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
    </div>
  );
};

export default CancelConfirmPage;
