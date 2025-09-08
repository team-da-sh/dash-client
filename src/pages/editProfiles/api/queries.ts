import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { patchMyProfile } from '@/pages/editProfiles/api/axios';
import type { UpdateProfileRequestTypes } from '@/pages/editProfiles/types/api';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { notify } from '@/shared/components/Toast/Toast';
import { memberKeys } from '@/shared/constants/queryKey';

export const usePatchMyProfile = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (profileData: UpdateProfileRequestTypes) => patchMyProfile(profileData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: memberKeys.me.queryKey });
      navigate(ROUTES_CONFIG.mypage.path);

      notify({ message: '수정이 완료되었어요', icon: 'success' });
    },
    onError: (error: Error) => {
      navigate(ROUTES_CONFIG.error.path);
      console.error('프로필 업데이트 실패:', error);
    },
  });
};
