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

const getMaskByInputName = (name) => {
  switch (name) {
    case 'phone':
      return phoneMask;

    default:
      return false;
  }
};

export default getMaskByInputName;
