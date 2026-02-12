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

export const sectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.6rem',
});

export const headerWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  width: '100%',
  gap: '0.8rem',
});

export const cardContentStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

export const infoWrapperStyle = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '0.6rem',
});

export const recommendationSectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.7rem',
});

export const recommendationHeaderStyle = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '0.4rem',
});
