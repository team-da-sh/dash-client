import { useFormContext } from 'react-hook-form';
import { useGetNicknameDuplicate } from '@/pages/instructorRegister/apis/queries';
import * as styles from '@/pages/instructorRegister/components/DancerNameSection/dancerNameSection.css';
import { FORM_ERROR_MESSAGE, INSTRUCTOR_REGISTER_FORM_KEY } from '@/pages/instructorRegister/constants/registerSection';
import type {
  duplicateStateTypes,
  instructorRegisterFormTypes,
} from '@/pages/instructorRegister/types/instructorRegisterForm';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';

interface DancerNameSectionPropTypes {
  duplicateState: duplicateStateTypes;
  setDuplicateState: (state: duplicateStateTypes) => void;
}

const DancerNameSection = ({ duplicateState, setDuplicateState }: DancerNameSectionPropTypes) => {
  const {
    register,
    setError,
    clearErrors,
    formState: { errors },
    watch,
  } = useFormContext<instructorRegisterFormTypes>();

  const error = errors.nickname;
  const dancerName = watch(INSTRUCTOR_REGISTER_FORM_KEY.NICKNAME);

  // 강사 닉네임 중복검사
  const { mutate: checkNicknameDuplicate } = useGetNicknameDuplicate();

  const fetchDuplicateCheck = async () => {
    checkNicknameDuplicate(dancerName, {
      onSuccess: ({ isDuplicated }) => {
        if (isDuplicated) {
          setError(INSTRUCTOR_REGISTER_FORM_KEY.NICKNAME, {
            type: 'manual',
            message: FORM_ERROR_MESSAGE.DUPLICATE_DANCER_NAME,
          });
          setDuplicateState('duplicate');
        } else {
          clearErrors(INSTRUCTOR_REGISTER_FORM_KEY.NICKNAME);
          setDuplicateState('available');
        }
      },
      onError: () => {
        console.error('닉네임 중복 검사 실패');
      },
    });
  };

  const shouldDisableButton = !!error || duplicateState === 'available';
  const buttonVariant = shouldDisableButton ? 'temp' : 'primary';

  return (
    <section className={styles.containerStyle}>
      <Text tag="b2_sb">댄서네임</Text>
      <Input
        {...register('nickname', {
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
