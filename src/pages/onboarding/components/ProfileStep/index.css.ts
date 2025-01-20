import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

export const profileStyle = style({
  position: 'relative',
});

export const icCameraStyle = style({
  position: 'absolute',
  bottom: '0.6rem',
  right: '0.6rem',
});

export const previewImgStyle = recipe({
  base: {
    position: 'relative',

    width: '10rem',
    height: '10rem',

    backgroundColor: vars.colors.gray01,
    borderRadius: '100%',

    cursor: 'pointer',
    backgroundSize: 'cover',
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
