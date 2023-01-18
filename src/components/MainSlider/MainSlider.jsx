import React from 'react';

import '../../scss/_slick-carousel.scss';
import './_custom-styles.scss';
import settings from './settings';

import Slider from '../Slider/Slider';

const MainSlider = ({ className }) => {
  return <Slider className={className} settings={settings} />;
};

export default MainSlider;
