export const isINNLegalEntity = (value) => {
  const valueToString = value ? value.toString() : '';
  const getN = (index) => parseInt(valueToString[index]);

  if (valueToString.length === 10) {
    const dgt10 =
      ((2 * getN(0) +
        4 * getN(1) +
        10 * getN(2) +
        3 * getN(3) +
        5 * getN(4) +
        9 * getN(5) +
        4 * getN(6) +
        6 * getN(7) +
        8 * getN(8)) %
        11) %
      10;

    return getN(9) === dgt10;
  }

  return false;
};

export const removeNonDigit = (value) => value.replace(/\D/g, '');

export const getTodayEnd = () => {
  const today = new Date();

  today.setHours(23, 59, 59, 999);

  return today;
};
