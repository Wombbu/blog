export const lessThan2Weeks = (date: string) => {
  const now = new Date();
  const postDate = new Date(date);
  const diff = now.getTime() - postDate.getTime();
  const diffDays = diff / (1000 * 3600 * 24);
  return diffDays < 14;
};
