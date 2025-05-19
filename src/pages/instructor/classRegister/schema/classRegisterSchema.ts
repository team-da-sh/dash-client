import { z } from 'zod';
import {
  MAX_CLASS_DESCRIPTION_LENGTH,
  MAX_CLASS_NAME_LENGTH,
  MAX_RECOMMEND_LENGTH,
  MIN_CLASS_DESCRIPTION_LENGTH,
  MIN_CLASS_GENRE_LENGTH,
  MIN_CLASS_LEVEL_LENGTH,
  MIN_CLASS_NAME_LENGTH,
  MIN_RECOMMEND_LENGTH,
  MIN_TIMES_LENGTH,
} from '@/pages/instructor/classRegister/constants/formLimit';

export const classRegisterSchema = z.object({
  className: z
    .string()
    .min(MIN_CLASS_NAME_LENGTH, '클래스명을 입력해주세요')
    .max(MAX_CLASS_NAME_LENGTH, '클래스명은 최대 30자까지 입력 가능합니다')
    .regex(/^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣\s]*$/, '특수기호는 입력할 수 없어요'),

  detail: z
    .string()
    .min(MIN_CLASS_DESCRIPTION_LENGTH, '설명을 입력해주세요')
    .max(MAX_CLASS_DESCRIPTION_LENGTH, '설명은 최대 300자까지 입력 가능합니다'),
  imageUrls: z.string().url('대표 이미지를 등록해주세요'),
  selectedGenre: z.string().min(MIN_CLASS_GENRE_LENGTH, '장르를 선택해주세요'),
  selectedLevel: z.string().min(MIN_CLASS_LEVEL_LENGTH, '레벨을 선택해주세요'),
  recommendation: z
    .string()
    .min(MIN_RECOMMEND_LENGTH, '추천 대상을 입력해주세요')
    .max(MAX_RECOMMEND_LENGTH, '추천 대상은 최대 200자까지 입력 가능합니다'),
  maxReservationCount: z.string().regex(/^\d+$/, '인원을 입력해주세요'),
  price: z.string().regex(/^\d+$/, '수강료를 입력해주세요'),
  isUndecidedLocation: z.boolean(),
  selectedLocation: z
    .union([
      z.object({
        location: z.string(),
        streetAddress: z.string().nullable(),
        oldStreetAddress: z.string().nullable(),
      }),
      z.null(),
    ])
    .refine((val) => {
      if (val === null) return false;
      return val.location !== '';
    }, '장소를 입력해주세요'),
  detailedAddress: z.string().optional(),
  times: z
    .array(
      z.object({
        startTime: z.string(),
        endTime: z.string(),
      })
    )
    .min(MIN_TIMES_LENGTH, '일정을 추가해주세요'),
});
