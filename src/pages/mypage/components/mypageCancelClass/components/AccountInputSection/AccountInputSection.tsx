import type { UseFormRegister } from 'react-hook-form';
import SvgIcArrowDownGray1032 from '@/shared/assets/svg/IcArrowDownGray1032';
import Head from '@/shared/components/Head/Head';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';
import * as styles from './accountInputSetion.css';

interface Bank {
  bankId: number;
  bankName: string;
  bankImageUrl: string;
}

interface AccountFormData {
  accountNumber: string;
}

interface AccountInputSectionProps {
  isVisible: boolean;
  selectedBank: Bank;
  onBankSelectClick: () => void;
  register: UseFormRegister<AccountFormData>;
}

const AccountInputSection = ({ isVisible, selectedBank, onBankSelectClick, register }: AccountInputSectionProps) => {
  if (!isVisible) return null;

  return (
    <div className={styles.containerStyle}>
      <div className={styles.titleContainerStyle}>
        <Head level="h3" tag="b2_sb" color="gray9">
          환불받을 계좌
        </Head>

        <div className={styles.inputContainerStyle}>
          <button type="button" className={styles.bankSelectContainerStyle} onClick={onBankSelectClick}>
            {selectedBank.bankImageUrl && selectedBank.bankName ? (
              <div className={styles.bankInfoContainerStyle}>
                <img src={selectedBank.bankImageUrl} alt="은행 로고" className={styles.bankSelectImageStyle} />
                <Text tag="b2_sb_long">{selectedBank.bankName}</Text>
              </div>
            ) : (
              <Text tag="b2_sb_long" color="gray5">
                은행 선택
              </Text>
            )}
            <SvgIcArrowDownGray1032 width={'3.2rem'} />
          </button>
          <Input
            backgroundColor="white"
            placeholder="계좌번호 입력"
            inputMode="numeric"
            {...register('accountNumber')}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountInputSection;
