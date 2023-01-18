import React from 'react';
import ReactSlick from 'react-slick';

import styles from './styles.module.scss';

import { ReactComponent as PrevArrowSVG } from '../../assets/images/prev.svg';
import { ReactComponent as NextArrowSVG } from '../../assets/images/next.svg';
import timeSvgSrc from '../../assets/images/time.svg';
import magnifierSvgSrc from '../../assets/images/magnifier.svg';
import shieldSvgSrc from '../../assets/images/shield.svg';

const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <div {...props}>
    <NextArrowSVG />
  </div>
);

const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
  <div {...props}>
    <PrevArrowSVG />
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
          <img className={styles.icon} src={timeSvgSrc} alt="Секундомер" />

          <p className={styles.text}>
            Высокая и оперативная скорость обработки заявки
          </p>
        </div>
      </div>

      <div>
        <div className={styles.inner}>
          <img className={styles.icon} src={magnifierSvgSrc} alt="Лупа" />

          <p className={styles.text}>
            Огромная комплексная база данных, обеспечивающая объективный ответ
            на запрос
          </p>
        </div>
      </div>

      <div>
        <div className={styles.inner}>
          <img className={styles.icon} src={shieldSvgSrc} alt="Щит" />

          <p className={styles.text}>
            Защита конфеденциальных сведений, не подлежащих разглашению по
            федеральному законодательству
          </p>
        </div>
      </div>

      <div>
        <div className={styles.inner}>
          <img className={styles.icon} src={magnifierSvgSrc} alt="Лупа" />

          <p className={styles.text}>
            Лучший продукт на рынке по мнению бабы Клавы
          </p>
        </div>
      </div>
    </ReactSlick>
  );
};

export default Slider;
