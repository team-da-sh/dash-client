import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

export const dividerStyle = recipe({
  base: {
    display: 'block',
  },
  variants: {
    direction: {
      horizontal: {
        width: '100%',
        height: '0.1rem',
      },
      vertical: {
        width: '0.1rem',
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
