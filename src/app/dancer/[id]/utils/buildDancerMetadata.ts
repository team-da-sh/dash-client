import type { Metadata } from 'next';
import type { DancerDetailResponseTypes } from '@/app/dancer/[id]/types/api';

const TITLE_SUFFIX = 'Dash 대쉬';

const WITHDRAWN_DETAIL_MESSAGE = '탈퇴한 회원입니다.';

export function getFallbackDancerMetadata(): Metadata {
  const absolute = `댄서 프로필 | ${TITLE_SUFFIX}`;
  return {
    title: { absolute },
    description: '댄서 프로필과 진행 중인 클래스를 확인하세요.',
  };
}

export function isWithdrawnDancer(data: DancerDetailResponseTypes): boolean {
  return data.detail === WITHDRAWN_DETAIL_MESSAGE;
}

function sliceIntro40(detail: string): string {
  if (!detail || detail === WITHDRAWN_DETAIL_MESSAGE) return '';
  return detail.length <= 40 ? detail : detail.slice(0, 40);
}

function buildSnsPart(data: DancerDetailResponseTypes): string {
  const parts = [data.instagram?.trim(), data.youtube?.trim()].filter(Boolean) as string[];
  return parts.join(' · ');
}

/** 학력 → 경력 → 수상 순, 각 배열 내부는 · 로 이어 붙임 */
function buildHistoryPart(data: DancerDetailResponseTypes): string {
  const edu = (data.educations ?? [])
    .map((s) => s.trim())
    .filter(Boolean)
    .join(' · ');
  const exp = (data.experiences ?? [])
    .map((s) => s.trim())
    .filter(Boolean)
    .join(' · ');
  const prize = (data.prizes ?? [])
    .map((s) => s.trim())
    .filter(Boolean)
    .join(' · ');
  return [edu, exp, prize].filter(Boolean).join(' · ');
}

export function buildDescriptionFromDancer(data: DancerDetailResponseTypes): string {
  const intro40 = sliceIntro40(data.detail);
  const sns = buildSnsPart(data);
  const history = buildHistoryPart(data);
  return [intro40, sns, history].filter(Boolean).join(' · ');
}

function buildAbsoluteTitle(nickname: string): string {
  const name = nickname.trim();
  const core = name ? `${name} 댄서 프로필 & 진행 클래스` : '댄서 프로필 & 진행 클래스';
  return `${core} | ${TITLE_SUFFIX}`;
}

export function dancerDetailToMetadata(data: DancerDetailResponseTypes): Metadata {
  const absolute = buildAbsoluteTitle(data.nickname);
  const description = buildDescriptionFromDancer(data);
  const ogDescription = description || '댄서 프로필과 진행 중인 클래스를 확인하세요.';
  const imageUrl = data.imageUrls?.[0];

  return {
    title: { absolute },
    description: ogDescription,
    openGraph: {
      title: absolute,
      description: ogDescription,
      ...(imageUrl ? { images: [{ url: imageUrl }] } : {}),
    },
    twitter: {
      title: absolute,
      description: ogDescription,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
  };
}
