import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

export const containerStyle = recipe({
  base: {
    position: 'fixed',
    top: 0,
    zIndex: '2',
    display: 'flex',
    justifyContent: 'space-between',

    width: '100%',
    height: '6rem',
    padding: '0 2rem',

    transition: 'all 0.2s',
  },
  variants: {
    isVisible: {
      true: {
        backgroundColor: vars.colors.black,
      },
      false: {
        backgroundColor: 'none',
      },
    },
  },
});

export const iconsStyle = style({
  display: 'flex',
  gap: '2rem',
});
