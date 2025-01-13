import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';

export const headStyle = recipe({
  variants: {
    tag: {
      h1: vars.fonts.head01,
    },
  },
});
