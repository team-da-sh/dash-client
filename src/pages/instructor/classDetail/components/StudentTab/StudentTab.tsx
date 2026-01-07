import { useState } from 'react';
import type { TabStatus } from '@/pages/instructor/classDetail/ClassDetail';
import { useGetLessonDetail } from '@/pages/instructor/classDetail/apis/queries';
import StudentList from '@/pages/instructor/classDetail/components/StudentList/StudentList';
import {
  emptyTextStyle,
  tabListStyle,
  tabPanelStyle,
} from '@/pages/instructor/classDetail/components/StudentTab/StudentTab.css';
import Divider from '@/shared/components/Divider/Divider';
import { TabButton, TabList, TabPanel, TabRoot } from '@/shared/components/Tab';
import Text from '@/shared/components/Text/Text';

interface StudentTabProps {
  lessonId: number;
}

const StudentTab = ({ lessonId }: StudentTabProps) => {
  const [selectedTab, setSelectedTab] = useState<TabStatus>('APPROVE');

  const { data: lessonData } = useGetLessonDetail(lessonId, selectedTab);
  const handleTabClick = (tabId: TabStatus) => {
    setSelectedTab(tabId);
  };

  return (
    <TabRoot>
      <TabList className={tabListStyle}>
        <TabButton
          isSelected={selectedTab === 'APPROVE'}
          onClick={() => handleTabClick('APPROVE')}
          colorScheme="secondary">
          승인
        </TabButton>
        <TabButton
          isSelected={selectedTab === 'CANCEL'}
          onClick={() => handleTabClick('CANCEL')}
          colorScheme="secondary">
          취소
        </TabButton>
      </TabList>

      <Divider direction="horizontal" color="gray3" length="100%" thickness="0.1rem" />

      <TabPanel key={1} isSelected={selectedTab === 'APPROVE'} className={tabPanelStyle}>
        {lessonData?.students.some(
          (student) => student.reservationStatus === 'PENDING_APPROVAL' || student.reservationStatus === 'APPROVED'
        ) ? (
          <>
            <StudentList
              reservationStatus="PENDING_APPROVAL"
              studentList={
                lessonData?.students.filter((student) => student.reservationStatus === 'PENDING_APPROVAL') ?? []
              }
              lessonId={lessonData.id}
              selectedTab={selectedTab}
            />
            <StudentList
              reservationStatus="APPROVED"
              studentList={lessonData?.students.filter((student) => student.reservationStatus === 'APPROVED') ?? []}
              lessonId={lessonData.id}
              selectedTab={selectedTab}
            />
          </>
        ) : (
          <Text tag="b1_sb" color="gray9" className={emptyTextStyle}>
            아직 신청한 수강생이 없어요.
          </Text>
        )}
      </TabPanel>
      <TabPanel key={2} isSelected={selectedTab === 'CANCEL'} className={tabPanelStyle}>
        {lessonData?.students.some(
          (student) => student.reservationStatus === 'PENDING_CANCELLATION' || student.reservationStatus === 'CANCELLED'
        ) ? (
          <>
            <StudentList
              reservationStatus="PENDING_CANCELLATION"
              studentList={
                lessonData?.students.filter((student) => student.reservationStatus === 'PENDING_CANCELLATION') ?? []
              }
              lessonId={lessonData.id}
              selectedTab={selectedTab}
            />
            <StudentList
              reservationStatus="CANCELLED"
              studentList={lessonData?.students.filter((student) => student.reservationStatus === 'CANCELLED') ?? []}
              lessonId={lessonData.id}
              selectedTab={selectedTab}
            />
          </>
        ) : (
          <Text tag="b1_sb" color="gray9" className={emptyTextStyle}>
            아직 취소한 수강생이 없어요.
          </Text>
        )}
      </TabPanel>
    </TabRoot>
  );
};

export default StudentTab;
