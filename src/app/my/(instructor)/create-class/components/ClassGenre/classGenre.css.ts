import { style } from '@vanilla-extract/css';

export const genreButtonContainerStyle = style({
  display: 'flex',
  gap: '1.2rem',
  flexWrap: 'wrap',
});

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginBottom: '4rem',
});

export const buttonWrapperStyle = style({
  marginTop: '2rem',
});

export const errorMessageStyle = style({
  marginTop: '0.4rem',
});
