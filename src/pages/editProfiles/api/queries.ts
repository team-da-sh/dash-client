import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { patchMyProfile } from '@/pages/editProfiles/api/axios';
import type { UpdateProfileRequestTypes } from '@/pages/editProfiles/types/api';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { notify } from '@/shared/components/Toast/Toast';
import { QUERY_KEYS } from '@/shared/constants/queryKey';

export const usePatchMyProfile = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (profileData: UpdateProfileRequestTypes) => patchMyProfile(profileData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.MEMBERS_ME] });
      navigate(ROUTES_CONFIG.mypage.path);

      notify('수정이 완료되었어요', true);
    },
    onError: (error: Error) => {
      navigate(ROUTES_CONFIG.error.path);
      console.error('프로필 업데이트 실패:', error);
    },
  });
};
