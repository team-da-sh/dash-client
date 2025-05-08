import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const roundBoxStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  marginRight: '1.6rem',
  padding: '0.6rem 1.2rem',

  borderRadius: '4px',
  backgroundColor: vars.colors.main04,
});

export const cardStyle = style({
  border: `0.5px solid ${vars.colors.gray02}`,
});
