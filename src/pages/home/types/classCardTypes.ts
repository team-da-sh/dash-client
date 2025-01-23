export interface ClassCardProps {
  lessonId?: number;
  reservationId?: number;
  lessonName: string | undefined;
  lessonImageUrl: string | undefined;
  lessonGenre: string | undefined;
  lessonLevel: string | undefined;
  lessonLocation: string | undefined;
  lessonDetailedAddress?: string | undefined;
  lessonStartDateTime: string | undefined;
  lessonEndDateTime: string | undefined;
  isReservation?: boolean;
  children?: React.ReactNode;
}
