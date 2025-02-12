import toast from 'react-hot-toast';
import { vars } from '@/styles/theme.css';

export const notify = () => {
  toast.dismiss();

  toast('해당 기능은 추후 업데이트 될 예정이에요 ', {
    duration: 1500,
    position: 'bottom-center',
    style: {
      width: '100%',

      marginBottom: '2.4rem',

      backgroundColor: vars.colors.gray10,
      color: vars.colors.white,
      ...vars.fonts.b2,
    },
  });
};
