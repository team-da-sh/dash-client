import * as styles from '@/pages/class/components/TabWrapper/TabIntro/tabIntro.css';
import type { LessonDetailResponseTypes } from '@/pages/class/types/api';
import Text from '@/shared/components/Text/Text';

const TabIntro = ({ lessonData }: { lessonData: LessonDetailResponseTypes }) => {
  const { detail } = lessonData;

  return (
    <section>
      <Text tag="b2_m_long" color="gray8" className={styles.introTextStyle}>
        {detail}
      </Text>
    </section>
  );
};

export default TabIntro;
