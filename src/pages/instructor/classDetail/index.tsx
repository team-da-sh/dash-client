import { useParams } from 'react-router-dom';
import StudentCard from '@/pages/instructor/classDetail/StudentCard';
import * as styles from '@/pages/instructor/classDetail/index.css';
import ClassCard from '@/components/ClassCard';
import Flex from '@/components/Flex';
import Header from '@/components/Header';
import Text from '@/components/Text';
import { useGetLessonDetail } from '@/apis/classDetail/queries';

const ClassDetail = () => {
  const { id } = useParams<{ id: string }>();

  const lessonId = Number(id);

  const { data: lessonDetailData, isLoading, isError } = useGetLessonDetail(lessonId);

  if (isLoading) {
    return <></>;
  }

  if (isError) {
    return <></>;
  }

  return (
    <div className={styles.layoutStyle}>
      <Header.Root isColor={true}>
        <Header.BackIcon />
        <Header.Title title="내 클래스 관리" />
      </Header.Root>

      <div className={styles.containerStyle}>
        <Flex tag="section" gap="1.6rem" direction="column" marginBottom="2.8rem">
          <Text tag="b4" color="gray9">
            내 클래스 정보
          </Text>
          <ClassCard
            lessonId={lessonDetailData?.id}
            lessonName={lessonDetailData?.name}
            lessonImageUrl={lessonDetailData?.imageUrl}
            lessonGenre={lessonDetailData?.genre}
            lessonLevel={lessonDetailData?.level}
            lessonLocation={lessonDetailData?.location}
            lessonDetailedAddress={lessonDetailData?.detailedAddress}
            lessonStartDateTime={lessonDetailData?.startDateTime}
            lessonEndDateTime={lessonDetailData?.endDateTime}
            isReservation={false}
          />
        </Flex>

        <Flex tag="section" gap="1.6rem" direction="column">
          <Text tag="b4" color="gray9">
            신청한 수강생 ( {lessonDetailData?.studentCount} )
          </Text>
          {lessonDetailData?.students.map((students, index) => <StudentCard students={students} index={index} />)}
        </Flex>
      </div>
    </div>
  );
};

export default ClassDetail;
