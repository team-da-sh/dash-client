import StudentContent from '@/pages/mypage/components/TabWrapper/components/StudentContent/StudentContent';
import TeacherContent from '@/pages/mypage/components/TabWrapper/components/TeacherContent/TeacherContent';
import * as styles from '@/pages/mypage/components/TabWrapper/tabWrapper.css';
import { MYPAGE_TABS } from '@/pages/mypage/constants/tabs';
import { TabButton, TabList, TabPanel } from '@/shared/components/Tab';
import { useTabNavigation } from '@/shared/hooks/useTabNavigation';

const TabWrapper = () => {
  const { selectedTab, setSelectedTab } = useTabNavigation('student');

  return (
    <section>
      <div className={styles.tabPanelStyle}>
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
  );
};

export default TabWrapper;
