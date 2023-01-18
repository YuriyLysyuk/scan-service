import React from 'react';
import ReactSlick from 'react-slick';

import styles from './styles.module.scss';

import Icon from '../../components/Icon/Icon';

const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <div {...props}>
    <Icon name="next-arrow" />
  </div>
);

const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
  <div {...props}>
    <Icon name="prev-arrow" />
  </div>
);

const Slider = ({ className, settings }) => {
  const defaultSettings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    ...settings,
  };

  return (
    <ReactSlick className={className} {...defaultSettings}>
      <div>
        <div className={styles.inner}>
          <Icon className={styles.icon} name="stopwatch" />

          <p className={styles.text}>
            Высокая и оперативная скорость обработки заявки
          </p>
        </div>
      </div>

      <div>
        <div className={styles.inner}>
          <Icon className={styles.icon} name="magnifier" />

          <p className={styles.text}>
            Огромная комплексная база данных, обеспечивающая объективный ответ
            на запрос
          </p>
        </div>
      </div>

      <div>
        <div className={styles.inner}>
          <Icon className={styles.icon} name="shield" />

          <p className={styles.text}>
            Защита конфеденциальных сведений, не подлежащих разглашению по
            федеральному законодательству
          </p>
        </div>
      </div>

      <div>
        <div className={styles.inner}>
          <Icon className={styles.icon} name="magnifier" />

          <p className={styles.text}>
            Лучший продукт на рынке по мнению бабы Клавы
          </p>
        </div>
      </div>
    </ReactSlick>
  );
};

export default Slider;
