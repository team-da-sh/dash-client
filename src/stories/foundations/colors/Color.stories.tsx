import type { Meta, StoryObj } from '@storybook/react';
import * as styles from '@/stories/foundations/colors/Color.css';
import { hexColors } from '@/stories/foundations/colors/token';


const meta: Meta = {
  title: 'Foundations/Colors',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ColorGroup = ({
  title,
  colors,
}: {
  title: string;
  colors: Record<string, string>;
}) => (
  <div className={styles.colorGroup}>
    <h3 className={styles.groupTitle}>{title}</h3>
    <div className={styles.layout}>
      {Object.entries(colors).map(([name, value]) => (
        <div key={name} className={styles.colorBox}>
          <div className={styles.color} style={{ background: value }} />
          <div className={styles.name}>{name}</div>
          <div className={styles.meta}>{value}</div>
        </div>
      ))}
    </div>
  </div>
);

export const Colors: Story = {
  render: () => (
    <div>
      <ColorGroup title="Main Colors" colors={pickMainColors(hexColors)} />
      <ColorGroup title="Sub Colors" colors={pickSubColors(hexColors)} />
      <ColorGroup title="Alert Colors" colors={pickAlertColors(hexColors)} />
      <ColorGroup title="System Colors" colors={pickSystemColors(hexColors)} />
      <ColorGroup title="Opacity Colors" colors={pickOpacityColors(hexColors)} />
      <ColorGroup title="Grayscale" colors={pickGrayscaleColors(hexColors)} />
    </div>
  ),
  decorators: [
    (Story) => (
      <div style={{ padding: '3rem' }}>
        <Story />
      </div>
    ),
  ],
};

const pickMainColors = (colors: typeof hexColors) => ({
  main01: colors.main01,
  main02: colors.main02,
  main03: colors.main03,
  main04: colors.main04,
  main05: colors.main05,
  main06: colors.main06,
});

const pickSubColors = (colors: typeof hexColors) => ({
  sub01: colors.sub01,
  sub02: colors.sub02,
  sub03: colors.sub03,
  sub04: colors.sub04,
  sub05: colors.sub05,
  sub06: colors.sub06,
  sub07: colors.sub07,
});

const pickAlertColors = (colors: typeof hexColors) => ({
  alert01: colors.alert01,
  alert02: colors.alert02,
  alert03: colors.alert03,
});

const pickSystemColors = (colors: typeof hexColors) => ({
  kakao01: colors.kakao01,
  kakao02: colors.kakao02,
});

const pickOpacityColors = (colors: typeof hexColors) => ({
  black70: colors.black70,
  white50: colors.white50,
});

const pickGrayscaleColors = (colors: typeof hexColors) => ({
  white: colors.white,
  gray01: colors.gray01,
  gray02: colors.gray02,
  gray03: colors.gray03,
  gray04: colors.gray04,
  gray05: colors.gray05,
  gray06: colors.gray06,
  gray07: colors.gray07,
  gray08: colors.gray08,
  gray09: colors.gray09,
  gray10: colors.gray10,
  gray11: colors.gray11,
  black: colors.black,
});
