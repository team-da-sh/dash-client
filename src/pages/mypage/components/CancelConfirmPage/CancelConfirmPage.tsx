import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useParams } from 'react-router-dom';
import { useGetMyPage } from '@/pages/mypage/apis/queries';
import { useCancelReservation } from '@/pages/mypage/components/CancelConfirmPage/apis/query/useCancelReservation';
import * as styles from '@/pages/mypage/components/CancelConfirmPage/cancelConfirmPage.css';
import { useGetReservationsDetail } from '@/pages/mypage/components/mypageReservationDetail/apis/queries';
import { CANCEL_CONFIRM_MESSAGE } from '@/pages/mypage/constants/modalMessage';
import ApplicantInfo from '@/pages/reservation/components/ApplicantInfo/ApplicantInfo';
import ClassInfo from '@/pages/reservation/components/ClassInfo/ClassInfo';
import Modal from '@/common/components/Modal/Modal';
import { useModalStore } from '@/common/stores/modal';
import { useGetBankList } from '@/shared/apis/queries';
import BankBottomSheet from '@/shared/components/BankBottomSheet/BankBottomSheet';
import BlurBotton from '@/shared/components/BlurButton/BlurButton';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Head from '@/shared/components/Head/Head';
import { sprinkles } from '@/shared/styles/sprinkles.css';
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

const CancelConfirmPage = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const reservationId = Number(id);

  const { data: reservationData } = useGetReservationsDetail(reservationId);
  const { data: myPageData } = useGetMyPage();
  const { data: bankList } = useGetBankList();

  const { openModal } = useModalStore();
  const { mutate: cancelReservation, isPending } = useCancelReservation();

  const navigationState = location.state as NavigationState | null;
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
    <div className={styles.layoutStyle}>
      <div className={styles.containerStyle}>
        <div
          className={sprinkles({
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between',
          })}>
          <div
            className={sprinkles({
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 40,
              pt: 24,
              pr: 20,
              pl: 20,
            })}>
            <div className={sprinkles({ display: 'flex', flexDirection: 'column' })}>
              <div
                className={sprinkles({
                  display: 'flex',
                  gap: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  pb: 8,
                })}>
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
              <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 16, pt: 24 })}>
                <Head tag="h6_sb" color="black">
                  신청자 정보
                </Head>
                <ApplicantInfo memberName={myPageData?.name || ''} memberPhoneNumber={myPageData?.phoneNumber || ''} />
              </div>

              <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 16, pt: 40, pb: 40 })}>
                <Head tag="h6_sb" color="black">
                  클래스 정보
                </Head>
                <ClassInfo
                  lessonName={reservationData?.lessonName || ''}
                  location={reservationData?.location || ''}
                  locationDetail={reservationData?.detailedAddress}
                  teacherNickname={reservationData?.nickname || ''}
                  level={reservationData?.level || ''}
                  lessonRound={reservationData?.rounds}
                />
              </div>

              {isAfterDeposit && (
                <>
                  <hr className={styles.dividerStyle} />
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
                className={sprinkles({ width: '100%' })}
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
