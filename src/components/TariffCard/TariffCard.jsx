import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.module.scss';

import Button from '../Button/Button';

import { formatPrice } from '../../utils.js/helpers';

const cx = classNames.bind(styles);

const TariffCard = ({
  tariff: {
    id,
    name,
    description,
    readMoreLink,
    price,
    oldPrice,
    credit,
    includes,
  },
}) => {
  const isCurrent = 'beginner' === id;

  const cardClass = cx({
    card: true,
    [`${id}`]: id,
    current: isCurrent,
  });

  return (
    <div className={cardClass}>
      <header className={styles.header}>
        {Boolean(name) && <h3>{name}</h3>}

        {Boolean(description) && <p>{description}</p>}
      </header>

      <div className={styles.body}>
        {Boolean(price) && (
          <div className={styles.price}>
            <span className={styles.new}>{formatPrice(price)}</span>

            {Boolean(oldPrice) && (
              <span className={styles.old}>{formatPrice(oldPrice)}</span>
            )}
            {Boolean(credit) && <p className={styles.credit}>{credit}</p>}
          </div>
        )}

        {Boolean(includes) && (
          <div className={styles.includes}>
            <p>В тариф входит:</p>

            <ul>
              {includes.map((include) => (
                <li key={include}>{include}</li>
              ))}
            </ul>
          </div>
        )}

        <Button href={readMoreLink} color="primary">
          Подробнее
        </Button>
      </div>
    </div>
  );
};

export default TariffCard;
