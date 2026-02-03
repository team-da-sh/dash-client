import Head from '@/common/components/Head/Head';
import IcMyEmpty from '@/shared/assets/svg/IcMyEmpty';
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
