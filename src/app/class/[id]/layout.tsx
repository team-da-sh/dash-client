import type { Metadata } from 'next';
import { getLessonDetail } from '@/app/class/[id]/apis/ky';
import { getFallbackClassMetadata, lessonDetailToMetadata } from '@/app/class/[id]/utils/buildClassMetadata';

function parseLessonId(id: string): number | null {
  const n = Number(id);
  if (!Number.isInteger(n) || n <= 0) return null;
  return n;
}

// eslint-disable-next-line react-refresh/only-export-components -- Next.js generateMetadata
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const lessonId = parseLessonId(id);
  if (lessonId === null) {
    return getFallbackClassMetadata();
  }

  try {
    const data = await getLessonDetail(lessonId);
    return lessonDetailToMetadata(data);
  } catch {
    return getFallbackClassMetadata();
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
