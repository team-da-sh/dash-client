import { z } from 'zod';
import { MAX_ACCOUNT_NUMBER_LENGTH } from '@/shared/constants/account';
import { ONLY_KOR_ENG_SPACE, ONLY_NUMBER } from '@/shared/constants/regex';

export const accountRegisterSchema = z.object({
  depositor: z
    .string()
    .min(1, '예금주명을 입력해주세요.')
    .regex(ONLY_KOR_ENG_SPACE, '한글, 영문, 띄어쓰기만 입력해주세요.'),

  bank: z.object(
    {
      bankId: z.number(),
      bankName: z.string().min(1, '은행을 선택해주세요.'),
      bankImageUrl: z.string(),
    },
    { required_error: '은행을 선택해주세요.' }
  ),
  accountNumber: z.string().min(1).max(MAX_ACCOUNT_NUMBER_LENGTH).regex(ONLY_NUMBER, '숫자만 입력해주세요.'),
});
