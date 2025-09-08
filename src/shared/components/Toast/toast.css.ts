import { recipe } from '@vanilla-extract/recipes';

export const toastContentStyle = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  variants: {
    hasIcon: {
      true: {
        justifyContent: 'flex-start',
        gap: '0.8rem',
      },
      false: {
        justifyContent: 'center',
      },
    },
  },
});
