import { z } from 'zod';

// 서버 사진 용량, 형식 물어보고 수정 예정
// const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
// const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

export const profileSchema = z.object({
  profileImageUrl: z
    .custom<FileList>()
    .optional()
    .refine((files) => !files || files.length <= 1, '프로필 이미지는 최대 1개만 가능합니다'),
  nickname: z
    .string()
    .min(1, '댄서네임을 입력해주세요')
    .regex(/^[\w가-힣]+$/, '특수기호, 띄어쓰기는 입력할 수 없어요'),
  phoneNumber: z.string().regex(/^[0-9]\d{10}$/, '숫자만 11자리 입력해주세요'),
  name: z.string().optional(),
});

export interface ProfileFormValues {
  nickname: string;
  phoneNumber: string;
  name?: string;
  profileImageUrl?: FileList;
}
