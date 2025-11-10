import type { TabStatus } from '@/pages/instructor/classDetail/ClassDetail';
import StudentCard from '@/pages/instructor/classDetail/components/StudentCard/StudentCard';
import {
  pannelTitleWrapper,
  studentListWrapper,
  textStyle,
} from '@/pages/instructor/classDetail/components/StudentList/StudentList.css';
import type { Student } from '@/pages/instructor/classDetail/types/api';
import { STATUS_KOREAN_MAP } from '@/pages/mypage/components/mypageReservation/constants/statusMap';
import type { ReservationStatus } from '@/pages/mypage/components/mypageReservation/types/reservationStatus';
import Divider from '@/shared/components/Divider/Divider';
import Text from '@/shared/components/Text/Text';

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
