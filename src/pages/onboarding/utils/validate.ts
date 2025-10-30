import { ONLY_KOREAN_AND_ENGLISH, ONLY_NUMBER } from '@/shared/constants/regex';
import { MAX_NAME_LENGTH, MAX_PHONENUMBER_LENGTH, MIN_NAME_LENGTH } from '@/shared/constants/userInfo';

export const validateTypingName = (name: string) => {
  const onlyKoreanAndEnglish = name.replace(ONLY_KOREAN_AND_ENGLISH, '');
  return onlyKoreanAndEnglish.slice(0, MAX_NAME_LENGTH);
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
