import { getObjectSearchTotal, reduceHistogramsByDate } from './helpers';

const getObjectSearchHistograms = (result) => {
  const modifiedResult = {
    data: reduceHistogramsByDate(result) || null,
    total: getObjectSearchTotal(result?.data[0]?.data) || 0,
  };

  return modifiedResult;
};

const transformResponse = {
  getObjectSearchHistograms,
};

export default transformResponse;
