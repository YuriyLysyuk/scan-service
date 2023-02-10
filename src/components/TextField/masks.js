const inn10Mask = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
];

const getMaskByInputName = ({ name }) => {
  switch (name) {
    case 'inn':
      return inn10Mask;

    default:
      return false;
  }
};

export default getMaskByInputName;
