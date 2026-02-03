'use client';

import { useRouter } from 'next/navigation';
import { useGetMyLessons } from '@/app/mypage/(instructor)/classes/apis/queries';
import { emptyTextStyle } from '@/app/mypage/(instructor)/classes/components/lessonList/lessonList.css';
import type { LessonStatus } from '@/app/mypage/(instructor)/classes/types/lessonStatus';
import BoxButton from '@/common/components/BoxButton/BoxButton';
import Text from '@/common/components/Text/Text';
import ClassCard from '@/shared/components/ClassCard';
import { USER_ROLE } from '@/shared/constants/userRole';
import type { Lesson } from '@/shared/types/lessonTypes';

interface LessonListProps {
  status: LessonStatus;
}

const LessonList = ({ status }: LessonListProps) => {
  const { data: lessonData } = useGetMyLessons(status);

  const router = useRouter();

  const handleClassCardClick = (id: number) => {
    router.push(`/class/${id}`);
  };

  const handleDetailButtonClick = (id: number) => {
    router.push(`/mypage/classes/${id}`);
  };

  if (!lessonData) return <></>;

  return (
    <>
      {lessonData?.count > 0 ? (
        lessonData?.lessons.map((lesson: Lesson) => (
          <ClassCard key={lesson.id}>
            <ClassCard.Header role={USER_ROLE.TEACHER} status={lesson.applyStatus} date={lesson.lessonDateTime} />
            <ClassCard.Body onClick={() => handleClassCardClick(lesson.id)} {...lesson} />
            <ClassCard.Footer showAsk={false}>
              <BoxButton variant="outline" onClick={() => handleDetailButtonClick(lesson.id)}>
                상세보기
              </BoxButton>
            </ClassCard.Footer>
          </ClassCard>
        ))
      ) : (
        <Text tag="b1_sb" color="gray7" className={emptyTextStyle}>
          해당하는 클래스가 없어요.
        </Text>
      )}
    </>
  );
};

export default LessonList;
