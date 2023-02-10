export const getObjectSearchTotal = (totalDocuments) => {
  if (!totalDocuments) return;

  return totalDocuments.reduce((sum, { value }) => (sum += value), 0);
};

export const reduceHistogramsByDate = (data) => {
  const totalDocuments = data?.data[0];
  const riskFactors = data?.data[1];

  if (!totalDocuments || !riskFactors) return;

  const result = totalDocuments.data
    .reduce((data, { date, value }, i) => {
      const item = {
        date: Date.parse(date),
        totalDocuments: value,
        riskFactors: riskFactors.data[i].value,
      };

      data.push(item);

      return data;
    }, [])
    .sort(({ date: dateA }, { date: dateB }) => dateA - dateB);

  return result;
};
