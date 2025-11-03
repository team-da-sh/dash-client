import { useEffect } from 'react';
import type { UseFormSetValue } from 'react-hook-form';
import type { LessonDetailResponseTypes } from '@/pages/class/types/api';
import type { LocationTypes } from '@/pages/instructor/classRegister/types';
import type { ClassRegisterFormTypes } from '@/pages/instructor/classRegister/types/classRegisterForm';
import { genreMapping, levelMapping } from '@/shared/constants';

interface UseClassEditModeProps {
  isEditMode: boolean;
  lessonData: LessonDetailResponseTypes | undefined;
  setValue: UseFormSetValue<ClassRegisterFormTypes>;
  setImageUrls: (value: { imageUrls: string }) => void;
  setTimes: (value: { startTime: string; endTime: string; date: string; duration: number }[]) => void;
  setSelectedLocation: (value: LocationTypes | null) => void;
}

export const useClassEditMode = ({
  isEditMode,
  lessonData,
  setValue,
  setImageUrls,
  setTimes,
  setSelectedLocation,
}: UseClassEditModeProps) => {
  useEffect(() => {
    if (isEditMode && lessonData) {
      // 클래스명
      setValue('className', lessonData.name || '');

      // 클래스 설명
      setValue('detail', lessonData.detail || '');

      // 장르 (영어 → 한글 변환)
      if (lessonData.genre) {
        const genreKorean = genreMapping[lessonData.genre] || '';
        setValue('selectedGenre', genreKorean);
      }

      // 레벨 (영어 → 한글 변환)
      if (lessonData.level) {
        const levelKorean = levelMapping[lessonData.level] || '';
        setValue('selectedLevel', levelKorean);
      }

      // 추천 대상
      setValue('recommendation', lessonData.recommendation || '');

      // 최대 인원
      setValue('maxReservationCount', String(lessonData.maxReservationCount || ''));

      // 가격
      setValue('price', String(lessonData.price || ''));

      // 이미지
      if (lessonData.imageUrl) {
        setValue('imageUrls', lessonData.imageUrl);
        setImageUrls({ imageUrls: lessonData.imageUrl });
      }

      // 일정 정보
      if (lessonData.lessonRound?.lessonRounds) {
        const formattedTimes = lessonData.lessonRound.lessonRounds.map((round) => {
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
        setTimes(formattedTimes);
      }

      // 장소 정보
      if (lessonData.location) {
        setValue('detailedAddress', lessonData.streetDetailAddress || '');
        setValue('isUndecidedLocation', false);

        // selectedLocation 설정
        const locationData: LocationTypes = {
          location: lessonData.location,
          streetAddress: lessonData.streetAddress,
          oldStreetAddress: lessonData.oldStreetAddress,
        };
        setSelectedLocation(locationData);
        setValue('selectedLocation', locationData, { shouldValidate: true });
      } else {
        setValue('isUndecidedLocation', true);
      }
    }
  }, [isEditMode, lessonData, setValue, setImageUrls, setTimes, setSelectedLocation]);
};
