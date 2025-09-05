import ClassCardBody from '@/shared/components/ClassCard/ClassCardBody';
import ClassCardContainer from '@/shared/components/ClassCard/ClassCardContainer';
import ClassCardFooter from '@/shared/components/ClassCard/ClassCardFooter';
import ClassCardHeader from '@/shared/components/ClassCard/ClassCardHeader';

const ClassCard = Object.assign(ClassCardContainer, {
  Header: ClassCardHeader,
  Body: ClassCardBody,
  Footer: ClassCardFooter,
});

export default ClassCard;
