import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const streetAddressStyle = style({
  whiteSpace: 'pre-line',
  overflowWrap: 'break-word',
  wordBreak: 'break-all',
});

export const addressTitleStyle = style({
  marginRight: '0.4rem',
  whiteSpace: 'nowrap',
});

export const cardStyle = style({
  border: `1px solid ${vars.colors.gray03}`,
});
