import { useEffect, useRef } from 'react';
import type { FieldValues, UseFormReturn } from 'react-hook-form';
import { useBlocker, useNavigate } from 'react-router-dom';
import { ROUTES_CONFIG } from '@/routes/routesConfig';
import Modal from '@/common/components/Modal/Modal';
import { useModalStore } from '@/common/stores/modal';
import { isLoggedIn } from '@/shared/utils/authUtil';

type UseBlockBackWithUnsavedChangesParams<TFieldValues extends FieldValues> = {
  methods: UseFormReturn<TFieldValues>;
  snapshotDeps?: unknown[];
  content?: string;
  description?: string;
  leftButtonText?: string;
  rightButtonText?: string;
};

export default function useBlockBackWithUnsavedChanges<TFieldValues extends FieldValues>({
  methods,
  snapshotDeps = [],
  content = '작성 중인 내용이 있어요.',
  description = '이대로 나가면 내용이 저장되지 않습니다.',
  leftButtonText = '나가기',
  rightButtonText = '계속 작성',
}: UseBlockBackWithUnsavedChangesParams<TFieldValues>) {
  const navigate = useNavigate();
  const { openModal } = useModalStore();

  const initialValuesRef = useRef<Record<string, unknown> | null>(null);
  const shouldBlockRef = useRef(true);
  const isDirtyRef = useRef(false);
  const armedRef = useRef(false);
  const closeModalRef = useRef<(() => void) | null>(null);
  const isModalOpenRef = useRef(false);

  // 모달이 열려있을 때 네비게이션을 차단
  const blocker = useBlocker(() => {
    // 모달이 열려있으면 항상 차단
    return isModalOpenRef.current;
  });

  // useBlocker가 차단한 네비게이션을 처리
  useEffect(() => {
    if (blocker.state === 'blocked' && isModalOpenRef.current) {
      // 모달이 열려있을 때는 차단 상태를 유지 (proceed하지 않음)
      blocker.reset();
    }
  }, [blocker]);

  useEffect(() => {
    initialValuesRef.current = methods.getValues();
  }, [methods, ...snapshotDeps]);

  const areValuesEqual = (a: unknown, b: unknown) => {
    try {
      return JSON.stringify(a) === JSON.stringify(b);
    } catch {
      return false;
    }
  };

  useEffect(() => {
    const subscription = methods.watch(() => {
      const currentValues = methods.getValues();
      const baselineValues = initialValuesRef.current;
      const hasUserChange = baselineValues ? !areValuesEqual(currentValues, baselineValues) : false;

      if (hasUserChange && !armedRef.current) {
        armedRef.current = true;
        history.pushState(null, '', location.href);
      }

      isDirtyRef.current = hasUserChange;
    });
    return () => subscription.unsubscribe();
  }, [methods]);

  useEffect(() => {
    const handlePopState = () => {
      if (!shouldBlockRef.current) return;

      // 모달이 열려있으면 useBlocker를 통해 차단된 상태를 유지
      // popstate 이벤트가 발생해도 모달은 유지하고 페이지 이탈을 방지
      if (isModalOpenRef.current && closeModalRef.current) {
        // 크롬에서는 popstate 발생 시 이미 페이지가 이동한 상태일 수 있으므로
        // 즉시 히스토리를 복원하여 페이지 이동 방지
        history.pushState(null, '', location.href);

        // useBlocker가 차단한 상태라면 reset하여 차단 상태 유지
        if (blocker.state === 'blocked') {
          blocker.reset();
        }
        return;
      }

      if (!isDirtyRef.current) {
        if (armedRef.current) {
          shouldBlockRef.current = false;
          armedRef.current = false;
          navigate(-1);
          return;
        }
        return;
      }

      if (!armedRef.current) return;

      // Chrome에서 popstate 발생 시 이미 페이지가 이동한 상태일 수 있으므로
      // 즉시 히스토리를 복원한 후 모달을 열어야 함
      history.pushState(null, '', location.href);

      // 다음 이벤트 루프에서 모달을 열어서 히스토리 복원이 완료된 후 처리
      setTimeout(() => {
        // 모달이 열리기 전에 히스토리에 엔트리를 추가하여 뒤로가기 시 이 위치로 이동하도록 함
        history.pushState(null, '', location.href);

        openModal(({ close }) => {
          closeModalRef.current = close;
          isModalOpenRef.current = true;
          return (
            <Modal
              content={content}
              description={description}
              type="default"
              onClose={() => {
                closeModalRef.current = null;
                isModalOpenRef.current = false;
                close();
              }}
              leftButtonText={leftButtonText}
              rightButtonText={rightButtonText}
              onLeftClickHandler={() => {
                shouldBlockRef.current = false;
                closeModalRef.current = null;
                isModalOpenRef.current = false;
                close();
                const steps = armedRef.current ? -2 : -1;
                armedRef.current = false;
                navigate(steps);
              }}
              onRightClickHandler={() => {
                closeModalRef.current = null;
                isModalOpenRef.current = false;
                close();
              }}
            />
          );
        });
      }, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [navigate, openModal, content, description, leftButtonText, rightButtonText, blocker]);

  useEffect(() => {
    const handleHeaderNavClickCapture = (event: MouseEvent) => {
      if (!shouldBlockRef.current || !isDirtyRef.current) return;

      const target = event.target as HTMLElement | null;
      if (!target) return;

      const logoButton = target.closest('[aria-label="홈으로 이동"]') as HTMLElement | null;
      const searchButton = target.closest('[aria-label="검색 페이지로 이동"]') as HTMLElement | null;
      const mypageButton = target.closest('[aria-label="마이페이지로 이동"]') as HTMLElement | null;

      let navigateTo: string | null = null;
      if (logoButton) navigateTo = ROUTES_CONFIG.home.path;
      else if (searchButton) navigateTo = ROUTES_CONFIG.search.path;
      else if (mypageButton) navigateTo = isLoggedIn() ? ROUTES_CONFIG.mypage.path : ROUTES_CONFIG.login.path;

      if (!navigateTo) return;

      event.preventDefault();
      event.stopPropagation();

      // 모달이 열리기 전에 히스토리에 엔트리를 추가하여 뒤로가기 시 이 위치로 이동하도록 함
      history.pushState(null, '', location.href);

      openModal(({ close }) => {
        closeModalRef.current = close;
        isModalOpenRef.current = true;
        return (
          <Modal
            content={content}
            description={description}
            type="default"
            onClose={() => {
              closeModalRef.current = null;
              isModalOpenRef.current = false;
              close();
            }}
            leftButtonText={leftButtonText}
            rightButtonText={rightButtonText}
            onLeftClickHandler={() => {
              shouldBlockRef.current = false;
              armedRef.current = false;
              closeModalRef.current = null;
              isModalOpenRef.current = false;
              close();
              navigate(navigateTo!);
            }}
            onRightClickHandler={() => {
              closeModalRef.current = null;
              isModalOpenRef.current = false;
              close();
            }}
          />
        );
      });
    };

    window.addEventListener('click', handleHeaderNavClickCapture, true);
    return () => window.removeEventListener('click', handleHeaderNavClickCapture, true);
  }, [navigate, openModal, content, description, leftButtonText, rightButtonText]);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (!shouldBlockRef.current || !isDirtyRef.current) return;

      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);
}
