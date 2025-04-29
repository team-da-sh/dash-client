import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const previewImgStyle = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',

    width: '9.6rem',
    height: '9.6rem',
    margin: '0 auto',
    backgroundColor: vars.colors.gray01,
    borderRadius: '50%',
    cursor: 'pointer',
  },
  variants: {
    hasImage: {
      true: { backgroundSize: 'cover' },
    },
  },
  defaultVariants: {
    hasImage: false,
  },
});

export const inputStyle = style({
  display: 'none',
});

export const closeIconStyle = style({
  position: 'absolute',
  left: '6.8rem',
  top: '-0.8rem',
});
