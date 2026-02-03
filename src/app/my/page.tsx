'use client';

import { Suspense } from 'react';
import StudentContent from '@/app/my/components/StudentContent/StudentContent';
import TeacherContent from '@/app/my/components/TeacherContent/TeacherContent';
import { MYPAGE_TABS } from '@/app/my/constants/tabs';
import { containerStyle, tabPanelStyle } from '@/app/my/index.css';
import { TabButton, TabList, TabPanel } from '@/common/components/Tab';
import { useTabNavigation } from '@/shared/hooks/useTabNavigation';

function MyPageContent() {
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

export default function MyPage() {
  return (
    <Suspense fallback={null}>
      <MyPageContent />
    </Suspense>
  );
}
