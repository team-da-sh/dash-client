export const getDateDiff = (date: string) => {
  const date1 = new Date();
  const date2 = new Date(date);

  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);

  const diffDate = date1.getTime() - date2.getTime();

  return Math.abs(diffDate / (1000 * 60 * 60 * 24));
};
