import {
  textLabelStyle,
  infoContainerStyle,
  contentWrapperStyle,
  rowStyle,
  locationInfoStyle,
  scheduleWrapperStyle,
  scheduleItemStyle,
} from '@/pages/mypage/components/mypageReservationDetail/components/ClassInfo/ClassInfo.css';
import Text from '@/shared/components/Text/Text';
import { calculatePeriod, formatSimpleDate } from '@/shared/utils/dateCalculate';

interface ClassInfoPropTypes {
  location: string;
  locationDetail?: string;
  lessonRound?: LessonRoundPropTypes[];
}

interface LessonRoundPropTypes {
  startDateTime: string;
  endDateTime: string;
}

const ClassInfo = ({ location, locationDetail, lessonRound = [] }: ClassInfoPropTypes) => {
  return (
    <section className={infoContainerStyle}>
      <div className={contentWrapperStyle}>
        <div className={rowStyle}>
          <Text tag="b3_sb_narrow" color="gray7" className={textLabelStyle}>
            장소
          </Text>
          <div className={locationInfoStyle}>
            <Text tag="b3_m" color="gray10">
              {location ? location : '미정'}
            </Text>
            {locationDetail && (
              <Text tag="b3_m" color="gray6">
                {locationDetail}
              </Text>
            )}
          </div>
        </div>

        <div className={rowStyle}>
          <Text tag="b3_sb_narrow" color="gray7" className={textLabelStyle}>
            일정
          </Text>
          <div className={scheduleWrapperStyle}>
            {lessonRound.map((round, id) => {
              const { startTime, formattedEndTime, durationString } = calculatePeriod(
                round.startDateTime,
                round.endDateTime
              );
              return (
                <div className={scheduleItemStyle} key={id}>
                  <Text tag="b3_m" color="gray10">
                    {id + 1}회차: {formatSimpleDate(round.startDateTime)}
                  </Text>
                  <Text tag="b3_m" color="gray6">
                    {startTime} - {formattedEndTime} ({durationString})
                  </Text>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassInfo;
