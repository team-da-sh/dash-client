import type { UseFormRegister } from 'react-hook-form';
import * as styles from '@/pages/editProfiles/components/FormField/formField.css';
import type { ProfileFormValues } from '@/pages/editProfiles/schema/profileSchema';
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
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
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
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {error && error.message && (
        <div className={styles.errorMessageStyle}>
          <Text tag="b3_r" color="alert3">
            {error.message}
          </Text>
          {validationMessage}
        </div>
      )}
    </div>
  );
};

export default FormField;
