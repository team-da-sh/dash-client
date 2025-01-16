import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

export const previewImgStyle = recipe({
  base: {
    border: '1px solid blue',
    width: '8.4rem',
    height: '8.4rem',
    backgroundColor: vars.colors.gray01,
    cursor: 'pointer',
    borderRadius: '4px',
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
