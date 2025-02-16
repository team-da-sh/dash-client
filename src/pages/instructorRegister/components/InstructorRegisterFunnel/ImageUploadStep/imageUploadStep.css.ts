import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/theme.css';

export const previewImgStyle = recipe({
  base: {
    width: '8.4rem',
    height: '8.4rem',
    backgroundColor: vars.colors.gray01,
    cursor: 'pointer',
    borderRadius: '4px',
    position: 'relative',
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
