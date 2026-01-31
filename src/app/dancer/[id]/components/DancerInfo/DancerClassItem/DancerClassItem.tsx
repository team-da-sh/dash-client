'use client';

import {
  classImageStyle,
  deadlineTagStyle,
  lessonNameStyle,
  sectionStyle,
  tagWrapperStyle,
} from '@/app/dancer/[id]/components/DancerInfo/DancerClassItem/dancerClassItem.css';
import type { ClassItemPropTypes } from '@/app/dancer/[id]/types/api';
import Head from '@/common/components/Head/Head';
import Tag from '@/common/components/Tag/Tag';
import { genreMapping, levelMapping } from '@/shared/constants/index';

const DancerClassItem = ({ imageUrl, remainingDays, genre, level, name }: ClassItemPropTypes) => {
  const renderDeadlineTag = () => {
    if (remainingDays < 0) {
      return (
        <Tag type="deadline" size="thumbnail" className={deadlineTagStyle}>
          마감
        </Tag>
      );
    }
    if (remainingDays === 0) {
      return (
        <Tag type="deadline" size="thumbnail" className={deadlineTagStyle}>
          D-DAY
        </Tag>
      );
    }
    if (remainingDays <= 4) {
      return (
        <Tag type="deadline" size="thumbnail" className={deadlineTagStyle}>
          마감 D-{remainingDays}
        </Tag>
      );
    }
    return null;
  };

  const translatedGenre = genreMapping[genre] || genre;
  const translatedLevel = levelMapping[level] || level;

  return (
    <section className={sectionStyle}>
      <img src={imageUrl} alt="클래스 섬네일" className={classImageStyle} />
      {renderDeadlineTag()}

      <div className={tagWrapperStyle}>
        <Tag type="genre" size="small">
          {translatedGenre}
        </Tag>
        <Tag type="level" size="small">
          {translatedLevel}
        </Tag>
      </div>
      <span className={lessonNameStyle}>
        <Head level="h5" tag="b1_sb_long">
          {name}
        </Head>
      </span>
    </section>
  );
};

export default DancerClassItem;
