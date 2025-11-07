import { useEffect } from 'react';
import type { UseFormReset } from 'react-hook-form';
import type { LessonDetailResponseTypes } from '@/pages/class/types/api';
import type { LocationTypes } from '@/pages/instructor/classRegister/types';
import type { ClassRegisterFormTypes } from '@/pages/instructor/classRegister/types/classRegisterForm';
import { genreMapping, levelMapping } from '@/shared/constants';

interface UseClassEditModeProps {
  isEditMode: boolean;
  lessonData: LessonDetailResponseTypes | undefined;
  reset: UseFormReset<ClassRegisterFormTypes>;
  setImageUrls: (value: { imageUrls: string }) => void;
  setTimes: (value: { startTime: string; endTime: string; date: string; duration: number }[]) => void;
  setSelectedLocation: (value: LocationTypes | null) => void;
}

export const useClassEditMode = ({
  isEditMode,
  lessonData,
  reset,
  setImageUrls,
  setTimes,
  setSelectedLocation,
}: UseClassEditModeProps) => {
  useEffect(() => {
    if (isEditMode && lessonData) {
      // 장르와 레벨을 한글로 변환
      const genreKorean = lessonData.genre ? genreMapping[lessonData.genre] || '' : '';
      const levelKorean = lessonData.level ? levelMapping[lessonData.level] || '' : '';

      // 일정 정보 포맷팅
      let formattedTimes: { startTime: string; endTime: string; date: string; duration: number }[] = [];
      if (lessonData.lessonRound?.lessonRounds) {
        formattedTimes = lessonData.lessonRound.lessonRounds.map((round) => {
          const start = new Date(round.startDateTime);
          const end = new Date(round.endDateTime);
          const duration = (end.getTime() - start.getTime()) / (1000 * 60 * 60); // 시간 단위로 변환

          return {
            startTime: round.startDateTime,
            endTime: round.endDateTime,
            date: start.toISOString().split('T')[0],
            duration,
          };
        });
      }

      // 장소 정보 설정
      let locationData: LocationTypes | null = null;
      if (lessonData.location) {
        locationData = {
          location: lessonData.location,
          streetAddress: lessonData.streetAddress,
          oldStreetAddress: lessonData.oldStreetAddress,
        };
      }

      // reset을 사용하여 새로운 defaultValues 설정
      reset({
        className: lessonData.name || '',
        detail: lessonData.detail || '',
        selectedGenre: genreKorean,
        selectedLevel: levelKorean,
        recommendation: lessonData.recommendation || '',
        maxReservationCount: String(lessonData.maxReservationCount || ''),
        price: String(lessonData.price || ''),
        imageUrls: lessonData.imageUrl || '',
        isUndecidedLocation: !lessonData.location,
        detailedAddress: lessonData.streetDetailAddress || '',
        selectedLocation: locationData,
      });

      // 외부 state 업데이트
      if (lessonData.imageUrl) {
        setImageUrls({ imageUrls: lessonData.imageUrl });
      }

      if (formattedTimes.length > 0) {
        setTimes(formattedTimes);
      }

      if (locationData) {
        setSelectedLocation(locationData);
      }
    }
  }, [isEditMode, lessonData, reset, setImageUrls, setTimes, setSelectedLocation]);
};
