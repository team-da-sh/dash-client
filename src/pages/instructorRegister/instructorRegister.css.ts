import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  // paddingBottom: '10.2rem',
});

export const titleStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  padding: '2rem 0 1.6rem 0 ',
});

export const sectionWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  padding: '0 2rem',
});

export const buttonContainerStyle = style({
  width: '100%',
  position: 'sticky',
  bottom: '0',
  padding: '2.4rem 2rem',
  backgroundColor: vars.colors.white,
});
