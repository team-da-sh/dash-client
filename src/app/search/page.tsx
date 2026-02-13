import type { Metadata } from 'next';
import SearchPage from '@/app/search/SearchPage';

export const metadata: Metadata = {
  title: '클래스 검색',
  description: '장르, 난이도, 일정으로 나에게 맞는 댄스 클래스를 찾아보세요.',
  alternates: { canonical: '/search' },
};

export default function Page() {
  return <SearchPage />;
}
