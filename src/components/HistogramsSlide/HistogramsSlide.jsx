import React from 'react';
import { format } from 'date-fns';

import styles from './styles.module.scss';

const HistogramsSlide = ({ slide: { date, totalDocuments, riskFactors } }) => {
  return (
    <div className={styles.inner}>
      <div className={styles.content}>
        <p className={styles.text}>{format(date, 'dd.MM.yyyy')}</p>

        <p className={styles.text}>{totalDocuments}</p>

        <p className={styles.text}>{riskFactors}</p>
      </div>
    </div>
  );
};

export default HistogramsSlide;
