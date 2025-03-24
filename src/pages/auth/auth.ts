import { useEffect } from 'react';
import { useLoginMutation } from '@/pages/auth/apis/queries';

export const LoginCallback = () => {
  // 현재 url 주소의 쿼리스트링 가져와서 URLSearchParams 객체 생성
  const params = new URLSearchParams(window.location.search);

  // 인가 코드 추출
  const code = params.get('code');

  // 해당 코드로 소셜 로그인 api 쏘기
  const { mutate: login } = useLoginMutation();

  useEffect(() => {
    if (code) login({ redirectUrl: import.meta.env.VITE_KAKAO_REDIRECT_URI, code });
  }, [code]);

  // 잠시 인가 코드만 추출해서 api를 보내는 페이지이기 때문에 null 값 반환
  return null;
};
