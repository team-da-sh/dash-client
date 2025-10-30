import { useEffect, useRef } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Modal from '@/common/components/Modal/Modal';
import { useModalStore } from '@/common/stores/modal';

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

      openModal(({ close }) => (
        <Modal
          content={content}
          description={description}
          type="default"
          onClose={close}
          leftButtonText={leftButtonText}
          rightButtonText={rightButtonText}
          onLeftClickHandler={() => {
            shouldBlockRef.current = false;
            close();
            const steps = armedRef.current ? -2 : -1;
            armedRef.current = false;
            navigate(steps);
          }}
          onRightClickHandler={() => {
            close();
          }}
        />
      ));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [navigate, openModal, content, description, leftButtonText, rightButtonText]);
}
