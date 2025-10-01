export interface InstructorRegisterRequestTypes {
  nickname: string;
  imageUrls: string[];
  instagram: string | null;
  youtube: string | null;
  educations: string[];
  experiences: string[];
  detail: string;
  videoUrls: string[];
}

export interface InstructorRegisterInfoResponseTypes {
  nickname: string;
  profileImage: string;
  instagram: string | null;
  youtube: string | null;
  educations: string[];
  experiences: string[];
  prizes: string[];
  detail: string;
  videoUrls: string[];
}

export interface NicknameDuplicateResponseTypes {
  isDuplicated: boolean;
}
