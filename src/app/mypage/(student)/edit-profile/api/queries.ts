import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { patchMyProfile } from '@/app/mypage/(student)/edit-profile/api/axios';
import type { UpdateProfileRequestTypes } from '@/app/mypage/(student)/edit-profile/types/api';
import { notify } from '@/common/components/Toast/Toast';
import { lessonKeys, memberKeys } from '@/shared/constants/queryKey';

export const usePatchMyProfile = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (profileData: UpdateProfileRequestTypes) => patchMyProfile(profileData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: memberKeys.me.queryKey });
      queryClient.invalidateQueries({ queryKey: lessonKeys.list.queryKey });
      router.push(ROUTES_CONFIG.mypage.path);

      notify({ message: '수정이 완료되었어요', icon: 'success' });
    },
    onError: (error: Error) => {
      router.push(ROUTES_CONFIG.error.path);
      console.error('프로필 업데이트 실패:', error);
    },
  });
};
