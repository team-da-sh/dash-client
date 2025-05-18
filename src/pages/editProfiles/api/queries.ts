import { useMutation } from '@tanstack/react-query';
import { patchMyProfile } from '@/pages/editProfiles/api/axios';
import { UpdateProfileRequestTypes } from '@/pages/editProfiles/types/api';

interface UsePatchMyProfileProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export const usePatchMyProfile = ({ onSuccess, onError }: UsePatchMyProfileProps) => {
  return useMutation({
    mutationFn: (profileData: UpdateProfileRequestTypes) => patchMyProfile(profileData),
    onSuccess,
    onError,
  });
};
