export const formatDateStartTime = (date: string) => {
  return date ? `${date}T00:00:00` : undefined;
};

export const formatDateEndTime = (date: string) => {
  return date ? `${date}T23:59:59` : undefined;
};
