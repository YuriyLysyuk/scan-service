export const formatPrice = (price) => {
  return String(price)
    .split('')
    .reverse()
    .reduce((formated, digit, index, arr) => {
      if (index === 0) {
        formated.push(' ₽');
      }

      formated.push(digit);

      if (index % 3 === 2) {
        formated.push(' ');
      }

      return formated;
    }, [])
    .reverse()
    .join('')
    .trim();
};
