import { useNavigate } from 'react-router-dom';
import * as styles from  '@/pages/class/components/ClassHeader/classHeader.css';
import IcBack from '@/shared/assets/svg/IcBack';
import IcBackWhite24 from '@/shared/assets/svg/IcBackWhite24';
import Head from '@/shared/components/Head/Head';

interface ClassHeaderPropTypes {
  isWhite: boolean;
  lessonName: string;
}

const ClassHeader = ({ isWhite, lessonName }: ClassHeaderPropTypes) => {
  const navigate = useNavigate();

  return (
    <section className={styles.containerStyle({ isWhite })}>
      <div className={styles.backIconStyle} onClick={() => navigate(-1)}>
        {isWhite ? <IcBack width={'2.4rem'} /> : <IcBackWhite24 width={'2.4rem'} />}
      </div>

      <div className={styles.classNameHeaderStyle}>
        {isWhite && (
          <Head level="h5" tag="h6" className={styles.headerTextStyle}>
            {lessonName}
          </Head>
        )}
      </div>
    </section>
  );
};

export default ClassHeader;
