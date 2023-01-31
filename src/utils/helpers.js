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

export const isAccessTokenExpire = (expire) => {
  if (!Boolean(expire)) return true;

  const end = new Date(expire);
  const now = new Date();

  return now - end > 0;
};
