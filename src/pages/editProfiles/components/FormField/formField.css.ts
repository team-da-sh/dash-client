import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const fieldWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',

  padding: '1.2rem 0',
});

export const errorMessageStyle = recipe({
  base: {
    display: 'flex',
  },
  variants: {
    hasError: {
      true: {
        justifyContent: 'space-between',
      },
      false: {
        justifyContent: 'end',
      },
    },
  },
  defaultVariants: {
    hasError: false,
  },
});
