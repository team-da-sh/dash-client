import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as styles from '@/pages/accountRegister/accountRegister.css';
import ConfirmBottomSheet from '@/pages/accountRegister/components/ConfirmBottomSheet/ConfirmBottomSheet';
import { accountRegisterSchema } from '@/pages/accountRegister/schema/accountRegisterSchema';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Divider from '@/shared/components/Divider/Divider';
import Head from '@/shared/components/Head/Head';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';
import { notify } from '@/shared/components/Toast/Toast';
import { useGetBankList } from './apis/queries';
import BankBottomSheet from './components/BankBottomSheet/BankBottomSheet';

const AccountRegister = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isBankSheetOpen, setIsBankSheetOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();

  const { data: bankList } = useGetBankList();

  const handleBottomSheetClose = () => {
    setIsBottomSheetOpen(false);
  };

  const handleBankSheetClose = () => {
    setIsBankSheetOpen(false);
  };

  const {
    register,
    watch,
    // reset,
    handleSubmit,
    setValue,
    formState: { isValid, isDirty },
  } = useForm({
    resolver: zodResolver(accountRegisterSchema),

    mode: 'onTouched',
    defaultValues: {
      depositor: '',
      bank: { id: 0, name: '' },
      accountNumber: '',
    },
  });

  const handleBankSelect = (selectedBankId: number, selectedBankName: string) => {
    setValue(
      'bank',
      { id: selectedBankId, name: selectedBankName },
      {
        shouldValidate: true,
        shouldDirty: true,
      }
    );
  };

  const { depositor, bank, accountNumber } = watch();
  const isButtonActive = isEditMode ? isDirty && isValid : isValid;

  // TODO: unused warn으로 인한 임시 console 제거
  useEffect(() => {
    console.log('setIsEditMode', setIsEditMode);
  }, [setIsEditMode]);

  const onSubmit = () => {
    // TODO: 계좌 등록/수정 API 연결 추가 (success/error 핸들링 필요)

    navigate(ROUTES_CONFIG.mypage.withTab('student'));

    if (isEditMode) {
      notify({ message: '계좌정보 수정이 완료되었어요', icon: 'success' });
    } else {
      notify({ message: '계좌 등록이 완료되었어요', icon: 'success' });
    }
  };

  // TODO: 수정의 경우 이전 정보 초기화 로직 추가 (API 연결 후)
  // useEffect(() => {
  //   if (!prevAccountData) return;

  //   setIsEditMode(true); // 이전 데이터 존재하면 수정 모드로 설정

  //   reset({
  //     depositor: prevAccountData.depositor,
  //     bank: prevAccountData.bank,
  //     accountNumber: prevAccountData.accountNumber,
  //   });
  // });

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
          <Input
            placeholder="은행 선택"
            // {...register('bank')}
            value={bank?.name || ''}
            readOnly
            onClick={(e) => {
              e.currentTarget.blur();
              setIsBankSheetOpen(true);
            }}
          />
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
        close={handleBottomSheetClose}
        depositor={depositor}
        bank={bank.name || ''}
        accountNumber={accountNumber}
      />

      {bankList && (
        <BankBottomSheet
          isOpen={isBankSheetOpen}
          close={handleBankSheetClose}
          banks={bankList}
          handleBankSelect={handleBankSelect}
        />
      )}
    </form>
  );
};

export default AccountRegister;
