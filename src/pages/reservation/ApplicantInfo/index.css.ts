import { vars } from "@/styles/theme.css";
import { style } from '@vanilla-extract/css';

export const bookerComponentStyle = style({
  background: vars.colors.white,
  borderRadius: '4px',
  padding: '2rem',
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});