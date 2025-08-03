import { useGetRole } from '@/shared/apis/queries';
import IcArrowRightGray0614 from '@/shared/assets/svg/IcArrowRightGray0614';
import SvgIcClearAlert20 from '@/shared/assets/svg/IcClearAlert20';
import SvgIcClearGray0920 from '@/shared/assets/svg/IcClearGray0920';
import SvgIcClearMain0320 from '@/shared/assets/svg/IcClearMain0320';
import SvgIcMeatballAlert20 from '@/shared/assets/svg/IcMeatballAlert20';
import SvgIcMeatballMain0320 from '@/shared/assets/svg/IcMeatballMain0320';
import * as styles from '@/shared/components/ClassCard/classCard.css';
import Divider from '@/shared/components/Divider/Divider';
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
  role: 'student' | 'teacher';
  children?: React.ReactNode;
}

const studentStatus = (status: string) => {
  switch (status) {
    case 'waittingPermission':
      return [<SvgIcMeatballMain0320 width={20} />, '승인 대기'];
    case 'permission':
      return [<SvgIcClearMain0320 width={20} />, '승인 완료'];
    case 'register':
      return [<SvgIcClearGray0920 width={20} />, '수강 완료'];
    case 'waittingCancle':
      return [<SvgIcMeatballAlert20 width={20} />, '취소 대기'];
    case 'cancle':
      return [<SvgIcClearAlert20 width={20} />, '취소 완료'];
    default:
      return [null, '상태 불명'];
  }
};

const teacherStatus = (status: string) => {
  switch (status) {
    case 'recruiting':
      return [<SvgIcMeatballMain0320 width={20} />, '모집 중'];
    case 'recruitingEnd':
      return [<SvgIcClearMain0320 width={20} />, '모집 완료'];
    default:
      return [null, '상태 불명'];
  }
};

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

  const { data: role } = useGetRole();

  const [statusIcon, statusText] =
    role?.role === 'student' ? studentStatus('waittingPermission') : teacherStatus('recruiting');

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
          })}>
          <div className={sprinkles({ marginRight: 5, display: 'flex', alignItems: 'center' })}>{statusIcon}</div>
          <Text tag="b1_sb">{statusText}</Text>
          {isReservation && status === 'upcoming' && remainingDays !== undefined && (
            <Text tag="b3_m" color="main4">
              D-{remainingDays}
            </Text>
          )}
        </div>
      </div>

      <Divider color="gray1" className={styles.dividerStyle} />

      {/* 이미지/정보 영역 */}
      <div
        className={sprinkles({
          display: 'flex',
          gap: 12,
        })}>
        <img src={imageUrl} className={styles.cardImageStyle} alt={`${name}`} />
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
      {children && <div className={sprinkles({ display: 'flex', gap: 7, mt: 12 })}>{children}</div>}
      {isReservation && (
        <div className={styles.askTextStyle}>
          <Text tag="b3_m" color="gray7" onClick={handleTextClick}>
            문의하기
          </Text>
          <IcArrowRightGray0614 width="1.4rem" height="1.4rem" />
        </div>
      )}
    </div>
  );
};

export default ClassCard;
