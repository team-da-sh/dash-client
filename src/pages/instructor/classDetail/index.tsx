import StudentCard from '@/pages/instructor/classDetail/StudentCard';
import * as styles from '@/pages/instructor/classDetail/index.css';
import { LESSON_DETAIL } from '@/pages/instructor/classDetail/mocks/mockLessonDetail';
import ClassCard from '@/components/ClassCard';
import Flex from '@/components/Flex';
import Header from '@/components/Header';
import Text from '@/components/Text';

const ClassDetail = () => {
  const lesson = LESSON_DETAIL[0];

  // 신청한 수강생 수
  const totalStudents = lesson.participants.length;

  return (
    <div className={styles.layoutStyle}>
      <Header.Root isColor={true}>
        <Header.BackIcon />
        <Header.Title title="내 클래스 목록" />
      </Header.Root>

      <div className={styles.containerStyle}>
        <Flex tag="section" gap="1.6rem" direction="column" marginBottom="2.8rem">
          <Text tag="b4" color="gray9">
            내 클래스 정보
          </Text>
          <ClassCard
            lessonId={lesson.lessonId}
            lessonName={lesson.lessonName}
            lessonImageUrl={lesson.lessonImageUrl}
            lessonGenre={lesson.lessonGenre}
            lessonLevel={lesson.lessonLevel}
            lessonLocation={lesson.lessonLocation}
            lessonStartDateTime={lesson.lessonStartDateTime}
            lessonEndDateTime={lesson.lessonEndDateTime}
            isReservation={false}
          />
        </Flex>

        <Flex tag="section" gap="1.6rem" direction="column">
          <Text tag="b4" color="gray9">
            신청한 수강생 ( {totalStudents} )
          </Text>
          {lesson.participants.map((participants, index) => (
            <StudentCard key={participants.reservationId} participants={participants} index={index} />
          ))}
        </Flex>
      </div>
    </div>
  );
};

export default ClassDetail;
