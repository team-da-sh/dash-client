import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { usePatchInstructorRegisterInfo, usePostInstructor } from '@/pages/instructorRegister/apis/queries';
import { instructorRegisterSchema } from '@/pages/instructorRegister/schema/instructorRegisterSchema';
import type { InstructorRegisterInfoResponseTypes } from '@/pages/instructorRegister/types/api';
import type {
  duplicateStateTypes,
  instructorRegisterFormTypes,
} from '@/pages/instructorRegister/types/instructorRegisterForm';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import { notify } from '@/shared/components/Toast/Toast';
import { authKeys, teacherKeys } from '@/shared/constants/queryKey';
import { USER_ROLE } from '@/shared/constants/userRole';
import { setAccessToken, setRefreshToken } from '@/shared/utils/handleToken';

interface UseInstructorFormPropTypes {
  userRole?: string;
  prevInstructorData?: InstructorRegisterInfoResponseTypes;
}

const useInstructorRegisterForm = ({ userRole, prevInstructorData }: UseInstructorFormPropTypes) => {
  const [duplicateState, setDuplicateState] = useState<duplicateStateTypes>(null);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // 강사 등록
  const { mutate: instructorRegisterMutate } = usePostInstructor();
  // 강사 수정
  const { mutate: instructorPatchMutate } = usePatchInstructorRegisterInfo();

  const isEditMode = userRole === USER_ROLE.TEACHER;

  const methods = useForm({
    resolver: zodResolver(instructorRegisterSchema),
    mode: 'onTouched',
    defaultValues: {
      nickname: '',
      detail: '',
      instagram: '',
      youtube: '',
      imageUrls: '',
      educations: [''],
      experiences: [''],
      prizes: [''],
      videoUrls: [''],
      isEduNoneChecked: false,
      isCareerNoneChecked: false,
      isPrizeNoneChecked: false,
      isVideoNoneChecked: false,
    },
  });

  const {
    reset,
    formState: { isDirty, isValid },
    handleSubmit,
  } = methods;

  const isButtonActive = isEditMode
    ? isDirty && isValid && duplicateState === 'available'
    : isValid && duplicateState === 'available';

  // form submit 함수
  const onSubmit = (data: instructorRegisterFormTypes) => {
    const updatedInfo = {
      nickname: data.nickname.trim(),
      imageUrls: [data.imageUrls],
      detail: data.detail.trim(),

      instagram: data.instagram?.trim() === '' ? null : `${data.instagram?.trim()}`,
      youtube: data.youtube?.trim() === '' ? null : `${data.youtube?.trim()}`,

      educations: data.isEduNoneChecked ? [] : data.educations.filter((education) => education.trim() !== ''),
      experiences: data.isCareerNoneChecked ? [] : data.experiences.filter((experience) => experience.trim() !== ''),
      prizes: data.isPrizeNoneChecked ? [] : data.prizes.filter((prize) => prize.trim() !== ''),

      videoUrls: data.isVideoNoneChecked ? [] : data.videoUrls.filter((url) => url.trim() !== ''),
    };

    // 강사 등록 성공 함수
    const onSuccessRegister = (response: { data: { accessToken: string; refreshToken: string } }) => {
      const { accessToken, refreshToken } = response.data;

      setAccessToken(accessToken);
      setRefreshToken(refreshToken);

      queryClient.invalidateQueries({ queryKey: authKeys.role.queryKey });

      navigate(ROUTES_CONFIG.instructorRegisterCompletion.path);
    };

    // 강사 수정 성공 함수
    const onSuccessEdit = () => {
      // 강사 수정용 조회 API invalidate
      queryClient.invalidateQueries({ queryKey: teacherKeys.me.queryKey });

      // 댄서 조회 API invalidate
      queryClient.invalidateQueries({ queryKey: teacherKeys.list.queryKey });

      navigate(ROUTES_CONFIG.mypage.withTab('teacher'));
      notify({ message: '수정이 완료되었어요.', icon: 'success' });
    };

    const onError = () => {
      navigate(ROUTES_CONFIG.error.path);
    };

    if (isEditMode) {
      // 강사 수정 (이미 강사 등록된 경우)
      instructorPatchMutate(updatedInfo, {
        onSuccess: onSuccessEdit,
        onError,
      });
    } else {
      // 강사 등록 (아직 강사 등록 안된 경우)
      instructorRegisterMutate(updatedInfo, {
        onSuccess: onSuccessRegister,
        onError,
      });
    }
  };

  useEffect(() => {
    if (!prevInstructorData) return;

    if (prevInstructorData.nickname) {
      setDuplicateState('available');
    }

    reset({
      nickname: prevInstructorData.nickname || '',
      imageUrls: prevInstructorData.profileImage || '',
      instagram: prevInstructorData.instagram || '',
      youtube: prevInstructorData.youtube || '',
      educations: prevInstructorData.educations?.length ? prevInstructorData.educations : [''],
      experiences: prevInstructorData.experiences?.length ? prevInstructorData.experiences : [''],
      prizes: prevInstructorData.prizes?.length ? prevInstructorData.prizes : [''],
      detail: prevInstructorData.detail || '',
      videoUrls: prevInstructorData.videoUrls?.length ? prevInstructorData.videoUrls : [''],

      isEduNoneChecked: !(prevInstructorData.educations?.length > 0),
      isCareerNoneChecked: !(prevInstructorData.experiences?.length > 0),
      isPrizeNoneChecked: !(prevInstructorData.prizes?.length > 0),
      isVideoNoneChecked: !(prevInstructorData.videoUrls?.length > 0),
    });
  }, [prevInstructorData, reset]);

  return {
    methods,
    handleSubmit: handleSubmit(onSubmit),
    isEditMode,
    isButtonActive,
    duplicateState,
    setDuplicateState,
  };
};

export default useInstructorRegisterForm;
