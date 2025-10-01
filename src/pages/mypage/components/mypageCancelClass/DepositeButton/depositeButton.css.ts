import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const depositButtonStyle = recipe({
  base: {
    width: '100%',
    height: '5.2rem',
    padding: '1.4rem 1.8rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textAlign: 'left',
  },
  variants: {
    isSelected: {
      true: {
        backgroundColor: vars.colors.main03,
        color: vars.colors.white,
      },
      false: {
        backgroundColor: vars.colors.white,
        color: vars.colors.gray07,
      },
    },
  },
});
