import * as styles from '@/pages/dancer/components/DancerInfo/DancerClassItem/dancerClassItem.css';
import { ClassItemPropTypes } from '@/pages/dancer/types/api';
import Head from '@/shared/components/Head/Head';
import Tag from '@/shared/components/Tag/Tag';
import { genreMapping, levelMapping } from '@/shared/constants/index';
import { sprinkles } from '@/shared/styles/sprinkles.css';

const DancerClassItem = ({ imageUrl, remainingDays, genre, level, name }: ClassItemPropTypes) => {
  const renderDeadlineTag = () => {
    if (remainingDays < 0) {
      return (
        <Tag type="deadline" size="thumbnail" className={styles.deadlineTagStyle}>
          마감
        </Tag>
      );
    }
    if (remainingDays == 0) {
      return (
        <Tag type="deadline" size="thumbnail" className={styles.deadlineTagStyle}>
          D-DAY
        </Tag>
      );
    }
    if (remainingDays <= 4) {
      return (
        <Tag type="deadline" size="thumbnail" className={styles.deadlineTagStyle}>
          마감 D-{remainingDays}
        </Tag>
      );
    }
    return null;
  };

  const translatedGenre = genreMapping[genre] || genre;
  const translatedLevel = levelMapping[level] || level;

  return (
    <section className={styles.wrapperStyle}>
      <img src={imageUrl} alt="클래스 섬네일" className={styles.classImageStyle} />
      {renderDeadlineTag()}

      <div className={sprinkles({ display: 'flex', gap: 4 })}>
        <Tag type="genre" size="small">
          {translatedGenre}
        </Tag>
        <Tag type="level" size="small">
          {translatedLevel}
        </Tag>
      </div>

      <Head level="h5" tag="h7">
        {name}
      </Head>
    </section>
  );
};

export default DancerClassItem;
