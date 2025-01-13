import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

export const progressBarWrapperStyle = style({
  display: 'flex',
  width: '100%',
  height: '0.4rem',
  gap: '0.4rem',
  padding: '0 2rem',
});

export const progressBarSegmentStyle = recipe({
  base: {
    flex: 1,
    height: '0.4rem',
    borderRadius: '2px',
    transition: 'background 0.3s',
  },
  variants: {
    isActive: {
      true: {
        backgroundColor: vars.colors.main03,
      },
      false: {
        backgroundColor: vars.colors.gray02,
      },
    },
  },
});
