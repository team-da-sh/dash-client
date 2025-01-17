export interface RoleNameProps {
  roleName: string;
}
export interface MyPageProps {
  profileImageUrl: string;
  role: RoleNameProps[];
  reservationCount: number;
  favoriteCount: number;
  lessonCount: number | null;
}
