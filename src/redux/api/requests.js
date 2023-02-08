import { formatISO } from 'date-fns/fp';

import { removeNonDigit } from '../../utils/helpers';

export const getObjectSearchRequest = (data) => {
  const request = {
    intervalType: 'month', // string
    histogramTypes: [
      'totalDocuments', // string
      'riskFactors', // string
    ],
    issueDateInterval: {
      startDate: formatISO(new Date(data.startDate)), // string
      endDate: formatISO(new Date(data.endDate)), // string
    },
    searchContext: {
      targetSearchEntitiesContext: {
        targetSearchEntities: [
          {
            type: 'company', // string
            inn: removeNonDigit(data.inn), // string
            maxFullness: data.maxFullness === 'true', // boolean
            inBusinessNews: data.inBusinessNews === 'true' ? true : null, // boolean
          },
        ],
        onlyMainRole: data.onlyMainRole === 'true', // boolean
        tonality: 'any', // string
        onlyWithRiskFactors: data.onlyWithRiskFactors === 'true', // boolean
      },
    },
    similarMode: 'duplicates',
    limit: parseInt(data.limit),
    sortType: 'sourceInfluence',
    sortDirectionType: 'desc',
    attributeFilters: {
      excludeTechNews: data.includeTechNews === 'false',
      excludeAnnouncements: data.includeAnnouncements === 'false',
      excludeDigests: data.includeDigests === 'false',
    },
  };

  return request;
};

export const getDocumentsRequest = (data = []) => {
  const request = {
    ids: data.map(({ encodedId }) => encodedId),
  };

  return request;
};
