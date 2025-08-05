import { useCallback, useState } from 'react';

/**
 * @function useOverlay
 * @description
 * 커스텀 훅으로 오버레이(예: 모달, 바텀시트)의 열림/닫힘 상태를 관리합니다.
 * 상태를 토글하거나, 열거나, 닫는 기능을 제공합니다.
 *
 * @param {boolean} [initialState=false] - 오버레이의 초기 상태 (기본값은 false)
 * @returns {Object} - 오버레이의 상태 및 상태 변경 함수들
 * @returns {boolean} isOpen - 오버레이가 열려있는지 여부
 * @returns {Function} open - 오버레이를 열기 위한 함수
 * @returns {Function} close - 오버레이를 닫기 위한 함수
 * @returns {Function} toggle - 오버레이의 상태를 토글하는 함수
 */

const useOverlay = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return { isOpen, open, close, toggle };
};

export default useOverlay;
