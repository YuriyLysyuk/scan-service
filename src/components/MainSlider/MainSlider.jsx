import React from 'react';
import Slider from 'react-slick';

import styles from './styles.module.scss';

import '../../scss/_slick-carousel.scss';
import { ReactComponent as PrevArrowSVG } from '../../assets/images/prev.svg';
import { ReactComponent as NextArrowSVG } from '../../assets/images/next.svg';
import { ReactComponent as TimeSVG } from '../../assets/images/time.svg';
// import { ReactComponent as MagnifierSVG } from '../../assets/images/magnifier.svg';
import { ReactComponent as ShieldSVG } from '../../assets/images/shield.svg';

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
  arrows: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const MainSlider = ({ className }) => {
  return (
    <Slider className={className} {...settings}>
      <div>
        <div className={styles.inner}>
          <TimeSVG className={styles.icon} />
          <p>Высокая и оперативная скорость обработки заявки</p>
        </div>
      </div>

      <div>
        <div className={styles.inner}>
          {/* <MagnifierSVG className={styles.icon} /> */}
          <p>
            Огромная комплексная база данных, обеспечивающая объективный ответ
            на запрос
          </p>
        </div>
      </div>

      <div>
        <div className={styles.inner}>
          {/* <ShieldSVG className={styles.icon} /> */}
          <p>
            Защита конфеденциальных сведений, не подлежащих разглашению по
            федеральному законодательству
          </p>
        </div>
      </div>

      <div>
        <div className={styles.inner}>
          {/* <ShieldSVG className={styles.icon} /> */}
          <p>Лучший продукт на рынке по мнению бабы Клавы</p>
        </div>
      </div>
    </Slider>
  );
};

export default MainSlider;
