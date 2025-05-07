import { z } from 'zod';

export const instructorRegisterSchema = z
  .object({
    detail: z.string().min(1, '자기소개를 입력해주세요.').max(1000, '자기소개는 1000자 이내로 작성해주세요.'),
    instagram: z.string().optional(),
    youtube: z.string().optional(),

    educations: z.array(z.string()),
    experiences: z.array(z.string()),
    prizes: z.array(z.string()),
    imageUrls: z.union([z.string().optional(), z.instanceof(FileList).optional()]),
    videoUrls: z.array(z.string().url('올바른 URL 형식이 아닙니다.')),
  })
  .refine((data) => data.instagram?.trim() || data.youtube?.trim(), {
    message: '인스타그램 또는 유튜브 중 하나는 반드시 입력해야 합니다.',
    path: ['instagram'],
  });
