import * as styles from '@/pages/instructor/classDetail/components/StudentCard/studentCard.css';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { formatDateTime } from '@/shared/utils/timeCalculate';

interface studentsProps {
  name: string;
  phoneNumber: string;
  createdAt: string;
}

interface StudentCardProps {
  students: studentsProps;
  index: number;
}

const StudentCard = ({ students, index }: StudentCardProps) => {
  return (
    <div className={styles.cardContainerStyle}>
      <div className={styles.cardNumberStyle}>
        <Head level="h2" tag="b1_sb">
          {index + 1}
        </Head>
      </div>
      <Flex direction="column" gap="0.2rem" width="100%">
        <Text tag="b3_sb">{students.name}</Text>
        <Flex gap="3.5rem" align="center" width="100%" justify="spaceBetween">
          <Text tag="b3_m" color="gray9">
            {students.phoneNumber}
          </Text>
          <Text tag="c1_r" color="gray9">
            {formatDateTime(students.createdAt)}
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default StudentCard;
