export const initialValues = {
  inn: '',
  tonality: 'any',
  limit: '',
  maxFullness: false,
  inBusinessNews: false,
  onlyMainRole: false,
  onlyWithRiskFactors: false,
  excludeTechNews: false,
  excludeAnnouncements: false,
  excludeDigests: false,
  startDate: '',
  endDate: '',
};

export const dateRangeOptions = {
  start: {
    id: 'startDate',
    name: 'startDate',
    placeholder: 'Дата начала',
  },
  end: {
    id: 'endDate',
    name: 'endDate',
    placeholder: 'Дата конца',
  },
};
