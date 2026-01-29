import type { KeyboardEvent, ClipboardEvent } from 'react';

export const allowOnlyNumberKey = (e: KeyboardEvent<HTMLInputElement>) => {
  const isNumber =
    (e.key >= '0' && e.key <= '9') || ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key);
  if (!isNumber) e.preventDefault();
};
export const allowOnlyNumberPaste = (e: ClipboardEvent<HTMLInputElement>) => {
  const paste = e.clipboardData.getData('text');
  if (!/^\d+$/.test(paste)) e.preventDefault();
};
