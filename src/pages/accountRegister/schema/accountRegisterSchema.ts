import { z } from 'zod';
import { ONLY_NUMBER } from '@/shared/constants/regex';

export const accountRegisterSchema = z.object({
  depositor: z.string().min(1, '예금주명을 입력해주세요.'),
  bank: z.string().min(1, '은행을 선택해주세요.'),
  accountNumber: z.string().min(1, '계좌번호를 입력해주세요.').regex(ONLY_NUMBER, '숫자만 입력해주세요'),
});
