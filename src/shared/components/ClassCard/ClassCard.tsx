import IcArrowRightGray0614 from '@/shared/assets/svg/IcArrowRightGray0614';
import IcClassEndMain0324 from '@/shared/assets/svg/IcClassEndMain0324';
import IcClassIngMain0324 from '@/shared/assets/svg/IcClassIngMain0324';
import IcClassSoonMain0324 from '@/shared/assets/svg/IcClassSoonMain0324';
import * as styles from '@/shared/components/ClassCard/classCard.css';
// sprinkles import
import Head from '@/shared/components/Head/Head';
import Tag from '@/shared/components/Tag/Tag';
import Text from '@/shared/components/Text/Text';
import { genreMapping, levelMapping } from '@/shared/constants';
import { sprinkles } from '@/shared/styles/sprinkles.css';
import type { Lesson } from '@/shared/types/lessonTypes';
import { formatLessonDateRange, getClassStatus } from '@/shared/utils/timeCalculate';

interface ClassCardPropTypes extends Lesson {
  isReservation?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const ClassCard = ({
  name,
  imageUrl,
  genre,
  level,
  location,
  detailedAddress,
  startDateTime,
  endDateTime,
  isReservation = true,
  children,
  onClick,
}: ClassCardPropTypes) => {
  const { status, remainingDays } = getClassStatus(startDateTime, endDateTime);

  const korstatus = () => {
    if (isReservation) {
      switch (status) {
        case 'upcoming':
          return '수강예정';
        case 'ongoing':
          return '수강중';
        case 'completed':
          return '수강완료';
        default:
          return '';
      }
    } else {
      switch (status) {
        case 'upcoming':
          return '모집중';
        case 'completed':
        case 'ongoing':
          return '모집완료';
        default:
          return '';
      }
    }
  };

  const statusIcon = () => {
    if (!isReservation && status === 'upcoming') {
      return <IcClassIngMain0324 width="1.8rem" />;
    }

    switch (status) {
      case 'upcoming':
        return <IcClassSoonMain0324 width="1.8rem" />;
      case 'ongoing':
        return <IcClassIngMain0324 width="1.8rem" />;
      case 'completed':
        return <IcClassEndMain0324 width="1.8rem" />;
      default:
        return null;
    }
  };

  const handleTextClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open('https://forms.gle/JMYzQGxEdVHVogsE6', '_blank');
  };

  return (
    <div className={styles.cardContainerStyle} onClick={onClick}>
      <div
        className={sprinkles({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        })}>
        <div
          className={sprinkles({
            display: 'flex',
            alignItems: 'center',
            gap: 3,
            marginBottom: 12,
          })}>
          <div className={sprinkles({ marginRight: 5 })}>{statusIcon()}</div>
          <Text tag="b2_sb" color={status === 'completed' ? 'gray8' : 'black'}>
            {korstatus()}
          </Text>
          {isReservation && status === 'upcoming' && remainingDays !== undefined && (
            <Text tag="b3_m" color="main4">
              D - {remainingDays}
            </Text>
          )}
        </div>

        {isReservation && (
          <div
            className={sprinkles({
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            })}>
            <Text tag="b3_m" color="gray7" onClick={handleTextClick}>
              문의하기
            </Text>
            <IcArrowRightGray0614 width="1.4rem" height="1.4rem" />
          </div>
        )}
      </div>

      {/* 이미지/정보 영역 */}
      <div
        className={sprinkles({
          display: 'flex',
          gap: 12,
          marginBottom: 16,
        })}>
        <img src={imageUrl} className={styles.cardImageStyle} alt={`${name} 이미지`} />
        <div
          className={
            sprinkles({
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }) +
            ' ' +
            styles.cardContentStyle
          }>
          <div className={sprinkles({ display: 'flex', gap: 3 })}>
            <Tag type="genre" size="small">
              {genre && genreMapping[genre]}
            </Tag>
            <Tag type="level" size="small">
              {level && levelMapping[level]}
            </Tag>
          </div>
          <Head level="h2" tag="b1_sb" className={styles.lessonNameStyle}>
            {name}
          </Head>
          <div className={sprinkles({ display: 'flex', flexDirection: 'column', gap: 4 })}>
            <div className={sprinkles({ display: 'flex', gap: 8, alignItems: 'center' })}>
              <Text tag="c1_sb" color="gray7">
                일정
              </Text>
              <Text tag="c1_r" color="gray9">
                {startDateTime && endDateTime && formatLessonDateRange(startDateTime, endDateTime)}
              </Text>
            </div>
            <div className={sprinkles({ display: 'flex', gap: 8, alignItems: 'center' })}>
              <Text tag="c1_sb" color="gray7">
                장소
              </Text>
              <Text tag="c1_r" color="gray9">
                {location || detailedAddress ? location : '미정'}
              </Text>
            </div>
          </div>
        </div>
      </div>
      {children && <div className={sprinkles({ display: 'flex', gap: 7 })}>{children}</div>}
    </div>
  );
};

export default ClassCard;
