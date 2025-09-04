import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetLessonDetail } from '@/pages/instructor/classDetail/apis/queries';
import * as styles from '@/pages/instructor/classDetail/classDetail.css';
import StudentList from '@/pages/instructor/classDetail/components/StudentList/StudentList';
import ClassCard from '@/shared/components/ClassCard';
import Head from '@/shared/components/Head/Head';
import { TabButton, TabList, TabPanel, TabRoot } from '@/shared/components/Tab';
import Text from '@/shared/components/Text/Text';
import { USER_ROLE } from '@/shared/constants/userRole';
import { sprinkles } from '@/shared/styles/sprinkles.css';

type TabStatus = 'APPROVED' | 'CANCELLED';

const ClassDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data: lessonData } = useGetLessonDetail(Number(id));

  const [selectedTab, setSelectedTab] = useState<TabStatus>('APPROVED');

  const handleTabClick = (tabId: TabStatus) => {
    setSelectedTab(tabId);
  };

  return (
    <div className={styles.layoutStyle}>
      <div className={styles.containerStyle}>
        <Head level="h2" tag="h6_sb" color="black">
          내 클래스 정보
        </Head>
        <section className={sprinkles({ gap: 16 })}>
          {lessonData && (
            <ClassCard>
              <ClassCard.Header
                role={USER_ROLE.TEACHER}
                date={lessonData.startDateTime}
                status={lessonData.applyStatus}
              />
              <ClassCard.Body
                name={lessonData.name}
                imageUrl={lessonData.imageUrl}
                genre={lessonData.genre}
                level={lessonData.level}
              />
              <ClassCard.Footer>{'장소'}</ClassCard.Footer>
            </ClassCard>
          )}
        </section>

        <section className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 16 })}>
          <Head level="h2" tag="h6_sb" color="black">
            수강생 관리
          </Head>

          <TabRoot>
            <TabList>
              <TabButton
                isSelected={selectedTab === 'APPROVED'}
                onClick={() => handleTabClick('APPROVED')}
                colorScheme="secondary">
                승인
              </TabButton>
              <TabButton
                isSelected={selectedTab === 'CANCELLED'}
                onClick={() => handleTabClick('CANCELLED')}
                colorScheme="secondary">
                취소
              </TabButton>
            </TabList>

            <hr className={styles.dividerStyle} />

            <TabPanel key={1} isSelected={selectedTab === 'APPROVED'}>
              {lessonData?.students.some(
                (student) =>
                  student.reservationStatus === 'PENDING_APPROVAL' || student.reservationStatus === 'APPROVED'
              ) ? (
                <>
                  <StudentList
                    reservationStatus="PENDING_APPROVAL"
                    studentList={
                      lessonData?.students.filter((student) => student.reservationStatus === 'PENDING_APPROVAL') ?? []
                    }
                  />
                  <StudentList
                    reservationStatus="APPROVED"
                    studentList={
                      lessonData?.students.filter((student) => student.reservationStatus === 'APPROVED') ?? []
                    }
                  />
                </>
              ) : (
                <Text tag="b1_sb" color="gray9" className={styles.emptyTextStyle}>
                  아직 신청한 수강생이 없어요.
                </Text>
              )}
            </TabPanel>
            <TabPanel key={2} isSelected={selectedTab === 'CANCELLED'}>
              {lessonData?.students.some(
                (student) =>
                  student.reservationStatus === 'PENDING_CANCELLATION' || student.reservationStatus === 'CANCELLED'
              ) ? (
                <>
                  <StudentList
                    reservationStatus="PENDING_CANCELLATION"
                    studentList={
                      lessonData?.students.filter((student) => student.reservationStatus === 'PENDING_CANCELLATION') ??
                      []
                    }
                  />
                  <StudentList
                    reservationStatus="CANCELLED"
                    studentList={
                      lessonData?.students.filter((student) => student.reservationStatus === 'CANCELLED') ?? []
                    }
                  />
                </>
              ) : (
                <Text tag="b1_sb" color="gray9" className={styles.emptyTextStyle}>
                  아직 취소한 수강생이 없어요.
                </Text>
              )}
            </TabPanel>
          </TabRoot>
        </section>
      </div>
    </div>
  );
};

export default ClassDetail;
