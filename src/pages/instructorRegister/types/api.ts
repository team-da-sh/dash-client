export interface InstructorRegisterRequestTypes {
  imageUrls: string[];
  instagram: string | null;
  youtube: string | null;
  educations: string[];
  experiences: string[];
  detail: string;
  videoUrls: string[];
}

export interface InstructorRegisterInfoResponseTypes {
  profileImage: string;
  instagram: string | null;
  youtube: string | null;
  educations: string[];
  experiences: string[];
  prizes: string[];
  detail: string;
  videoUrls: string[];
}
