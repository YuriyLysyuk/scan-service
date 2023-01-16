import React, { useState } from 'react';

import styles from './styles.module.scss';

import Spinner from '../Spinner/Spinner';

// ToDo автроризация, получение лимитов
import { IS_AUTORIZED } from '../../constants';

const Limits = () => {
  const [limits, setLimits] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  if (!IS_AUTORIZED) return '';

  const getLimits = () => {
    setTimeout(() => {
      setIsLoading(false);
      setLimits({
        used: 34,
        all: 100,
      });
    }, 1000);
  };

  isLoading && getLimits();

  return (
    <div className={styles.limits}>
      {isLoading ? (
        <Spinner extClass={styles.spinner} />
      ) : (
        <>
          {console.log(limits)}
          <p className={styles.text}>Использовано компаний</p>
          <p className={styles.used}>{limits.used}</p>
          <p className={styles.text}>Лимит по компаниям</p>
          <p className={styles.all}>{limits.all}</p>
        </>
      )}
    </div>
  );
};

export default Limits;
