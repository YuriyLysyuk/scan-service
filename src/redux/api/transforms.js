import { getObjectSearchTotal, reduceHistogramsByDate } from './helpers';

const getObjectSearchHistograms = (result) => {
  const modifiedResult = {
    data: reduceHistogramsByDate(result),
    total: getObjectSearchTotal(result.data[0].data),
  };

  return modifiedResult;
};

const transformResponse = {
  getObjectSearchHistograms,
};

export default transformResponse;
