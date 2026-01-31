import StudentCard from '@/app/mypage/(instructor)/classes/[id]/components/StudentCard/StudentCard';
import {
  pannelTitleWrapper,
  studentListWrapper,
  textStyle,
} from '@/app/mypage/(instructor)/classes/[id]/components/StudentList/StudentList.css';
import type { TabStatus } from '@/app/mypage/(instructor)/classes/[id]/types/api';
import type { Student } from '@/app/mypage/(instructor)/classes/[id]/types/api';
import { STATUS_KOREAN_MAP } from '@/app/mypage/(student)/reservations/constants/statusMap';
import type { ReservationStatus } from '@/app/mypage/(student)/reservations/types/reservationStatus';
import Divider from '@/common/components/Divider/Divider';
import Text from '@/common/components/Text/Text';

interface StudentListProps {
  reservationStatus: ReservationStatus;
  studentList: Student[];
  lessonId: number;
  selectedTab: TabStatus;
}

const StudentList = ({ reservationStatus, studentList, lessonId, selectedTab }: StudentListProps) => {
  return (
    <>
      {studentList.length > 0 && (
        <div>
          <div className={pannelTitleWrapper}>
            <Text tag="b2_sb" className={textStyle}>
              {STATUS_KOREAN_MAP[reservationStatus]}
            </Text>
            <Divider color="black" />
          </div>

          <ul className={studentListWrapper}>
            {studentList.map((student, index) => (
              <StudentCard index={index} studentData={student} lessonId={lessonId} selectedTab={selectedTab} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default StudentList;
