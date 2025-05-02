import { z } from 'zod';

export const profileSchema = z.object({
  nickname: z
    .string()
    .min(1, '댄서네임을 입력해주세요')
    .regex(/^[\w가-힣]+$/, '특수기호, 띄어쓰기는 입력할 수 없어요'),
  phoneNumber: z.string().regex(/^[0-9]\d{10}$/, '숫자만 11자리 입력해주세요'),
  name: z.string().optional(),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
