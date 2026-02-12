import type { z } from 'zod';
import type { classRegisterSchema } from '@/app/my/(instructor)/create-class/schema/classRegisterSchema';

export type ClassRegisterFormTypes = z.infer<typeof classRegisterSchema>;
