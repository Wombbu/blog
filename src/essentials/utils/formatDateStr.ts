export const formatDateStr = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("FI-fi", {});
