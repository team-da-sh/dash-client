import type { Meta, StoryObj } from '@storybook/react';
import * as styles from '@/stories/foundations/logo/Logo.css';
import IcLogoSmallBlack from '@/shared/assets/svg/IcLogoSmallBlack';
import IcLogoSmallWhite from '@/shared/assets/svg/IcLogoSmallWhite';
import Text from '@/shared/components/Text/Text';

const meta: Meta = {
  title: 'Foundations/Logo',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

export const Logo: Story = {
  render: () => (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <Text tag="h1_sb">Favicon</Text>
        <img src="/favicon.png" alt="favicon" width={100} height={100} />
      </div>

      <div className={styles.logoWrapper}>
        <Text tag="h1_sb">LogoBlack</Text>
        <IcLogoSmallBlack/>
      </div>

      <div className={styles.logoWrapper} style={{backgroundColor: '#000'}}>
        <Text tag="h1_sb" color="gray1">LogoWhite</Text>
        <IcLogoSmallWhite/>
      </div>
    </div>
  ),
};
