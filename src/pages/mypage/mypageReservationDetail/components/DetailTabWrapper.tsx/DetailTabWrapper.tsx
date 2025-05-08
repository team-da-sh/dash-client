import { useState } from 'react';
import { TabList, TabButton, TabPanel } from '@/shared/components/Tab';
import ClassContent from '../ClassContent/ClassContent';
import * as styles from './detailTabWrapper.css';

const DetailTabWrapper = () => {
  const [selected, setSelected] = useState('class');
  return (
    <section className={styles.containerStyle}>
      <TabList>
        <TabButton
          key="class"
          colorScheme="secondary"
          isSelected={selected === 'class'}
          onClick={() => setSelected('class')}>
          클래스 정보
        </TabButton>
        <TabButton
          key="reservation"
          colorScheme="secondary"
          isSelected={selected === 'reservation'}
          onClick={() => setSelected('reservation')}>
          신청 정보
        </TabButton>
      </TabList>

      <TabPanel isSelected={selected === 'class'}>
        <ClassContent />
      </TabPanel>
      <TabPanel isSelected={selected === 'reservation'}>
        {/* 임시 */}
        신청 정보입니다.
      </TabPanel>
    </section>
  );
};

export default DetailTabWrapper;
