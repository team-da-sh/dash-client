import { HTMLAttributes } from 'react';
import { textStyle } from './index.css';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  tag?:
    | 'body01_reg'
    | 'body01_med'
    | 'body01_med_long'
    | 'body01_smbold'
    | 'body01_smbold_long'
    | 'body02_reg'
    | 'body02_med'
    | 'body02_med_narrow'
    | 'body02_smbold'
    | 'body02_smbold_narrow'
    | 'caption01_reg'
    | 'caption01_reg_narr'
    | 'caption01_med'
    | 'caption01_smbold';
}

const Text = ({ tag = 'body02_med', children, ...props }: TextProps) => {
  return (
    <p className={textStyle({ tag: tag })} {...props}>
      {children}
    </p>
  );
};

export default Text;
