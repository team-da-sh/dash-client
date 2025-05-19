import { z } from 'zod';
import { INTRODUCTION_LENGTH_ERROR_MSG } from '@/pages/instructorRegister/constants/registerSection';

export const instructorRegisterSchema = z
  .object({
    detail: z.string().min(30, INTRODUCTION_LENGTH_ERROR_MSG).max(500),
    instagram: z.string().optional(),
    youtube: z.string().optional(),

    educations: z.array(z.string()),
    experiences: z.array(z.string()),
    prizes: z.array(z.string()),
    imageUrls: z.string().min(1, '이미지를 업로드해주세요.'),
    videoUrls: z.array(z.string()),
  })
  .refine((data) => data.instagram?.trim() || data.youtube?.trim(), {
    message: '인스타그램 또는 유튜브 중 하나는 반드시 입력해야 합니다.',
    path: ['instagram'],
  });
