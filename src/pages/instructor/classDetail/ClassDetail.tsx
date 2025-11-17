import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetLessonDetail } from '@/pages/instructor/classDetail/apis/queries';
import * as styles from '@/pages/instructor/classDetail/classDetail.css';
import StudentList from '@/pages/instructor/classDetail/components/StudentList/StudentList';
import ClassInfo from '@/pages/mypage/components/mypageReservationDetail/components/ClassInfo/ClassInfo';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import ClassCard from '@/shared/components/ClassCard';
import Divider from '@/shared/components/Divider/Divider';
import Head from '@/shared/components/Head/Head';
import { TabButton, TabList, TabPanel, TabRoot } from '@/shared/components/Tab';
import Text from '@/shared/components/Text/Text';
import { USER_ROLE } from '@/shared/constants/userRole';
import { sprinkles } from '@/shared/styles/sprinkles.css';

export type TabStatus = 'APPROVE' | 'CANCEL';

const ClassDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [selectedTab, setSelectedTab] = useState<TabStatus>('APPROVE');

  const { data: lessonData } = useGetLessonDetail(Number(id), selectedTab);

  const handleTabClick = (tabId: TabStatus) => {
    setSelectedTab(tabId);
  };

  const handleEditClick = () => {
    if (id) {
      navigate(ROUTES_CONFIG.classEdit.path(id));
    }
  };

  const isClassStarted = lessonData ? new Date() >= new Date(lessonData.startDateTime) : false;

  return (
    <div className={styles.layoutStyle}>
      <div className={styles.containerStyle}>
        <Head level="h2" tag="h6_sb" color="black">
          내 클래스 정보
        </Head>
        <section className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 8 })}>
          {lessonData && (
            <div
              onClick={() => {
                navigate(ROUTES_CONFIG.class.path(lessonData.id.toString()));
              }}>
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
                <ClassCard.Footer>
                  <ClassInfo
                    lessonRound={lessonData.rounds}
                    location={lessonData.location}
                    locationDetail={lessonData.detailedAddress}
                  />
                </ClassCard.Footer>
              </ClassCard>
            </div>
          )}
          <BoxButton variant="primary" onClick={handleEditClick} disabled={isClassStarted}>
            수정하기
          </BoxButton>
        </section>
        <Head level="h2" tag="h6_sb" color="black">
          수강생 관리
        </Head>
      </div>

      <TabRoot>
        <TabList className={styles.tabListStyle}>
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

        <TabPanel key={1} isSelected={selectedTab === 'APPROVE'} className={styles.tabPanelStyle}>
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
            <Text tag="b1_sb" color="gray9" className={styles.emptyTextStyle}>
              아직 신청한 수강생이 없어요.
            </Text>
          )}
        </TabPanel>
        <TabPanel key={2} isSelected={selectedTab === 'CANCEL'} className={styles.tabPanelStyle}>
          {lessonData?.students.some(
            (student) =>
              student.reservationStatus === 'PENDING_CANCELLATION' || student.reservationStatus === 'CANCELLED'
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
            <Text tag="b1_sb" color="gray9" className={styles.emptyTextStyle}>
              아직 취소한 수강생이 없어요.
            </Text>
          )}
        </TabPanel>
      </TabRoot>
    </div>
  );
};

export default ClassDetail;
