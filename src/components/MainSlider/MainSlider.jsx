import React from 'react';
import Slider from 'react-slick';

import styles from './styles.module.scss';

import '../../scss/_slick-carousel.scss';
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

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const MainSlider = ({ className }) => {
  return (
    <Slider className={className} {...settings}>
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
    </Slider>
  );
};

export default MainSlider;
