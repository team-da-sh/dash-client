import type { UseFormRegister } from 'react-hook-form';
import * as styles from '@/pages/editProfiles/components/FormField/formField.css';
import type { ProfileFormValues } from '@/pages/editProfiles/schema/profileSchema';
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
  isFocused,
  onFocus,
  onBlur,
}: FormFieldPropTypes) => {
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
      />
      <div className={styles.errorMessageStyle({ hasError: !!(error && error.message) })}>
        {error?.message && (
          <Text tag="b3_r" color="alert3">
            {error.message}
          </Text>
        )}
        {isFocused && validationMessage}
      </div>
    </div>
  );
};

export default FormField;
