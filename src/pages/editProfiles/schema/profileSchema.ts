import { z } from 'zod';
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from '@/pages/editProfiles/constants/limit';
import { PROFILE_IMAGE_ERRORS } from '@/pages/editProfiles/constants/validationMessage';
import { MAX_NAME_LENGTH, MIN_NAME_LENGTH, NAME_ERROR_MESSAGES } from '@/shared/constants/userInfo';

export const profileSchema = z.object({
  profileImageUrl: z.union([
    z.string().nullable().optional(),
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
  phoneNumber: z.string().regex(/^[0-9]\d{10}$/),
  name: z.string().superRefine((val, ctx) => {
    if (val.length === 0) {
      ctx.addIssue({ code: 'custom', message: NAME_ERROR_MESSAGES.REQUIRED });
      return;
    }
    if (!/^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+$/.test(val)) {
      ctx.addIssue({ code: 'custom', message: NAME_ERROR_MESSAGES.ONLY_KOREAN_AND_ENGLISH });
      return;
    }
    if (val.length < MIN_NAME_LENGTH) {
      ctx.addIssue({ code: 'custom', message: NAME_ERROR_MESSAGES.TOO_SHORT });
      return;
    }
    if (val.length > MAX_NAME_LENGTH) {
      ctx.addIssue({ code: 'custom', message: NAME_ERROR_MESSAGES.TOO_LONG });
      return;
    }
  }),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
