import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const genreButtonStyle = recipe({
  base: {
    padding: '1.2rem 1.6rem',
    borderRadius: '4px',
    cursor: 'pointer',
    ...vars.fonts.b4,
    transition: 'background-color 0.3s, color 0.3s',
    color: vars.colors.gray09,
  },
  variants: {
    state: {
      selected: {
        backgroundColor: vars.colors.main03,
        color: vars.colors.white,
      },
      unselected: {
        backgroundColor: vars.colors.gray01,
        color: vars.colors.gray09,
      },
    },
  },
  defaultVariants: {
    state: 'unselected',
  },
});
