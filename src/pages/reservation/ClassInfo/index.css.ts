import { vars } from "@/styles/theme.css";
import { style } from '@vanilla-extract/css';

export const infoComponentStyle = style({
  background: vars.colors.white,
  borderRadius: '4px',
  padding: '2rem',
  width: '100%',
  margin: '0 auto',
});

export const textLabelStyle = style({
  width: "4.4rem",
});
