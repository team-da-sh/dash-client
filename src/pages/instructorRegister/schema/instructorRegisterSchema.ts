import { z } from 'zod';

export const instructorRegisterSchema = z.object({
  detail: z.string().min(1, '자기소개를 입력해주세요.').max(1000, '자기소개는 1000자 이내로 작성해주세요.'),
  instagram: z.string().url('올바른 URL 형식이 아닙니다.').optional(),
  youtube: z.string().url('올바른 URL 형식이 아닙니다.').optional(),
  educations: z.array(z.object({})),
  experiences: z.array(z.object({})),
  prizes: z.array(z.object({})),
  imageUrls: z.string().url('올바른 URL 형식이 아닙니다.').optional(),
  videoUrls: z.array(z.string().url('올바른 URL 형식이 아닙니다.')),
});
