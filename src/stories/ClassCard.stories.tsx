import type { Meta, StoryFn } from '@storybook/react';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import ClassCard from '@/shared/components/ClassCard/ClassCard';

export default {
  title: 'common/ClassCard',
  component: ClassCard,
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof ClassCard>;

const Template: StoryFn<typeof ClassCard> = (args) => <ClassCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  lessonName: '스트리트 댄스 심화',
  lessonImageUrl: 'https://example.com/lesson-image.jpg',
  lessonGenre: '힙합',
  lessonLevel: '중급자',
  lessonLocation: '서울특별시 강남구',
  lessonStartDateTime: '2023-12-16T14:00:00',
  lessonEndDateTime: '2023-12-16T16:00:00',
};

// children에 button 오는 경우
export const Levels = Template.bind({});
Levels.args = {
  lessonName: '스트리트 댄스 기초',
  lessonImageUrl: 'https://example.com/lesson-image.jpg',
  lessonGenre: '힙합',
  lessonLevel: '입문자',
  lessonLocation: '서울특별시 강남구',
  lessonStartDateTime: '2023-12-15T10:00:00',
  lessonEndDateTime: '2023-12-15T12:00:00',
  children: (
    <>
      <BoxButton variant="outline" isDisabled={true}>
        취소하기
      </BoxButton>
      <BoxButton variant="outline">상세 보기</BoxButton>
    </>
  ),
};

// lesson일때때
export const LessonCard = Template.bind({});
LessonCard.args = {
  lessonName: '스트리트 댄스 주말반',
  lessonImageUrl: 'https://example.com/lesson-image.jpg',
  lessonGenre: '힙합',
  lessonLevel: '입문자',
  lessonLocation: '서울특별시 강남구',
  lessonStartDateTime: '2025-01-22T10:00:00',
  lessonEndDateTime: '2025-01-22T12:00:00',
  isReservation: false,
};

// 다양한 일정 처리
export const DateRange = Template.bind({});
DateRange.args = {
  lessonName: '스트리트 댄스 주말반',
  lessonImageUrl: 'https://example.com/lesson-image.jpg',
  lessonGenre: '힙합',
  lessonLevel: '입문자',
  lessonLocation: '서울특별시 강남구',
  lessonStartDateTime: '2025-01-22T10:00:00',
  lessonEndDateTime: '2025-01-22T12:00:00',
};
