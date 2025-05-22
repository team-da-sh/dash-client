import IcMyEmpty from '@/assets/svg/IcMyEmpty';
import Head from '@/shared/components/Head/Head';
import * as styles from './EmptyClassList.css';

const EmptyClassList = () => {
  return (
    <section className={styles.layoutStyle}>
      <IcMyEmpty width={66} height={88} />
      <Head level="h3" tag="h6_sb" color="gray6">
        개설된 클래스가 없어요
      </Head>
    </section>
  );
};

export default EmptyClassList;
