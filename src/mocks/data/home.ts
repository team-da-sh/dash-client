import type { PopularGenreResponseTypes } from '@/pages/home/types/api';

export const POPULAR_GENRE_DATA: PopularGenreResponseTypes = { genres: ['HIPHOP', 'CHOREOGRAPHY'] };

export const UPCOMING_LESSONS_DATA = {
  lessons: [
    {
      id: '1L',
      genre: 'HIPHOP',
      level: 'BEGINNER',
      name: '박재연의 미친 웨이브',
      imageUrl:
        'https://i.namu.wiki/i/U96fw_DDLHAtQSc6IR2YEMOwiqqFzT9NaJaO7HPqDATfbsPZhTylHbAHvIpNDEStQHK3luR8Db6FcAT2KSBm8A.webp',
      teacherProfileImage:
        'https://i.namu.wiki/i/U96fw_DDLHAtQSc6IR2YEMOwiqqFzT9NaJaO7HPqDATfbsPZhTylHbAHvIpNDEStQHK3luR8Db6FcAT2KSBm8A.webp',
      teacherName: '선생이름',
      startDate: '2025-01-13T18:26:27',
      endDate: '2025-01-13T18:26:27',
      location: '서울 광진구',
      remainingDays: 0,
    },
  ],
};
