import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const classImageStyle = style({
  width: '16.4rem',
  height: '12.3rem',

  borderRadius: '4px',
  backgroundColor: vars.colors.gray02,
  objectFit: 'cover',
});

export const deadlineTagStyle = style({
  position: 'absolute',
  top: '0.8rem',
});

export const lessonNameStyle = style({
  overflowWrap: 'break-word',
  wordBreak: 'break-all',
});
