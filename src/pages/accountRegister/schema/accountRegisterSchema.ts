import { z } from 'zod';

export const accountRegisterSchema = z.object({
  depositor: z.string().min(1, '예금주명을 입력해주세요.'),
  bank: z.string().min(1, '은행을 선택해주세요.'),
  accountNumber: z.string().min(1, '계좌번호를 입력해주세요.'),
});
