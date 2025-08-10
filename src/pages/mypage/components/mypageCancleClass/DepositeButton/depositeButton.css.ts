import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const depositButtonStyle = recipe({
  base: {
    width: '100%',
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
        backgroundColor: vars.colors.main04,
        color: vars.colors.white,
      },
      false: {
        backgroundColor: vars.colors.white,
        color: vars.colors.gray07,
        border: `1px solid ${vars.colors.gray04}`,
      },
    },
  },
});
