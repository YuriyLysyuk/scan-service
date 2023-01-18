import React from 'react';

import styles from './styles.module.scss';

import Icon from '../../components/Icon/Icon';

const SlideIconText = ({ slide: { iconName, text } }) => {
  return (
    <div>
      <div className={styles.inner}>
        <Icon className={styles.icon} name={iconName} />

        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default SlideIconText;
