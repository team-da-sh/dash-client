import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

export const divider = recipe({
  base: {
    display: 'block',
  },
  variants: {
    direction: {
      horizontal: {
        width: '100%',
        height: '1px',
      },
      vertical: {
        width: '1px',
        height: '100%',
      },
    },
    color: {
      primary: {
        backgroundColor: vars.colors.gray04,
      },
      secondary: {
        backgroundColor: vars.colors.white,
      },
    },
  },
  defaultVariants: {
    direction: 'horizontal',
    color: 'primary',
  },
});
