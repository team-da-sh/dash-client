'use client';

import { useEffect, useState } from 'react';
import { useLoginMutation } from '@/app/auth/apis/queries';

export default function Page() {
  const [code, setCode] = useState<string | null>(null);
  const { mutate: login } = useLoginMutation();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setCode(params.get('code'));
  }, []);

  useEffect(() => {
    if (code) login({ redirectUrl: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI ?? '', code });
  }, [code, login]);

  return null;
}
