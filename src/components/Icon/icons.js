import prevArrowSrc from '../../assets/images/prevArrow.svg';
import nextArrowSrc from '../../assets/images/nextArrow.svg';
import stopwatchSrc from '../../assets/images/stopwatch.svg';
import magnifierSrc from '../../assets/images/magnifier.svg';
import shieldSrc from '../../assets/images/shield.svg';

const defaultIcon = {
  src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
  alt: 'Красная точка',
};

export const getIcon = (icon) => {
  switch (icon) {
    case 'prev-arrow':
      return {
        src: prevArrowSrc,
        alt: 'Стрелка назад',
      };

    case 'next-arrow':
      return {
        src: nextArrowSrc,
        alt: 'Стрелка вперед',
      };

    case 'stopwatch':
      return {
        src: stopwatchSrc,
        alt: 'Секундомер',
      };

    case 'magnifier':
      return {
        src: magnifierSrc,
        alt: 'Лупа',
      };

    case 'shield':
      return {
        src: shieldSrc,
        alt: 'Щит',
      };

    default:
      return defaultIcon;
  }
};
