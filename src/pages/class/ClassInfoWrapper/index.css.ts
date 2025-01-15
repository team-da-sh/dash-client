import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const headerStyle = style({
  height: '37.5rem',
  backgroundColor: vars.colors.gray02,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});
export const lessonCount = style({
  color: vars.colors.gray06 
});

export const cardStyle = style({
  display: 'inline-flex',
  padding: '1.6rem 2rem',
  alignItems: 'center',
  borderRadius: '4px',
  border: '0.5px solid',
  borderColor: vars.colors.gray04,
  backgroundColor: vars.colors.white,
  gap: '0.2rem',
  width: '100%',
});