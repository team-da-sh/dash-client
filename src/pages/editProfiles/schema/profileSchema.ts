import { z } from 'zod';
import {
  ACCEPTED_IMAGE_TYPES,
  MAX_FILE_SIZE,
  MAX_NAME_LENGTH,
  MAX_NICKNAME_LENGTH,
  MIN_NAME_LENGTH,
  MIN_NICKNAME_LENGTH,
} from '@/pages/editProfiles/constants/limit';
import {
  PROFILE_IMAGE_ERRORS,
  NICKNAME_ERRORS,
  NAME_ERRORS,
  PHONE_NUMBER_ERRORS,
} from '@/pages/editProfiles/constants/validationMessage';

export const profileSchema = z.object({
  profileImageUrl: z.union([
    z.string().optional(),
    z
      .instanceof(FileList)
      .optional()
      .refine((files) => !files || files.length <= 1, PROFILE_IMAGE_ERRORS.TOO_MANY)
      .refine(
        (files) => !files || Array.from(files).every((file) => file.size <= MAX_FILE_SIZE),
        PROFILE_IMAGE_ERRORS.TOO_LARGE
      )
      .refine(
        (files) => !files || Array.from(files).every((file) => ACCEPTED_IMAGE_TYPES.includes(file.type)),
        PROFILE_IMAGE_ERRORS.INVALID_TYPE
      ),
  ]),
  nickname: z
    .string()
    .min(MIN_NICKNAME_LENGTH, NICKNAME_ERRORS.REQUIRED)
    .max(MAX_NICKNAME_LENGTH, NICKNAME_ERRORS.TOO_LONG)
    .regex(/^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+$/, NICKNAME_ERRORS.INVALID),
  phoneNumber: z.string().regex(/^[0-9]\d{10}$/, PHONE_NUMBER_ERRORS.INVALID),
  name: z
    .string()
    .min(MIN_NAME_LENGTH, NAME_ERRORS.REQUIRED)
    .max(MAX_NAME_LENGTH, NAME_ERRORS.TOO_LONG)
    .regex(/^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+$/, NAME_ERRORS.INVALID),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
