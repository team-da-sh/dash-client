import { useState } from 'react';
import StudentContent from '@/pages/mypage/components/StudentContent/StudentContent';
import * as styles from '@/pages/mypage/components/TabWrapper/tabWrapper.css';
import TeacherContent from '@/pages/mypage/components/TeacherContent/TeacherContent';
import { TabList, TabButton, TabPanel } from '@/shared/components/Tab';
import { MYPAGE_TABS } from '@/shared/constants';

const TabWrapper = () => {
  const [selected, setSelected] = useState('student');

  return (
    <section>
      <div className={styles.tabPanelStyle}>
        <TabList>
          {MYPAGE_TABS.map((tab) => (
            <TabButton
              key={tab.key}
              colorScheme="plain"
              isSelected={selected === tab.key}
              onClick={() => setSelected(tab.key)}>
              {tab.label}
            </TabButton>
          ))}
        </TabList>
      </div>
      <TabPanel isSelected={selected === 'student'}>
        <StudentContent />
      </TabPanel>
      <TabPanel isSelected={selected === 'teacher'}>
        <TeacherContent />
      </TabPanel>
    </section>
  );
};

export default TabWrapper;
