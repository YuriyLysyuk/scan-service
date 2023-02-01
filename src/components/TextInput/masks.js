const phoneMask = [
  '+',
  '7',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
];

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
    case 'phone':
      return phoneMask;

    case 'inn':
      return inn10Mask;

    default:
      return false;
  }
};

export default getMaskByInputName;
