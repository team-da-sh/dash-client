import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const classImageStyle = style({
  width: '16.4rem',
  height: '9.1rem',

  objectFit: 'cover',
  borderRadius: '4px',
});

export const titleStyle = style({
  maxWidth: '16.4rem',
  maxHeight: '4rem',

  whiteSpace: 'normal',
  overflow: 'hidden',
  wordBreak: 'break-all',
});

export const teacherImageStyle = style({
  width: '2.4rem',
  height: '2.4rem',

  objectFit: 'cover',
  borderRadius: '100%',
});

export const wrapperStyle = style({
  position: 'relative',
});

export const deadlineTagStyle = style({
  position: 'absolute',

  top: '0.8rem',
});

export const genreWrapperStyle = style({
  width: '100%',

  marginTop: '4.8rem',
  padding: '3.2rem 2rem 3.8rem 2rem',

  backgroundColor: vars.colors.gray01,
});
