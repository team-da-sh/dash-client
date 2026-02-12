import type { z } from 'zod';
import type { instructorRegisterSchema } from '@/app/my/(instructor)/manage-profile/schema/instructorRegisterSchema';

export type duplicateStateTypes = 'available' | 'duplicate' | null;
export type instructorRegisterFormTypes = z.infer<typeof instructorRegisterSchema>;
