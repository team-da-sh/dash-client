import * as styles from '@/pages/reservation/components/TopInfoContent/topInfoContent.css';
import Head from '@/shared/components/Head/Head';

interface TopInfoContentPropTypes {
  name: string;
  teacherNickname: string;
  imageUrl: string;
}

const TopInfoContent = ({ name, teacherNickname, imageUrl }: TopInfoContentPropTypes) => {
  return (
    <div
      className={styles.topImgStyle}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}>
      <div className={styles.gradientOverlayStyle} />
      <div className={styles.textWrapperStyle}>
        <Head level="h3" tag="h5_sb" color="white">
          {name}
        </Head>
        <Head level="h5" tag="b1_sb" color="gray4">
          {teacherNickname}
        </Head>
      </div>
    </div>
  );
};

export default TopInfoContent;
