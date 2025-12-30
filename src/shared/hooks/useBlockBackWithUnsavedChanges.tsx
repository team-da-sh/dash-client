import { useEffect, useRef } from 'react';
import type { FieldValues, UseFormReturn } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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

      // 모달이 열려있으면 모달을 닫고 현재 위치 유지
      if (closeModalRef.current) {
        closeModalRef.current();
        closeModalRef.current = null;
        history.pushState(null, '', location.href);
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

      history.pushState(null, '', location.href);

      openModal(({ close }) => {
        closeModalRef.current = close;
        return (
          <Modal
            content={content}
            description={description}
            type="default"
            onClose={() => {
              closeModalRef.current = null;
              close();
            }}
            leftButtonText={leftButtonText}
            rightButtonText={rightButtonText}
            onLeftClickHandler={() => {
              shouldBlockRef.current = false;
              closeModalRef.current = null;
              close();
              const steps = armedRef.current ? -2 : -1;
              armedRef.current = false;
              navigate(steps);
            }}
            onRightClickHandler={() => {
              closeModalRef.current = null;
              close();
            }}
          />
        );
      });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [navigate, openModal, content, description, leftButtonText, rightButtonText]);

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

      openModal(({ close }) => {
        closeModalRef.current = close;
        return (
          <Modal
            content={content}
            description={description}
            type="default"
            onClose={() => {
              closeModalRef.current = null;
              close();
            }}
            leftButtonText={leftButtonText}
            rightButtonText={rightButtonText}
            onLeftClickHandler={() => {
              shouldBlockRef.current = false;
              armedRef.current = false;
              closeModalRef.current = null;
              close();
              navigate(navigateTo!);
            }}
            onRightClickHandler={() => {
              closeModalRef.current = null;
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
