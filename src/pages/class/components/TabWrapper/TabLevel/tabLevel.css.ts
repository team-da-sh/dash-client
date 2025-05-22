import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/theme.css';

export const questionStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const recommendClassStyle = style({
  whiteSpace: 'pre-line',
  overflowWrap: 'break-word',
  wordBreak: 'break-all',
});

export const levelStyle = style({
  whiteSpace: 'nowrap',
});

export const cardStyle = style({
  border: `1px solid ${vars.colors.gray03}`,
});
