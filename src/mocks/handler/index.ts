import { classRegisterHandlers } from '@/mocks/handler/classRegister';
import { homeHandlers } from '@/mocks/handler/home';
import { instructorHandlers } from '@/mocks/handler/instructor';

export const handlers = [...homeHandlers, ...classRegisterHandlers, ...instructorHandlers];
