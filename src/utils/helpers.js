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

export const removeNonDigit = (value) => value.replace(/\D/g, '');

export const getTodayEnd = () => {
  const today = new Date();

  today.setHours(23, 59, 59, 999);

  return today;
};
