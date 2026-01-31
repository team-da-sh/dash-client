import type { z } from 'zod';
import type { instructorRegisterSchema } from '@/app/mypage/(instructor)/profile-register/schema/instructorRegisterSchema';

export type duplicateStateTypes = 'available' | 'duplicate' | null;
export type instructorRegisterFormTypes = z.infer<typeof instructorRegisterSchema>;
