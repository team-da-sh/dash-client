import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

export const textStyle = recipe({
  variants: {
    tag: vars.fonts,
  },
});
