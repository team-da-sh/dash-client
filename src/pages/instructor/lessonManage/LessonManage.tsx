import { useState } from 'react';
import LessonList from '@/pages/instructor/lessonList/LessonList';
import { useGetLessonStatus } from '@/pages/instructor/lessonList/apis/queries';
import type { LessonStatus } from '@/pages/instructor/lessonList/types/lessonStatus';
import {
  layoutStyle,
  containerStyle,
  titleStyle,
  lessonListSectionStyle,
} from '@/pages/instructor/lessonManage/lessonManage.css';
import Dropdown from '@/common/components/Dropdown/Dropdown';
import Head from '@/common/components/Head/Head';

const options = ['ALL', 'APPLYING', 'FINISHED'] as const;

const STATUS_KOREAN_MAP: Record<LessonStatus, string> = {
  ALL: '전체',
  APPLYING: '모집 중',
  FINISHED: '모집완료',
};

const STATUS_ENGLISH_MAP = Object.fromEntries(
  Object.entries(STATUS_KOREAN_MAP).map(([key, value]) => [value, key])
) as Record<string, LessonStatus>;

const LessonManage = () => {
  const { data: lessonStatus } = useGetLessonStatus();

  const [selectedStatus, setSelectedStatus] = useState<LessonStatus>(options[0]);

  const combineCountAndStatus = (status: LessonStatus) => {
    const count = lessonStatus?.lessonsStatusCounts.filter((lessonStatus) => lessonStatus.status === status)[0].count;

    return `${STATUS_KOREAN_MAP[status]}(${count})`;
  };

  const statusOptions = options.map((option: LessonStatus) => combineCountAndStatus(option));

  const handleSelectedOption = (countAndStatus: string) => {
    const status = countAndStatus.split('(')[0];

    setSelectedStatus(STATUS_ENGLISH_MAP[status]);
  };

  return (
    <div className={layoutStyle}>
      <main className={containerStyle}>
        <Head level="h2" tag="h6_sb" color="black" className={titleStyle}>
          내 클래스 관리
        </Head>

        <Dropdown
          selectedOption={combineCountAndStatus(selectedStatus)}
          options={statusOptions}
          handleSelectedOption={handleSelectedOption}
        />

        <section className={lessonListSectionStyle}>
          <LessonList status={selectedStatus} />
        </section>
      </main>
    </div>
  );
};

export default LessonManage;
