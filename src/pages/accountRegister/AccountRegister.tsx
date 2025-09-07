import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as styles from '@/pages/accountRegister/accountRegister.css';
import ConfirmBottomSheet from '@/pages/accountRegister/components/ConfirmBottomSheet/ConfirmBottomSheet';
import { ACCOUNT_REGISTER_FORM_KEY } from '@/pages/accountRegister/constants/registerSection';
import { accountRegisterSchema } from '@/pages/accountRegister/schema/accountRegisterSchema';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { useGetBankList } from '@/shared/apis/queries';
import SvgIcArrowDownGray1032 from '@/shared/assets/svg/IcArrowDownGray1032';
import BankBottomSheet from '@/shared/components/BankBottomSheet/BankBottomSheet';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Divider from '@/shared/components/Divider/Divider';
import Head from '@/shared/components/Head/Head';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';
import { notify } from '@/shared/components/Toast/Toast';
import { useGetTeacherAccount } from './apis/queries';

const AccountRegister = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isBankSheetOpen, setIsBankSheetOpen] = useState(false);
  // const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();

  const { data: bankList } = useGetBankList();
  const { data: accountData } = useGetTeacherAccount();

  // 수정 모드 여부
  const isEditMode = accountData?.isRegistered ?? false;

  const handleBottomSheetClose = () => {
    setIsBottomSheetOpen(false);
  };

  const handleBankSheetClose = () => {
    setIsBankSheetOpen(false);
  };

  const {
    register,
    watch,
    reset,
    handleSubmit,
    setValue,
    formState: { isValid, isDirty },
  } = useForm({
    resolver: zodResolver(accountRegisterSchema),

    mode: 'onTouched',
    defaultValues: {
      depositor: '',
      bank: { bankId: 0, bankName: '', bankImageUrl: '' },
      accountNumber: '',
    },
  });

  const handleBankSelect = (selectedBankId: number, selectedBankName: string, imageUrl: string) => {
    setValue(
      ACCOUNT_REGISTER_FORM_KEY.BANK,
      { bankId: selectedBankId, bankName: selectedBankName, bankImageUrl: imageUrl },
      {
        shouldValidate: true,
        shouldDirty: true,
      }
    );
  };

  const { depositor, bank, accountNumber } = watch();
  const isButtonActive = isEditMode ? isDirty && isValid : isValid;

  const onSubmit = () => {
    // TODO: 계좌 등록/수정 API 연결 추가 (success/error 핸들링 필요)

    navigate(ROUTES_CONFIG.mypage.withTab('student'));

    if (isEditMode) {
      notify({ message: '계좌정보 수정이 완료되었어요', icon: 'success' });
    } else {
      notify({ message: '계좌 등록이 완료되었어요', icon: 'success' });
    }
  };

  useEffect(() => {
    if (isEditMode && accountData && bankList) {
      const existingBank = bankList.find((bank) => bank.bankId === accountData.bankId);
      if (!existingBank) return;

      reset({
        depositor: accountData.depositor,
        accountNumber: accountData.accountNumber,
        bank: {
          bankId: accountData.bankId,
          bankName: accountData.bankName,
          bankImageUrl: existingBank.bankImageUrl,
        },
      });
    }
  }, [isEditMode, accountData, bankList, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Divider color="gray3" />
      <div className={styles.containerStyle}>
        <div className={styles.titleStyle}>
          <Head level="h1" tag="h3_sb">
            계좌 등록하기
          </Head>
          <Text tag="b2_m" color="gray7">
            수업료를 입금받은 계좌를 등록해요
          </Text>
        </div>

        <div className={styles.inputContainerStyle}>
          <Head level="h3" tag="b2_sb">
            예금주명
          </Head>
          <Input placeholder="예금주명 입력" {...register('depositor')} />
        </div>

        <div className={styles.inputContainerStyle}>
          <Head level="h3" tag="b2_sb">
            계좌 정보
          </Head>

          {/* TODO: 검토 후 삭제 예정 (아래 div로 대체한 상태) */}
          {/* <Input
            placeholder="은행 선택"
            value={bank?.name || ''}
            readOnly
            onClick={(e) => {
              e.currentTarget.blur();
              setIsBankSheetOpen(true);
            }}
            rightAddOn={<SvgIcArrowDownGray1032 width={'3.2rem'} />}
          /> */}

          <button
            type="button"
            className={styles.bankSelectContainerStyle}
            onClick={() => {
              setIsBankSheetOpen(true);
            }}>
            {bank.bankImageUrl && bank.bankName ? (
              <div className={styles.bankInfoContainerStyle}>
                <img src={bank.bankImageUrl} alt="은행 로고" className={styles.bankSelectImageStyle} />
                <Text tag="b2_sb_long">{bank.bankName}</Text>
              </div>
            ) : (
              <Text tag="b2_sb_long" color="gray5">
                은행 선택
              </Text>
            )}
            <SvgIcArrowDownGray1032 width={'3.2rem'} />
          </button>

          <Input placeholder="계좌번호 입력" inputMode="numeric" {...register('accountNumber')} />
        </div>
      </div>

      <div className={styles.buttonContainerStyle}>
        <BoxButton
          variant="primary"
          type="button"
          disabled={!isButtonActive}
          onClick={() => setIsBottomSheetOpen(true)}>
          다음
        </BoxButton>
      </div>

      <ConfirmBottomSheet
        isOpen={isBottomSheetOpen}
        onClose={handleBottomSheetClose}
        depositor={depositor}
        bank={bank.bankName || ''}
        accountNumber={accountNumber}
      />

      {bankList && (
        <BankBottomSheet
          isOpen={isBankSheetOpen}
          onClose={handleBankSheetClose}
          banks={bankList}
          handleBankSelect={handleBankSelect}
        />
      )}
    </form>
  );
};

export default AccountRegister;
