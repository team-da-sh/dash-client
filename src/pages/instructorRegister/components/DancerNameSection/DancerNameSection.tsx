import { useFormContext } from 'react-hook-form';
import * as styles from '@/pages/instructorRegister/components/DancerNameSection/dancerNameSection.css';
import { FORM_ERROR_MESSAGE } from '@/pages/instructorRegister/constants/registerSection';
import type {
  duplicateStateTypes,
  instructorRegisterFormTypes,
} from '@/pages/instructorRegister/types/instructorRegisterForm';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';

interface DancerNameSectionPropTypes {
  dancerName: string;
  duplicateState: duplicateStateTypes;
  setDuplicateState: (state: duplicateStateTypes) => void;
}

const DancerNameSection = ({ dancerName, duplicateState, setDuplicateState }: DancerNameSectionPropTypes) => {
  const {
    register,
    setError,
    formState: { errors },
  } = useFormContext<instructorRegisterFormTypes>();

  const error = errors.dancerName;
  const testDuplicateData = false; // API 임시 테스트 데이터

  const fetchDuplicateCheck = async () => {
    // data 받고 중복 여부 true/false에 따라 분기 처리
    // TODO : 중복 확인 API 연결 및 에러 분기 처리
    if (testDuplicateData) {
      setError('dancerName', { type: 'manual', message: FORM_ERROR_MESSAGE.DUPLICATE_DANCER_NAME });
      setDuplicateState('duplicate');
    } else {
      setDuplicateState('available');
    }
  };

  const shouldDisableButton = !!error || duplicateState === 'available';
  const buttonVariant = shouldDisableButton ? 'temp' : 'primary';

  return (
    <section className={styles.containerStyle}>
      <Text tag="b2_sb">댄서네임</Text>
      <Input
        {...register('dancerName', {
          onChange: () => {
            // 값이 변경되면 중복 상태 초기화
            setDuplicateState(null);
          },
        })}
        isError={!!error}
        helperText={duplicateState === 'available' ? '사용 가능한 댄서 네임이에요.' : error?.message}
        helperTextState={duplicateState === 'available' ? 'success' : 'error'}
        value={dancerName}
        showMaxLength={true}
        placeholder="나는대쉬"
        maxLength={8}
        rightAddOn={
          <BoxButton
            className={styles.duplicateCheckButtonStyle}
            type="button"
            variant={buttonVariant}
            onClick={fetchDuplicateCheck}
            disabled={shouldDisableButton}>
            중복확인
          </BoxButton>
        }
      />
    </section>
  );
};

export default DancerNameSection;
