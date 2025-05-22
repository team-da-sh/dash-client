import { useMemo } from 'react';
import TimeControl from '@/pages/instructor/classRegister/components/ClassSchedule/TimeStep/TimeControl/TimeControl';
import Flex from '@/shared/components/Flex/Flex';
import Head from '@/shared/components/Head/Head';
import Tag from '@/shared/components/Tag/Tag';
import Text from '@/shared/components/Text/Text';
import { TIME_RANGE } from '@/shared/constants';
import {
  decreaseHour,
  decreaseMinute,
  increaseHour,
  increaseMinute,
  toggleAmpm,
  convertTo24HourFormat,
  convertToMinutes,
  isTimeOverlapping,
  formatTimeDisplay,
} from '@/shared/utils/timeUtils';

interface TimeStepProps {
  hour: number;
  minute: number;
  ampm: string;
  setHour: React.Dispatch<React.SetStateAction<number>>;
  setMinute: React.Dispatch<React.SetStateAction<number>>;
  setAmpm: (value: string) => void;
  setSelectedTime: (value: number | null) => void;
  selectedTime: number | null;
  times?: { startTime: string; endTime: string; date: string; duration: number }[];
  startDate: string;
}

const TimeStep = ({
  hour,
  minute,
  ampm,
  setHour,
  setMinute,
  setAmpm,
  setSelectedTime,
  selectedTime,
  times = [],
  startDate,
}: TimeStepProps) => {
  // 선택된 날짜에 영향을 미치는 회차의 가장 늦은 종료 시간 찾기
  const latestEndTime = useMemo(() => {
    if (times.length === 0) return null;

    // 선택된 날짜 정보를 반복문 밖에서 한 번만 계산
    const selectedDateObj = new Date(startDate);
    const selectedDateStr = selectedDateObj.toDateString();

    let latest: Date | null = null;

    // 모든 일정 검사
    for (const time of times) {
      const existingEndTime = new Date(time.endTime);
      const endTimeDate = existingEndTime.toDateString();

      // 종료 날짜가 선택된 날짜와 다르면 건너뜀
      if (endTimeDate !== selectedDateStr) continue;

      // 최신 종료 시간 업데이트
      if (latest === null || existingEndTime > latest) {
        latest = existingEndTime;
      }
    }

    return latest;
  }, [times, startDate]);

  // 최소 선택 가능 시간 계산
  const minTimeConstraints = useMemo(() => {
    if (!latestEndTime) return null;

    const minHour = latestEndTime.getHours();
    const minMinute = latestEndTime.getMinutes();
    const minAmpm = minHour >= 12 ? 'PM' : 'AM';
    const display12Hour = minHour % 12 === 0 ? 12 : minHour % 12;

    return {
      hour: display12Hour,
      minute: minMinute,
      ampm: minAmpm,
    };
  }, [latestEndTime]);

  // 현재 시간이 최소 제한 시간보다 이전인지 확인하고 필요시 조정
  const checkAndAdjustTime = () => {
    if (minTimeConstraints && latestEndTime !== null) {
      // 시간을 분으로 변환하여 비교
      const currentTotalMinutes = convertToMinutes(hour, minute, ampm);
      const minTotalMinutes = convertToMinutes(
        minTimeConstraints.hour,
        minTimeConstraints.minute,
        minTimeConstraints.ampm
      );

      // 현재 시간이 최소 시간보다 이전이면 최소 시간으로 설정
      if (currentTotalMinutes < minTotalMinutes) {
        setHour(minTimeConstraints.hour);
        setMinute(minTimeConstraints.minute);
        setAmpm(minTimeConstraints.ampm);
        return true;
      }
    }
    return false;
  };

  // 시간 제약 조건이 변경될 때 자동으로 시간 조정
  // 주의: 이 방식은 렌더링마다 실행되지만 조건을 충족할 때만 상태를 변경함
  if (minTimeConstraints && latestEndTime !== null) {
    checkAndAdjustTime();
  }

  // 시간 겹침 확인
  const hasTimeConflict = (hourValue: number, minuteValue: number, ampmValue: string, duration: number) => {
    if (times.length === 0) return false;

    // 선택된 시간을 24시간 형식으로 변환
    const selectedHour = convertTo24HourFormat(hourValue, ampmValue);

    // 새로운 일정의 시작 및 종료 시간 계산
    const dateParts = startDate.split('-');
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1; // 월은 0부터 시작
    const day = parseInt(dateParts[2]);

    const newStartDate = new Date(year, month, day, selectedHour, minuteValue, 0, 0);
    const newEndDate = new Date(newStartDate);
    newEndDate.setHours(newEndDate.getHours() + duration);

    // 모든 일정과 시간 충돌 검사 (날짜 제한 없이)
    for (const existingTime of times) {
      const existingStartTime = new Date(existingTime.startTime);
      const existingEndTime = new Date(existingTime.endTime);

      // timeUtils의 isTimeOverlapping 함수 사용
      if (isTimeOverlapping(newStartDate, newEndDate, existingStartTime, existingEndTime)) {
        return true;
      }
    }

    // 가장 늦은 종료 시간보다 이전에 시작하는지 검사
    // 이 부분은 같은 날짜의 일정 뿐만 아니라, 이전 일정의 종료 시간도 고려해야 함
    for (const existingTime of times) {
      const existingEndTime = new Date(existingTime.endTime);

      // 새 일정 시작 시간이 기존 일정 종료 시간보다 이전이면서
      // 새 일정 시작 날짜가 기존 일정 종료 날짜와 같거나 이후인 경우
      if (
        newStartDate.getTime() < existingEndTime.getTime() &&
        newStartDate.toDateString() >= existingEndTime.toDateString()
      ) {
        return true;
      }
    }

    return false;
  };

  // 시간이 최소 제한 시간보다 이전인지 확인
  const isBeforeMinTime = (newHour: number, newMinute: number, newAmpm: string) => {
    if (!minTimeConstraints || latestEndTime === null) return false;

    // convertToMinutes 함수 사용하여 시간 비교
    const selectedTotalMinutes = convertToMinutes(newHour, newMinute, newAmpm);
    const minTotalMinutes = convertToMinutes(
      minTimeConstraints.hour,
      minTimeConstraints.minute,
      minTimeConstraints.ampm
    );

    return selectedTotalMinutes < minTotalMinutes;
  };

  // 시간 감소가 최소 시간 제한을 넘는지 확인
  const willHourDecreaseViolateMinTime = () => {
    const newHour = decreaseHour(hour);
    return isBeforeMinTime(newHour, minute, ampm);
  };

  // 분 감소가 최소 시간 제한을 넘는지 확인
  const willMinuteDecreaseViolateMinTime = () => {
    if (minute === 30) {
      // 30분에서 0분으로 감소
      return isBeforeMinTime(hour, 0, ampm);
    } else if (minute === 0) {
      // 0분에서 이전 시간 30분으로 감소
      const newHour = decreaseHour(hour);
      return isBeforeMinTime(newHour, 30, ampm);
    }
    return false; // 다른 케이스는 없지만 타입 안전성을 위해 추가
  };

  // AM/PM 전환이 최소 시간 제한을 넘는지 확인
  const willAmpmToggleViolateMinTime = () => {
    const newAmpm = toggleAmpm(ampm);
    return isBeforeMinTime(hour, minute, newAmpm);
  };

  // 시간 증가 처리
  const handleIncreaseHour = () => {
    const newHour = increaseHour(hour);
    setHour(newHour);
  };

  // 시간 감소 처리
  const handleDecreaseHour = () => {
    const newHour = decreaseHour(hour);
    setHour(newHour);
  };

  // 분 증가 처리
  const handleIncreaseMinute = () => {
    const newMinute = increaseMinute({ currentMinute: minute, setHour });
    setMinute(newMinute);
  };

  // 분 감소 처리
  const handleDecreaseMinute = () => {
    const newMinute = decreaseMinute({ currentMinute: minute, setHour });
    setMinute(newMinute);
  };

  // AM/PM 전환 처리
  const handleToggleAmpm = () => {
    const newAmpm = toggleAmpm(ampm);
    setAmpm(newAmpm);
  };

  const handleTagClick = (id: number) => {
    setSelectedTime(selectedTime === id ? null : id);
  };

  // 최소 가능 시간 표시 (formatTimeDisplay 함수 사용)
  const minTimeDisplay = minTimeConstraints
    ? formatTimeDisplay(minTimeConstraints.hour, minTimeConstraints.minute, minTimeConstraints.ampm)
    : null;

  return (
    <Flex direction="column">
      <Head level="h2" tag="b1_sb">
        클래스 시작 시간
      </Head>

      {latestEndTime !== null && minTimeDisplay && (
        <Flex paddingTop="0.8rem">
          <Text tag="b3_r" color="main3">
            이전 회차 종료 시간({minTimeDisplay}) 이후로만 등록 가능합니다.
          </Text>
        </Flex>
      )}

      <Flex justify="center" gap="1rem" paddingTop="1.6rem" paddingBottom="2.4rem" width="100%">
        <TimeControl
          label="hour"
          value={hour}
          onIncrease={handleIncreaseHour}
          onDecrease={handleDecreaseHour}
          disableDecrease={willHourDecreaseViolateMinTime()}
        />
        <TimeControl
          label="minute"
          value={minute}
          onIncrease={handleIncreaseMinute}
          onDecrease={handleDecreaseMinute}
          disableDecrease={willMinuteDecreaseViolateMinTime()}
        />
        <TimeControl
          label="ampm"
          value={ampm}
          onIncrease={handleToggleAmpm}
          onDecrease={handleToggleAmpm}
          disableIncrease={willAmpmToggleViolateMinTime()}
          disableDecrease={willAmpmToggleViolateMinTime()}
        />
      </Flex>

      <Head level="h2" tag="b1_sb">
        클래스 진행 시간
      </Head>

      <Flex wrap="wrap" gap="0.8rem" paddingTop="1.6rem">
        {TIME_RANGE.map((time) => {
          const timeConflict = hasTimeConflict(hour, minute, ampm, time.id);
          return (
            <Tag
              key={time.id}
              size="timeSelector"
              isSelected={selectedTime === time.id}
              onClick={() => !timeConflict && handleTagClick(time.id)}
              style={timeConflict ? { opacity: 0.5, cursor: 'not-allowed' } : undefined}>
              {time.label}
            </Tag>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default TimeStep;
