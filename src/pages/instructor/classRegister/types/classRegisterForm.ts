import type { z } from 'zod';
import type { classRegisterSchema } from '@/pages/instructor/classRegister/schema/classRegisterSchema';

export type ClassRegisterFormTypes = z.infer<typeof classRegisterSchema>;
