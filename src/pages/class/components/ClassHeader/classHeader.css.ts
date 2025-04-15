import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = recipe({
  base: {
    display: 'flex',
    position: 'fixed',
    top: 0,
    zIndex: vars.zIndex.two,
    justifyContent: 'space-between',
    alignItems: 'center',

    width: '100%',
    height: '6rem',
    padding: '0 2rem',

    transition: 'all 0.2s',
  },
  variants: {
    isWhite: {
      true: {
        backgroundColor: vars.colors.white,
      },
      false: {
        backgroundColor: 'none',
      },
    },
  },
});

export const backIconStyle = style({
  position: 'absolute',
  left: '2rem',
  top: '50%',
  transform: 'translateY(-50%)',
});

export const classNameHeaderStyle = style({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
});

export const headerTextStyle = style({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '25rem',
  textAlign: 'center',
});
