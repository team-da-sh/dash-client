import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const buttonStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  height: '3.2rem',
  padding: '0rem 1rem',

  borderRadius: '4px',

  backgroundColor: vars.colors.gray02,
});

export const timeValueWrapperStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  padding: '1.2rem 1rem',

  borderRadius: '4px',
  border: `1px solid ${vars.colors.gray02}`,
});
