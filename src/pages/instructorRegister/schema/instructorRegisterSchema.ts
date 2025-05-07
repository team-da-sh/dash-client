import { z } from 'zod';

export const instructorRegisterSchema = z
  .object({
    detail: z.string().min(30, '최소 30자').max(500, '자기소개는 500자 이내로 작성해주세요.'),
    instagram: z.string().optional(),
    youtube: z.string().optional(),

    educations: z.array(z.string()),
    experiences: z.array(z.string()),
    prizes: z.array(z.string()),
    imageUrls: z.string().min(1, '이미지를 업로드해주세요.'),
    videoUrls: z.array(
      z.object({
        value: z.string().url('올바른 URL 형식이 아닙니다.'),
      })
    ),
  })
  .refine((data) => data.instagram?.trim() || data.youtube?.trim(), {
    message: '인스타그램 또는 유튜브 중 하나는 반드시 입력해야 합니다.',
    path: ['instagram'],
  });
