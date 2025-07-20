import toast from 'react-hot-toast';
import SvgIcCautionAlert0120 from '@/assets/svg/IcCautionAlert0120';
import SvgIcClearMain0420 from '@/assets/svg/IcClearMain0420';
import { toastContentStyle } from '@/shared/components/Toast/toast.css';
import { vars } from '@/shared/styles/theme.css';

export type iconType = 'success' | 'fail' | 'default';

const selectIcon = (icon: iconType) => {
  switch (icon) {
    case 'success':
      return <SvgIcClearMain0420 width={20} />;
    case 'fail':
      return <SvgIcCautionAlert0120 width={20} />;
    default:
      return;
  }
};

export type notifyProps = {
  message: string;
  icon?: iconType;
};

export const notify = ({ message, icon = 'default' }: notifyProps) => {
  toast.dismiss();

  const hasIcon = icon !== 'default';

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
      style: {
        width: '100%',
        bottom: '2.4rem',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: vars.colors.gray10,
        color: vars.colors.white,
        ...vars.fonts.b2_m,
      },
    }
  );
};
