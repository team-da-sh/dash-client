import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const newClassImageStyle = style({
  width: '100%',
  height: '9.1rem',
  borderRadius: '4px',

  objectFit: 'cover',
});

export const newTeacherImageStyle = style({
  width: '2.4rem',
  height: '2.4rem',

  objectFit: 'cover',
  borderRadius: '10px',
});

export const newWrapperStyle = style({
  position: 'relative',
  width: '50%',
  padding: '0.35rem',
  paddingBottom: '2rem',
});

export const newDeadlineTagStyle = style({
  position: 'absolute',
  top: '0.8rem',
});

export const newGenreWrapperStyle = style({
  width: '100%',

  marginTop: '4.8rem',
  padding: '3.2rem 2rem 3.8rem 2rem',

  backgroundColor: vars.colors.gray01,
});

export const myPageWrapperStyle = style({
  position: 'relative',
  width: '12.3rem',

  padding: '0.35rem',
  paddingBottom: '2rem',
});

export const myPageImageStyle = style({
  width: '12.3rem',
  height: '9.225rem',
  borderRadius: '3px',

  objectFit: 'cover',
});
