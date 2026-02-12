import { isServer } from '@tanstack/react-query';
import ky from 'ky';
import { afterResponse } from '@/shared/apis/afterResponse';

const getPrefixUrl = (): string => {
  if (isServer) {
    const base = process.env.BACKEND_BASE_URL;
    if (base) {
      const normalized = base.endsWith('/') ? base.slice(0, -1) : base;
      return `${normalized}/api`;
    }
  }
  return '/api';
};

export const kyInstance = ky.create({
  prefixUrl: getPrefixUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
  hooks: {
    afterResponse: [afterResponse],
  },
});
