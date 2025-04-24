import * as styles from '@/pages/class/components/TabWrapper/TabIntro/tabIntro.css';
import type { LessonDetailResponseTypes } from '@/pages/class/types/api';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const TabIntro = ({ lessonData }: { lessonData: LessonDetailResponseTypes }) => {
  const { detail } = lessonData;

  return (
    <section className={sprinkles({ pt: 8 })}>
      <Text tag="b2_m_long" color="gray8" className={styles.introTextStyle}>
        {detail}
      </Text>
    </section>
  );
};

export default TabIntro;
