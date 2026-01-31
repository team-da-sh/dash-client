import { useEffect } from 'react';
import { useLoginMutation } from '@/app/auth/apis/queries';

export const LoginCallback = () => {
  // 현재 url 주소의 쿼리스트링 가져와서 URLSearchParams 객체 생성
  const params = new URLSearchParams(window.location.search);

  // 인가 코드 추출
  const code = params.get('code');

  const { mutate: login } = useLoginMutation();

  useEffect(() => {
    if (code) login({ redirectUrl: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI ?? '', code });
  }, [code, login]);

  // 잠시 인가 코드만 추출해서 api를 보내는 페이지이기 때문에 null 값 반환
  return null;
};
