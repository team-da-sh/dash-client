import * as styles from '@/pages/reservation/components/TopInfoContent/topInfoContent.css';
import Head from '@/shared/components/Head/Head';
import type { ReservationDetailResponseTypes } from "@/pages/reservation/types/api";

const TopInfoContent = ({ name, teacherNickname, imageUrl }: ReservationDetailResponseTypes) => {
  return (
      <div
        className={styles.topImgStyle}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}>
        <div className={styles.gradientOverlayStyle} />
        <div className={styles.textWrapperStyle}>
          <Head level="h3" tag="h4" color="white">
            {name}
          </Head>
          <Head level="h5" tag="h6" color="gray4">
            {teacherNickname}
          </Head>
        </div>
      </div>
  );
};

export default TopInfoContent;
