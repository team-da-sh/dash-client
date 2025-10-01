import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import type { GenreTypes } from '@/pages/onboarding/types/genreTypes';
import type { LevelTypes } from '@/pages/onboarding/types/levelTypes';
import BoxButton from '@/shared/components/BoxButton/BoxButton';
import ClassCard from '@/shared/components/ClassCard';
import { USER_ROLE } from '@/shared/constants/userRole';

// 1. 각 하위 컴포넌트의 Props 타입을 추출합니다.
type ClassCardHeaderProps = ComponentProps<typeof ClassCard.Header>;
type ClassCardBodyProps = ComponentProps<typeof ClassCard.Body>;
type ClassCardFooterProps = ComponentProps<typeof ClassCard.Footer>;

// 2. 모든 Props를 하나의 스토리용 Props 타입으로 합칩니다.
type ClassCardStoryProps = ClassCardHeaderProps &
  ClassCardBodyProps &
  ClassCardFooterProps & { hasFooter: boolean; hasHeader: boolean };

const meta: Meta<ClassCardStoryProps> = {
  title: 'Common/ClassCard',
  component: ClassCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    hasHeader: true,
    role: USER_ROLE.MEMBER,
    status: 'APPROVED',
    hasFooter: true,
    showAsk: true,
  },
  argTypes: {
    // Header Props
    role: {
      control: 'radio',
      options: ['student', 'teacher'],
      description: '사용자 역할 (학생/선생님)',
    },
    status: {
      control: 'select',
      options: ['PENDING_APPROVAL', 'APPROVED', 'PENDING_CANCELLATION', 'CANCELLED', 'APPLYING', 'FINISHED'],
      description: '클래스 상태',
    },
    // Footer Props
    showAsk: {
      control: 'boolean',
      description: "'문의하기' 표시 여부",
    },
    hasFooter: {
      control: 'boolean',
      description: 'Footer 주입 여부',
    },
    hasHeader: {
      control: 'boolean',
      description: 'Header 주입 여부',
    },
  },
} satisfies Meta<ClassCardStoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

const bodyProps = {
  name: '스트리트 댄스 심화',
  imageUrl: 'https://www.behindpress.com/news/photo/202307/40128_56872_431.jpg',
  genre: 'HIPHOP' as GenreTypes,
  level: 'INTERMEDIATE' as LevelTypes,
  location: '서울특별시 강남구',
  startDateTime: '2023-12-16T14:00:00',
  endDateTime: '2023-12-16T16:00:00',
};

export const Default: Story = {
  render: (args) => {
    return (
      <ClassCard>
        {args.hasHeader && <ClassCard.Header role={args.role} status={args.status} date="2023-12-16T14:00:00" />}
        <ClassCard.Body {...bodyProps} />
        {args.hasFooter && (
          <ClassCard.Footer showAsk={args.showAsk}>
            <BoxButton onClick={() => {}} variant="temp">
              취소하기
            </BoxButton>
            <BoxButton variant="outline" onClick={() => {}}>
              상세보기
            </BoxButton>
          </ClassCard.Footer>
        )}
      </ClassCard>
    );
  },
};
