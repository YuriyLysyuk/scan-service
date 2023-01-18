import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

import TariffCard from '../TariffCard/TariffCard';

const TariffList = ({ className, tariffs }) => {
  if (Boolean(tariffs?.length) === false) return;

  const listStyle = classNames(styles.list, className);

  return (
    Boolean(tariffs) && (
      <div className={listStyle}>
        {tariffs.map((tariff) => (
          <TariffCard key={tariff.id} tariff={tariff} />
        ))}
      </div>
    )
  );
};

export default TariffList;
