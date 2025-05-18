import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { patchMyProfile } from '@/pages/editProfiles/api/axios';
import { UpdateProfileRequestTypes } from '@/pages/editProfiles/types/api';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import queryClient from '@/queryClient';
import { QUERY_KEYS } from '@/shared/constants/queryKey';

export const usePatchMyProfile = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (profileData: UpdateProfileRequestTypes) => patchMyProfile(profileData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.MEMBERS_ME] });
      navigate(ROUTES_CONFIG.mypage.path);
    },
    onError: (error: Error) => {
      navigate(ROUTES_CONFIG.error.path);
      console.error('프로필 업데이트 실패:', error);
    },
  });
};
