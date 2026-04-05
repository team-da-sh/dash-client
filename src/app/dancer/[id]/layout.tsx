import type { Metadata } from 'next';
import { getDancerDetail } from '@/app/dancer/[id]/apis/ky';
import {
  dancerDetailToMetadata,
  getFallbackDancerMetadata,
  isWithdrawnDancer,
} from '@/app/dancer/[id]/utils/buildDancerMetadata';

function parseDancerId(id: string): number | null {
  const n = Number(id);
  if (!Number.isInteger(n) || n <= 0) return null;
  return n;
}

// eslint-disable-next-line react-refresh/only-export-components -- Next.js generateMetadata
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const dancerId = parseDancerId(id);
  if (dancerId === null) {
    return getFallbackDancerMetadata();
  }

  try {
    const data = await getDancerDetail(dancerId);
    if (isWithdrawnDancer(data)) {
      return getFallbackDancerMetadata();
    }
    return dancerDetailToMetadata(data);
  } catch {
    return getFallbackDancerMetadata();
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
