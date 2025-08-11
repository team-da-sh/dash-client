import { MAX_NAME_LENGTH, MAX_PHONENUMBER_LENGTH, MIN_NAME_LENGTH } from '@/pages/onboarding/constants';
import { ONLY_KOREAN, ONLY_NUMBER } from '@/shared/constants/regex';

export const validateTypingName = (name: string) => {
  const onlyKorean = name.replace(ONLY_KOREAN, '');
  return onlyKorean.slice(0, MAX_NAME_LENGTH);
};

export const validateName = (name: string) => {
  if (!name) return false;
  return name.length >= MIN_NAME_LENGTH;
};

export const validateTypingPhoneNumber = (phoneNumber: string) => {
  if (phoneNumber.length > MAX_PHONENUMBER_LENGTH) return false;
  if (!ONLY_NUMBER.test(phoneNumber)) return false;
  return true;
};

export const validatePhoneNumber = (phoneNumber: string) => {
  if (!phoneNumber) return false;
  if (phoneNumber.length !== MAX_PHONENUMBER_LENGTH) return false;
  return true;
};
