'use client';

import { useRouter } from 'next/navigation';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import LessonItem from '@/app/(home)/components/LessonItem/LessonItem';
import type { lessonResponseTypes, LessonDataResponseTypes } from '@/app/mypage/components/TeacherContent/types/api';
import * as styles from './teacherLessons.css';

const TeacherLessons = ({ data }: { data: LessonDataResponseTypes }) => {
  const router = useRouter();

  const handleCardClick = (id: number, e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.stopPropagation();

    router.push(ROUTES_CONFIG.instructorClassDetail.path(id.toString()));
  };

  return (
    <ul className={styles.containerStyle}>
      {data?.lessons?.map((lesson: lessonResponseTypes) => (
        <li key={lesson.id} onClickCapture={(e) => handleCardClick(lesson.id, e)}>
          <LessonItem
            linkType="manage"
            id={lesson.id}
            genre={lesson.genre}
            level={lesson.level}
            name={lesson.name}
            imageUrl={lesson.imageUrl}
            remainingDays={lesson.dDay}
            teacherProfileImage={''}
            teacherName={''}
            startDate={''}
            endDate={''}
            useNewStyles={false}
            isMyPage={true}
          />
        </li>
      ))}
    </ul>
  );
};

export default TeacherLessons;
