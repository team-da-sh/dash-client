import { useParams } from 'react-router-dom';
import { useGetLessonDetail } from '@/pages/instructor/classDetail/apis/queries';
import * as styles from '@/pages/instructor/classDetail/classDetail.css';
import StudentCard from '@/pages/instructor/classDetail/components/StudentCard/StudentCard';
import ClassCard from '@/shared/components/ClassCard/ClassCard';
import Flex from '@/shared/components/Flex/Flex';
import Header from '@/shared/components/Header/Header';
import Text from '@/shared/components/Text/Text';

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
