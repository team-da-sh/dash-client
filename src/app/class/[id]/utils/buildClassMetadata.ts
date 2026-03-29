import type { Metadata } from 'next';
import type { LessonDetailResponseTypes } from '@/app/class/[id]/types/api';
import type { GenreTypes } from '@/app/onboarding/types/genreTypes';
import { genreMapping } from '@/shared/constants/index';
import { formatDateToKR } from '@/shared/utils/date';

export const CLASS_METADATA_TITLE_SUFFIX = 'Dash 대쉬';

export function getFallbackClassMetadata(): Metadata {
  const absolute = `클래스 | ${CLASS_METADATA_TITLE_SUFFIX}`;
  return {
    title: { absolute },
    description: '댄스 클래스 정보를 확인하세요.',
  };
}

function translateGenre(genre: LessonDetailResponseTypes['genre']): string {
  if (genre === null) return '';
  return genreMapping[genre as Exclude<GenreTypes, null>] || String(genre);
}

export function getLessonDateRangeLabel(lessonRounds: { startDateTime: string; endDateTime: string }[]): string {
  if (!lessonRounds.length) return '';
  let minStart = lessonRounds[0].startDateTime;
  let maxEnd = lessonRounds[0].endDateTime;
  for (const r of lessonRounds) {
    if (new Date(r.startDateTime) < new Date(minStart)) minStart = r.startDateTime;
    if (new Date(r.endDateTime) > new Date(maxEnd)) maxEnd = r.endDateTime;
  }
  return `${formatDateToKR(minStart)} ~ ${formatDateToKR(maxEnd)}`;
}

export function sliceDetail40(detail: string): string {
  if (!detail) return '';
  return detail.length <= 40 ? detail : detail.slice(0, 40);
}

export function buildDescriptionFromLesson(data: LessonDetailResponseTypes): string {
  const dateRange = getLessonDateRangeLabel(data.lessonRound.lessonRounds);
  const detail40 = sliceDetail40(data.detail);
  const recommendation = data.recommendation?.trim() ?? '';
  return [dateRange, detail40, recommendation].filter(Boolean).join(' · ');
}

function buildAbsoluteTitle(data: LessonDetailResponseTypes): string {
  const parts = [data.name, data.teacherNickname, translateGenre(data.genre)].filter(Boolean);
  const core = parts.join(' · ');
  return core ? `${core} | ${CLASS_METADATA_TITLE_SUFFIX}` : `클래스 | ${CLASS_METADATA_TITLE_SUFFIX}`;
}

export function lessonDetailToMetadata(data: LessonDetailResponseTypes): Metadata {
  const absolute = buildAbsoluteTitle(data);
  const description = buildDescriptionFromLesson(data);
  const ogDescription = description || '댄스 클래스 정보를 확인하세요.';

  return {
    title: { absolute },
    description: ogDescription,
    openGraph: {
      title: absolute,
      description: ogDescription,
      ...(data.imageUrl ? { images: [{ url: data.imageUrl }] } : {}),
    },
    twitter: {
      title: absolute,
      description: ogDescription,
      ...(data.imageUrl ? { images: [data.imageUrl] } : {}),
    },
  };
}
