import type { z } from 'zod';
import type { classRegisterSchema } from '@/app/mypage/(instructor)/class-register/schema/classRegisterSchema';

export type ClassRegisterFormTypes = z.infer<typeof classRegisterSchema>;
