import { useState } from 'react';
import {
  bottomSheetStyle,
  overlayStyle,
} from '@/pages/search/components/TabContainer/TagSection/BottomSheet/index.css';
import BoxButton from '@/components/BoxButton';
import Flex from '@/components/Flex';
import { TabButton, TabList, TabPanel, TabRoot } from '@/components/Tab';

interface BottomSheetProps {
  onClose: () => void;
  initialTabIndex: number;
}

interface BottomSheetProps {
  onClose: () => void;
  initialTabIndex: number;
}

const BottomSheet = ({ onClose, initialTabIndex }: BottomSheetProps) => {
  const [selectedTab, setSelectedTab] = useState(initialTabIndex);
  document.body.style.overflow = 'hidden';

  return (
    <div className={bottomSheetStyle}>
      <div className={overlayStyle} onClick={onClose} />
      <Flex direction="column" className={bottomSheetStyle}>
        <TabRoot>
          <TabList>
            <TabButton isSelected={selectedTab === 0} onClick={() => setSelectedTab(0)} colorScheme="secondary">
              장르
            </TabButton>
            <TabButton isSelected={selectedTab === 1} onClick={() => setSelectedTab(1)} colorScheme="secondary">
              난이도
            </TabButton>
            <TabButton isSelected={selectedTab === 2} onClick={() => setSelectedTab(2)} colorScheme="secondary">
              기간
            </TabButton>
          </TabList>
          <TabPanel isSelected={selectedTab === 0}>장르</TabPanel>
          <TabPanel isSelected={selectedTab === 1}>난이도</TabPanel>
          <TabPanel isSelected={selectedTab === 2}>기간</TabPanel>
        </TabRoot>
        <Flex width="100%" gap="0.8rem">
          <BoxButton variant="secondary">초기화</BoxButton>
          <BoxButton isDisabled={true}>적용하기</BoxButton>
        </Flex>
      </Flex>
    </div>
  );
};

export default BottomSheet;
