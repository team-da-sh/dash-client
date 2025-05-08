import { useMutation } from '@tanstack/react-query';
import { patchMyProfile } from '@/pages/editProfile/api/axios';
import { UpdateProfileRequestTypes } from '@/pages/editProfile/types/api';

export const usePatchMyProfile = () => {
  return useMutation({
    mutationFn: (profileData: UpdateProfileRequestTypes) => patchMyProfile(profileData),
  });
};
