export const getObjectSearchTotal = (totalDocuments) => {
  if (!totalDocuments) return;

  return totalDocuments.reduce((sum, { value }) => (sum += value), 0);
};

