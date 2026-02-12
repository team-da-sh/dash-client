'use client';

import * as styles from '@/app/class/[id]/components/TabWrapper/TabIntro/tabIntro.css';
import type { LessonDetailResponseTypes } from '@/app/class/[id]/types/api';
import Text from '@/common/components/Text/Text';

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
