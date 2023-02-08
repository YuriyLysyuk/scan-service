import React from 'react';
import classNames from 'classnames';

import '../../scss/_slick-carousel.scss';
import './_custom-styles.scss';
import settings from './settings';
import styles from './styles.module.scss';

import Slider from '../Slider/Slider';
import HistogramsSlide from '../HistogramsSlide/HistogramsSlide';

const titles = ['Период', 'Всего', 'Риски'];

const HistogramsSlider = ({ className, isLoading, slides }) => {
  const sliderClass = classNames('histograms-slider', className);

  return (
    <div className={styles.wrap}>
      <Slider
        className={sliderClass}
        isLoading={isLoading}
        settings={settings}
        slideComponent={HistogramsSlide}
        slides={slides}
      />

      <div className={styles.titles}>
        {titles.map((title) => (
          <p key={title} className={styles.title}>
            {title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HistogramsSlider;
