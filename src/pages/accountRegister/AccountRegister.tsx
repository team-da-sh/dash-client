import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as styles from '@/pages/accountRegister/accountRegister.css';
import { usePostTeacherAccount } from '@/pages/accountRegister/apis/queries';
import ConfirmBottomSheet from '@/pages/accountRegister/components/ConfirmBottomSheet/ConfirmBottomSheet';
import { ACCOUNT_REGISTER_FORM_KEY } from '@/pages/accountRegister/constants/registerSection';
import { accountRegisterSchema } from '@/pages/accountRegister/schema/accountRegisterSchema';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { useGetBankList, useGetTeacherAccount } from '@/shared/apis/queries';
import SvgIcArrowDownGray1032 from '@/shared/assets/svg/IcArrowDownGray1032';
import BankBottomSheet from '@/shared/components/BankBottomSheet/BankBottomSheet';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Divider from '@/shared/components/Divider/Divider';
import Head from '@/shared/components/Head/Head';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';
import { notify } from '@/shared/components/Toast/Toast';
import { MAX_ACCOUNT_NUMBER_LENGTH } from '@/shared/constants/account';
import { queryKeys } from '@/shared/constants/queryKey';

const AccountRegister = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isBankSheetOpen, setIsBankSheetOpen] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: bankList } = useGetBankList();
  const { data: accountData } = useGetTeacherAccount();
  const { mutate: teacherAccountMutate } = usePostTeacherAccount();

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
    const updateInfo = {
      depositor: depositor.trim(),
      bankId: bank.bankId,
      bankName: bank.bankName,
      accountNumber: accountNumber.trim(),
    };

    teacherAccountMutate(updateInfo, {
      onSuccess: () => {
        navigate(ROUTES_CONFIG.mypage.withTab('student'));
        queryClient.invalidateQueries({ queryKey: queryKeys.teacher.me._ctx.account.queryKey });

        if (isEditMode) {
          notify({ message: '계좌정보 수정이 완료되었어요', icon: 'success' });
        } else {
          notify({ message: '계좌 등록이 완료되었어요', icon: 'success' });
        }
      },
      onError: () => {
        navigate(ROUTES_CONFIG.error.path);
      },
    });
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
            {isEditMode ? '계좌 관리하기' : '계좌 등록하기'}
          </Head>
          <Text tag="b2_m" color="gray7">
            {isEditMode ? '등록한 계좌를 관리해요' : '수업료를 입금받은 계좌를 등록해요'}
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

          <Input
            placeholder="계좌번호 입력"
            inputMode="numeric"
            {...register('accountNumber')}
            maxLength={MAX_ACCOUNT_NUMBER_LENGTH}
          />
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
