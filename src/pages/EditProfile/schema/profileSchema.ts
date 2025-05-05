import { z } from 'zod';
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from '@/pages/editProfile/constants/imgLimit';

export const profileSchema = z.object({
  profileImageUrl: z.union([
    z.string().optional(),
    z
      .instanceof(FileList)
      .optional()
      .refine((files) => !files || files.length <= 1, '프로필 이미지는 최대 1개만 가능합니다')
      .refine(
        (files) => !files || Array.from(files).every((file) => file.size <= MAX_FILE_SIZE),
        '이미지 용량은 5MB 이하만 가능합니다'
      )
      .refine(
        (files) => !files || Array.from(files).every((file) => ACCEPTED_IMAGE_TYPES.includes(file.type)),
        'jpg, jpeg, png, heic 형식의 이미지 파일만 업로드 가능합니다'
      ),
  ]),
  nickname: z
    .string()
    .min(1, '댄서네임을 입력해주세요')
    .max(8, '최대 8자까지 입력 가능합니다')
    .regex(/^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+$/, '특수기호/띄어쓰기는 입력할 수 없어요'),
  phoneNumber: z.string().regex(/^[0-9]\d{10}$/, '숫자만 11자리 입력해주세요'),
  name: z
    .string()
    .min(1, '이름을 입력해주세요')
    .max(8, '최대 8자까지 입력 가능합니다')
    .regex(/^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+$/, '특수기호/띄어쓰기는 입력할 수 없어요'),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
