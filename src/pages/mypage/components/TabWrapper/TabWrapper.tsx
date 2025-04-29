import { useState } from 'react';
import * as styles from '@/pages/mypage/components/TabWrapper/TabWrapper.css';
import { TabList, TabButton } from '@/shared/components/Tab';
import { MYPAGE_TABS } from '@/shared/constants';

const TabWrapper = () => {
  const [selected, setSelected] = useState('student');

  return (
    <section className={styles.tabPanelStyle}>
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
    </section>
  );
};

export default TabWrapper;
