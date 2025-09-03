import * as styles from '@/pages/instructor/classDetail/components/StudentCard/studentCard.css';
import { formatPhoneNumber } from '@/pages/instructor/utils/format';
import ApplyTag from '@/shared/components/ApplyTag/ApplyTag';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import Head from '@/shared/components/Head/Head';
import Text from '@/shared/components/Text/Text';

interface studentsPropTypes {
  name: string;
  phoneNumber: string;
  createdAt: string;
  status: string;
}

interface StudentCardPropTypes {
  studentData: studentsPropTypes;
  index: number;
}

const StudentCard = ({ studentData, index }: StudentCardPropTypes) => {
  return (
    <section className={styles.cardContainerStyle}>
      <section className={styles.leftWrapper}>
        <Head level="h2" tag="b1_sb">
          {index + 1}
        </Head>

        <div className={styles.infoWrapper}>
          <div className={styles.nameWrapper}>
            <Head level="h2" tag="b1_sb">
              {studentData.name}
            </Head>
            <ApplyTag variant="PENDING_APPROVAL">승인대기</ApplyTag>
          </div>
          <Text tag="b3_r" color="gray7">
            {formatPhoneNumber(studentData.phoneNumber)}
          </Text>
        </div>
      </section>

      <section className={styles.rightWrapper}>
        <Text tag="c1_r" color="gray9">
          {studentData.createdAt}
        </Text>
        <BoxButton variant="outline">승인 확정</BoxButton>
      </section>
    </section>
  );
};

export default StudentCard;
