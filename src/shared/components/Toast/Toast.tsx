import toast from 'react-hot-toast';
import SvgIcCautionAlert0120 from '@/shared/assets/svg/IcCautionAlert0120';
import SvgIcClear from '@/shared/assets/svg/IcClear';
import { toastContentStyle } from '@/shared/components/Toast/toast.css';
import { vars } from '@/shared/styles/theme.css';

export type iconType = 'success' | 'fail' | 'default';

const selectIcon = (icon: iconType) => {
  switch (icon) {
    case 'success':
      return <SvgIcClear width={20} color={vars.colors.main03} />;

    case 'fail':
      return <SvgIcCautionAlert0120 width={20} />;
    default:
      return;
  }
};

export type notifyProps = {
  message: string;
  icon?: iconType;
  bottomGap?: 'default' | 'large';
};

export const notify = ({ message, icon = 'default', bottomGap = 'default' }: notifyProps) => {
  toast.dismiss();

  const hasIcon = icon !== 'default';

  const defaultStyle = {
    width: '100%',
    bottom: '2.4rem',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: vars.colors.gray09,
    color: vars.colors.gray01,
    ...vars.fonts.b2_m,
  };

  const largeStyle = {
    maxWidth: 'unset',
    width: 'min(calc(var(--max-width) - 4rem), calc(100vw - 4rem))',
    marginBottom: '6.8rem',

    backgroundColor: vars.colors.gray09,
    color: vars.colors.gray01,
    ...vars.fonts.b2_m,
  };

  toast(
    () => (
      <div className={toastContentStyle({ hasIcon })}>
        {hasIcon && selectIcon(icon)}
        <span>{message}</span>
      </div>
    ),
    {
      duration: 1500,
      position: 'bottom-center',
      style: bottomGap === 'large' ? largeStyle : defaultStyle,
    }
  );
};
