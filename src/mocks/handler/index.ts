import { classRegisterHandlers } from '@/mocks/handler/classRegister';
import { homeHandlers } from '@/mocks/handler/home';

export const handlers = [...homeHandlers, ...classRegisterHandlers];
