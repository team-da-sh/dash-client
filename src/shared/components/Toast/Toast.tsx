import toast from 'react-hot-toast';
import { vars } from '@/shared/styles/theme.css';

export const notify = (text: string) => {
  toast.dismiss();

  toast(text, {
    duration: 1500,
    position: 'bottom-center',
    style: {
      width: '100%',

      marginBottom: '2.4rem',

      backgroundColor: vars.colors.gray10,
      color: vars.colors.white,
      ...vars.fonts.b2_m,
    },
  });
};
