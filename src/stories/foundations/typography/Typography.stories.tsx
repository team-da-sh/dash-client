import type { Meta, StoryObj } from '@storybook/react';
import * as styles from '@/stories/foundations/typography/Typography.css';
import { vars, FontKey } from '@/shared/styles/theme.css';

const meta: Meta = {
  title: 'Foundations/Typography',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

export const Typography: Story = {
  render: () => {
    const fontKeys = Object.keys(vars.fonts) as FontKey[];
    return (
      <div className={styles.container}>
        {fontKeys.map((key) => {
          const style = vars.fonts[key];
          return (
            <div key={key} className={styles.item}>
              <p
                className={styles.label}
                style={{ fontSize: style.fontSize }}
              >
                {key}
              </p>
              <p
                style={{
                  fontWeight: style.fontWeight,
                  fontSize: style.fontSize,
                  lineHeight: style.lineHeight,
                  letterSpacing: style.letterSpacing,
                  margin: 0,
                }}
              >
                Dash sample text using the {key} style.
              </p>
            </div>
          );
        })}
      </div>
    );
  },
};