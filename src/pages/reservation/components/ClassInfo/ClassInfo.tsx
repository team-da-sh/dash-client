import {
  infoContainerStyle,
  textLabelStyle,
  contentWrapperStyle,
  infoSectionStyle,
  rowStyle,
  scheduleWrapperStyle,
  scheduleItemStyle,
  locationInfoStyle,
} from '@/pages/reservation/components/ClassInfo/classInfo.css';
import Head from '@/common/components/Head/Head';
import Text from '@/common/components/Text/Text';
import { levelMapping } from '@/shared/constants';
import { calculatePeriod, formatDateToSimpleKR } from '@/shared/utils/date';

interface ClassInfoPropTypes {
  lessonName: string;
  location: string;
  locationDetail?: string;
  teacherNickname: string;
  level: string;
  lessonRound?: LessonRoundPropTypes[];
}

interface LessonRoundPropTypes {
  startDateTime: string;
  endDateTime: string;
}

const ClassInfo = ({
  lessonName,
  location,
  locationDetail,
  teacherNickname,
  level,
  lessonRound = [],
}: ClassInfoPropTypes) => {
  return (
    <div className={infoContainerStyle}>
      <div className={contentWrapperStyle}>
        <Head level="h5" tag="b1_sb">
          {lessonName}
        </Head>
        <div className={infoSectionStyle}>
          <div className={rowStyle}>
            <Text tag="b3_sb_narrow" color="gray7" className={textLabelStyle}>
              강사
            </Text>
            <Text tag="b3_m" color="gray10">
              {teacherNickname}
            </Text>
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
                      {id + 1}회차: {formatDateToSimpleKR(round.startDateTime)}
                    </Text>
                    <Text tag="b3_m" color="gray6">
                      {startTime} - {formattedEndTime} ({durationString})
                    </Text>
                  </div>
                );
              })}
            </div>
          </div>

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
              난이도
            </Text>
            <Text tag="b3_m" color="gray10">
              {levelMapping[level]}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassInfo;
