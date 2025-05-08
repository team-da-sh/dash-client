import { useState } from 'react';
import StudentContent from '@/pages/mypage/components/TabWrapper/components/StudentContent/StudentContent';
import TeacherContent from '@/pages/mypage/components/TabWrapper/components/TeacherContent/TeacherContent';
import * as styles from '@/pages/mypage/components/TabWrapper/tabWrapper.css';
import { MYPAGE_TABS } from '@/pages/mypage/constants/tabs';
import { TabList, TabButton, TabPanel } from '@/shared/components/Tab';

const TabWrapper = () => {
  const [selected, setSelected] = useState('student');

  return (
    <section>
      <div className={styles.tabPanelStyle}>
        <TabList>
          {MYPAGE_TABS.map((tab) => {
            return (
              <TabButton
                key={tab.key}
                colorScheme="plain"
                isSelected={selected === tab.key}
                onClick={() => setSelected(tab.key)}>
                {tab.label}
              </TabButton>
            );
          })}
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
