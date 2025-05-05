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
  name: '스트리트 댄스 심화',
  imageUrl: 'https://example.com/lesson-image.jpg',
  genre: '힙합',
  level: '중급자',
  location: '서울특별시 강남구',
  startDateTime: '2023-12-16T14:00:00',
  endDateTime: '2023-12-16T16:00:00',
};

// children에 button 오는 경우
export const Levels = Template.bind({});
Levels.args = {
  name: '스트리트 댄스 기초',
  imageUrl: 'https://example.com/lesson-image.jpg',
  genre: '힙합',
  level: '입문자',
  location: '서울특별시 강남구',
  startDateTime: '2023-12-15T10:00:00',
  endDateTime: '2023-12-15T12:00:00',
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
  name: '스트리트 댄스 주말반',
  imageUrl: 'https://example.com/lesson-image.jpg',
  genre: '힙합',
  level: '입문자',
  location: '서울특별시 강남구',
  startDateTime: '2025-01-22T10:00:00',
  endDateTime: '2025-01-22T12:00:00',
  isReservation: false,
};

// 다양한 일정 처리
export const DateRange = Template.bind({});
DateRange.args = {
  name: '스트리트 댄스 주말반',
  imageUrl: 'https://example.com/lesson-image.jpg',
  genre: '힙합',
  level: '입문자',
  location: '서울특별시 강남구',
  startDateTime: '2025-01-22T10:00:00',
  endDateTime: '2025-01-22T12:00:00',
};
