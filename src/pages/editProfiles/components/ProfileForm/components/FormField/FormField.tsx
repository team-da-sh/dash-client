import type { UseFormRegister } from 'react-hook-form';
import * as styles from '@/pages/editProfiles/components/ProfileForm/components/FormField/formField.css';
import type { ProfileFormValues } from '@/pages/editProfiles/schema/profileSchema';
import { allowOnlyNumberKey, allowOnlyNumberPaste } from '@/pages/editProfiles/utils/inputUtils';
import { MAX_PHONENUMBER_LENGTH, MAX_NAME_LENGTH } from '@/pages/onboarding/constants';
import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';

interface FormFieldPropTypes {
  label: string;
  name: keyof ProfileFormValues;
  placeholder?: string;
  register: UseFormRegister<ProfileFormValues>;
  error?: { message?: string };
  readOnly?: boolean;
  validationMessage?: React.ReactNode;
  isFocused?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

const FormField = ({
  label,
  name,
  placeholder,
  register,
  error,
  readOnly = false,
  validationMessage,
  onFocus,
  onBlur,
  isFocused,
}: FormFieldPropTypes) => {
  const isPhoneNumber = name === 'phoneNumber';

  return (
    <div className={styles.fieldWrapperStyle}>
      <label>
        <Text tag="b2_sb">{label}</Text>
      </label>
      <Input
        placeholder={placeholder}
        {...register(name)}
        isError={!!error}
        maxLength={name === 'phoneNumber' ? MAX_PHONENUMBER_LENGTH : MAX_NAME_LENGTH}
        readOnly={readOnly}
        isFocused={isFocused}
        onFocus={onFocus}
        onBlur={onBlur}
        {...(isPhoneNumber && { inputMode: 'numeric', onKeyDown: allowOnlyNumberKey, onPaste: allowOnlyNumberPaste })}
      />
      <div className={styles.errorMessageStyle({ hasError: !!(error && error.message) })}>
        {error?.message && (
          <Text tag="b3_r" color="alert3">
            {error.message}
          </Text>
        )}
        {validationMessage}
      </div>
    </div>
  );
};

export default FormField;
