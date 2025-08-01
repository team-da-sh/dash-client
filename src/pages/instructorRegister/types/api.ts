export interface InstructorRegisterRequestTypes {
  dancerName: string;
  imageUrls: string[];
  instagram: string | null;
  youtube: string | null;
  educations: string[];
  experiences: string[];
  detail: string;
  videoUrls: string[];
}

export interface InstructorRegisterInfoResponseTypes {
  dancerName: string;
  profileImage: string;
  instagram: string | null;
  youtube: string | null;
  educations: string[];
  experiences: string[];
  prizes: string[];
  detail: string;
  videoUrls: string[];
}
