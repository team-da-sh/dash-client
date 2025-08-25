import { z } from 'zod';
import {
  FORM_ERROR_MESSAGE,
  INTRODUCTION_LENGTH_ERROR_MSG,
  MIN_CAREER_INPUT_COUNT,
  MIN_EDUCATION_INPUT_COUNT,
  MIN_INTRODUCTION_LENGTH,
  MIN_PRIZE_INPUT_COUNT,
  MIN_VIDEO_INPUT_COUNT,
} from '@/pages/instructorRegister/constants/registerSection';
import { INCLUDE_BLANK, INCLUDE_SPECIAL } from '@/shared/constants/regex';

export const instructorRegisterSchema = z
  .object({
    nickname: z
      .string()
      .refine((value) => value.trim(), {
        message: FORM_ERROR_MESSAGE.EMPTY_DANCER_NAME,
      })
      .refine((value) => !INCLUDE_SPECIAL.test(value) && !INCLUDE_BLANK.test(value), {
        message: FORM_ERROR_MESSAGE.INVALID,
      }),
    detail: z.string().min(MIN_INTRODUCTION_LENGTH, INTRODUCTION_LENGTH_ERROR_MSG).max(500),
    instagram: z.string().optional(),
    youtube: z.string().optional(),
    imageUrls: z.string().min(1, '이미지를 업로드해주세요.'),
    educations: z.array(z.string()),
    experiences: z.array(z.string()),
    prizes: z.array(z.string()),
    videoUrls: z.array(z.string()),

    isEduNoneChecked: z.boolean(),
    isCareerNoneChecked: z.boolean(),
    isPrizeNoneChecked: z.boolean(),
    isVideoNoneChecked: z.boolean(),
  })
  .refine((data) => data.instagram?.trim() || data.youtube?.trim(), {
    message: '인스타그램 또는 유튜브 중 하나는 반드시 입력해야 합니다.',
    path: ['instagram'],
  })
  .refine(
    (data) => data.isEduNoneChecked || data.educations.some((edu) => edu.trim().length >= MIN_EDUCATION_INPUT_COUNT),
    {
      message: `최소 ${MIN_EDUCATION_INPUT_COUNT}자 이상인 교육 이력 항목을 하나 이상 작성하거나 "없음"을 선택하세요.`,
      path: ['educations'],
    }
  )
  .refine(
    (data) => data.isCareerNoneChecked || data.experiences.some((exp) => exp.trim().length >= MIN_CAREER_INPUT_COUNT),
    {
      message: `최소 ${MIN_CAREER_INPUT_COUNT}자 이상인 경력 항목을 하나 이상 작성하거나 "없음"을 선택하세요.`,
      path: ['experiences'],
    }
  )
  .refine(
    (data) => data.isPrizeNoneChecked || data.prizes.some((prize) => prize.trim().length >= MIN_PRIZE_INPUT_COUNT),
    {
      message: `최소 ${MIN_PRIZE_INPUT_COUNT}자 이상인 수상 내역 항목을 하나 이상 작성하거나 "없음"을 선택하세요.`,
      path: ['prizes'],
    }
  )
  .refine(
    (data) => data.isVideoNoneChecked || data.videoUrls.some((url) => url.trim().length >= MIN_VIDEO_INPUT_COUNT),
    {
      message: `최소 ${MIN_VIDEO_INPUT_COUNT}자 이상인 영상 URL을 하나 이상 작성하거나 "없음"을 선택하세요.`,
      path: ['videoUrls'],
    }
  );
