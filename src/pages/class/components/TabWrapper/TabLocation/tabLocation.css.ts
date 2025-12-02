import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const sectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1.2rem',
});

export const emptyMessageWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '3rem',
  paddingBottom: '4.8rem',
});

export const cardStyle = style({
  border: `1px solid ${vars.colors.gray03}`,
});

export const cardInnerStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  gap: '1.6rem',
});

export const addressContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
});

export const addressTitleStyle = style({
  marginRight: '0.4rem',
  whiteSpace: 'nowrap',
});

export const streetAddressStyle = style({
  whiteSpace: 'pre-line',
  overflowWrap: 'break-word',
  wordBreak: 'break-all',
});

export const addressRowStyle = style({
  display: 'flex',
});

export const textGroupStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const iconWrapper = style({
  width: '60px',
  height: '60px',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
