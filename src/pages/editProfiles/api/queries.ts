import { useMutation } from '@tanstack/react-query';
import { patchMyProfile } from '@/pages/editProfiles/api/axios';
import { UpdateProfileRequestTypes } from '@/pages/editProfiles/types/api';

export const usePatchMyProfile = () => {
  return useMutation({
    mutationFn: (profileData: UpdateProfileRequestTypes) => patchMyProfile(profileData),
  });
};
