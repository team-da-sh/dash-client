import type { z } from 'zod';
import type { instructorRegisterSchema } from '@/pages/instructorRegister/schema/instructorRegisterSchema';

export type duplicateStateTypes = 'available' | 'duplicate' | null;
export type instructorRegisterFormTypes = z.infer<typeof instructorRegisterSchema>;
