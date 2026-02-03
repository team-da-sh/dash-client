import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
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
      router.push('/mypage');

      notify({ message: '수정이 완료되었어요', icon: 'success' });
    },
    onError: (error: Error) => {
      router.push('/error');
      console.error('프로필 업데이트 실패:', error);
    },
  });
};
