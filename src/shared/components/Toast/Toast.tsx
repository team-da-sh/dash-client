import toast from 'react-hot-toast';
import IcClearMain from '@/shared/assets/svg/IcClearMain';
import { vars } from '@/shared/styles/theme.css';

export const notify = (message: string, icon?: boolean) => {
  toast.dismiss();

  toast(
    () => (
      <div
        style={{
          display: 'flex',
          justifyContent: icon ? 'flex-start' : 'center',
          alignItems: 'center',
          width: '100%',
          gap: icon ? '0.8em' : '0',
        }}>
        {icon && <IcClearMain />}
        <span>{message}</span>
      </div>
    ),
    {
      duration: 1500,
      position: 'bottom-center',
      style: {
        width: '100%',
        marginBottom: '2.4rem',
        backgroundColor: vars.colors.gray10,
        color: vars.colors.white,
        ...vars.fonts.b2_m,
      },
    }
  );
};
