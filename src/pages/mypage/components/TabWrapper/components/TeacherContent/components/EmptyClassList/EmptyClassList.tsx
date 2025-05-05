import Head from '@/shared/components/Head/Head';
import * as styles from './EmptyClassList.css';

const EmptyClassList = () => {
  return (
    <section className={styles.layoutStyle}>
      <img src="images/asset_my_empty.png" />
      <Head level="h3" tag="h6_sb" color="gray6">
        개설된 클래스가 없어요
      </Head>
    </section>
  );
};

export default EmptyClassList;
