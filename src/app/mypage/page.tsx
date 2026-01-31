'use client';

import StudentContent from '@/app/mypage/components/StudentContent/StudentContent';
import TeacherContent from '@/app/mypage/components/TeacherContent/TeacherContent';
import { MYPAGE_TABS } from '@/app/mypage/constants/tabs';
import { containerStyle, tabPanelStyle } from '@/app/mypage/index.css';
import { TabButton, TabList, TabPanel } from '@/common/components/Tab';
import { useTabNavigation } from '@/shared/hooks/useTabNavigation';

export default function MyPage() {
  const { selectedTab, setSelectedTab } = useTabNavigation('student');

  return (
    <main className={containerStyle}>
      <section>
        <div className={tabPanelStyle}>
          <TabList>
            {MYPAGE_TABS.map((tab) => {
              return (
                <TabButton
                  key={tab.key}
                  colorScheme="plain"
                  isSelected={selectedTab === tab.key}
                  onClick={() => setSelectedTab(tab.key)}>
                  {tab.label}
                </TabButton>
              );
            })}
          </TabList>
        </div>

        <TabPanel isSelected={selectedTab === 'student'}>
          <StudentContent />
        </TabPanel>
        <TabPanel isSelected={selectedTab === 'teacher'}>
          <TeacherContent />
        </TabPanel>
      </section>
    </main>
  );
}
