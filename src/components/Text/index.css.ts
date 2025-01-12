import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';

export const textStyle = recipe({
  variants: {
    tag: {
      body01_reg: vars.fonts.body01_reg,
      body01_med: vars.fonts.body01_med_long,
      body01_med_long: vars.fonts.body01_smbold,
      body01_smbold: vars.fonts.body01_smbold,
      body01_smbold_long: vars.fonts.body01_smbold_long,
      body02_reg: vars.fonts.body02_reg,
      body02_med: vars.fonts.body02_med,
      body02_med_narrow: vars.fonts.body02_med_narrow,
      body02_smbold: vars.fonts.body02_smbold,
      body02_smbold_narrow: vars.fonts.body02_smbold_narrow,
      caption01_reg: vars.fonts.caption01_reg,
      caption01_reg_narr: vars.fonts.caption01_reg_narr,
      caption01_med: vars.fonts.caption01_med,
      caption01_smbold: vars.fonts.caption01_smbold,
    },
  },
});
