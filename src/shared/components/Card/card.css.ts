import { style } from '@vanilla-extract/css';

export const cardStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '2rem',

  width: '20rem',
  height: '15rem',
  padding: '0 3rem 3rem',

  borderRadius: '24px',
  backgroundColor: 'blue',
});
