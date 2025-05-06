import * as styles from '@/pages/instructor/classDetail/components/StudentCard/studentCard.css';
import { formatPhoneNumber } from '@/pages/instructor/utils/format';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import { formatDateTime } from '@/shared/utils/timeCalculate';

interface studentsPropTypes {
  name: string;
  phoneNumber: string;
  createdAt: string;
}

interface StudentCardPropTypes {
  students: studentsPropTypes;
  index: number;
}

const StudentCard = ({ students, index }: StudentCardPropTypes) => {
  return (
    <section className={styles.cardContainerStyle}>
      <div className={styles.cardNumberStyle}>
        <Head level="h2" tag="b1_sb">
          {index + 1}
        </Head>
      </div>
      <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' })}>
        <Text tag="b3_sb" color="black">
          {students.name}
        </Text>
        <div
          className={sprinkles({
            display: 'flex',
            gap: 35,
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
          })}>
          <Text tag="b3_m" color="gray9">
            {formatPhoneNumber(students.phoneNumber)}
          </Text>
          <Text tag="c1_r" color="gray9">
            {formatDateTime(students.createdAt)}
          </Text>
        </div>
      </div>
    </section>
  );
};

export default StudentCard;
