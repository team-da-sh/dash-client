import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

export const containerStyle = recipe({
  base: {
    display: 'flex',
    position: 'fixed',
    top: 0,
    alignItems: 'center',
    
    justifyContent: 'space-between',
    width: '100%',
    height: '6rem',
    padding: '1.8rem 2rem',

    transition: 'all 0.2s',
  },
  variants: {
    isVisible: {
      true: {
        backgroundColor: vars.colors.white,
      },
      false: {
        backgroundColor: 'none',
      },
    },
  },
});
