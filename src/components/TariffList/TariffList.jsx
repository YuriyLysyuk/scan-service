import React from 'react';

import styles from './styles.module.scss';

import TariffCard from '../TariffCard/TariffCard';

import { TARIFFS } from '../../constants';

const TariffList = () => {
  return (
    Boolean(TARIFFS) && (
      <div className={styles.list}>
        {TARIFFS.map((tariff) => (
          <TariffCard key={tariff.id} tariff={tariff} />
        ))}
      </div>
    )
  );
};

export default TariffList;
