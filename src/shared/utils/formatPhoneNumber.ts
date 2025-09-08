export const formatPhoneNumber = (phone: string) => {
  if (!phone) return '';
  return phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1 - $2 - $3');
};

export const formatPhoneNumberNoSpace = (phone: string) => {
  if (!phone) return '';
  return phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
};
