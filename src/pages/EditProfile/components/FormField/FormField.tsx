import Input from '@/shared/components/Input/Input';
import Text from '@/shared/components/Text/Text';
import * as styles from './formField.css';

interface FormFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  register: any;
  error?: { message?: string };
  readOnly?: boolean;
  rightAddOn?: React.ReactNode;
}

const FormField = ({ label, name, placeholder, register, error, readOnly = false, rightAddOn }: FormFieldProps) => {
  return (
    <div className={styles.fieldWrapperStyle}>
      <label>
        <Text tag="b2_sb">{label}</Text>
      </label>
      <Input placeholder={placeholder} {...register(name)} isError={!!error} readOnly={readOnly} />
      {error && error.message && (
        <div className={styles.errorMessageStyle}>
          <Text tag="b3_r" color="alert3">
            {error.message}
          </Text>
          {rightAddOn}
        </div>
      )}
    </div>
  );
};

export default FormField;
