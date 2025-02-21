import { MAX_NAME_LENGTH, MAX_PHONENUMBER_LENGTH, MIN_NAME_LENGTH } from '@/pages/onboarding/constants';
import { INCLUDE_BLANK, INCLUDE_SPECIAL, ONLY_NUMBER } from '@/shared/constants/regex';

export const validateTypingName = (name: string) => {
  if (INCLUDE_SPECIAL.test(name)) return false;
  if (INCLUDE_BLANK.test(name)) return false;
  if (MAX_NAME_LENGTH < name.length) return false;
  return true;
};

export const validateName = (name: string) => {
  if (!name) return false;
  if (MIN_NAME_LENGTH > name.length) return false;

  return true;
};

export const validateTypingPhoneNumber = (phoneNumber: string) => {
  if (phoneNumber.length > MAX_PHONENUMBER_LENGTH) return false;
  if (!ONLY_NUMBER.test(phoneNumber)) return false;
  return true;
};

export const validatePhoneNumber = (phoneNumber: string) => {
  if (!phoneNumber) return false;
  if (phoneNumber.length !== 11) return false;
  return true;
};
