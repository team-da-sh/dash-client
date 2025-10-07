import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const containerStyle = style({
  width: '100%',
  paddingBottom: '12.2rem',
});

export const policyTableStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  padding: '1.6rem',
  borderRadius: '8px',
});

export const policyRowStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const agreementContainerStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
  cursor: 'pointer',
  padding: '2rem',
  backgroundColor: vars.colors.white,
  borderRadius: '8px',
  border: `1.133px solid ${vars.colors.gray04}`,
});

export const agreementContainerSelectedStyle = style({
  border: `1.133px solid ${vars.colors.main04}`,
});
