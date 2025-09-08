import type { UseFormRegister } from 'react-hook-form';
import * as styles from '@/pages/editProfiles/components/FormField/formField.css';
import type { ProfileFormValues } from '@/pages/editProfiles/schema/profileSchema';
import { allowOnlyNumberKey, allowOnlyNumberPaste } from '@/pages/editProfiles/utils/inputUtils';
import { MAX_NAME_LENGTH, MAX_PHONENUMBER_LENGTH } from '@/pages/onboarding/constants';
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
  value?: string;
}

const FormField = ({ label, name, placeholder, register, error, readOnly = false, value }: FormFieldPropTypes) => {
  const { ref, onChange } = register(name);
  const isPhoneNumber = name === 'phoneNumber';

  return (
    <div className={styles.fieldWrapperStyle}>
      <label>
        <Text tag="b2_sb">{label}</Text>
      </label>
      <Input
        ref={ref}
        onChange={onChange}
        name={name}
        value={value}
        placeholder={placeholder}
        isError={!!error}
        maxLength={name === 'phoneNumber' ? MAX_PHONENUMBER_LENGTH : MAX_NAME_LENGTH}
        readOnly={readOnly}
        showMaxLength={true}
        helperText={error?.message}
        {...(isPhoneNumber && { inputMode: 'numeric', onKeyDown: allowOnlyNumberKey, onPaste: allowOnlyNumberPaste })}
      />
    </div>
  );
};

export default FormField;
