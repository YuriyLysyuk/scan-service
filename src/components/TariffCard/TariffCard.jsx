import React from 'react';

import styles from './styles.module.scss';

import Button from '../Button/Button';

const TariffCard = ({
  tariff: { name, description, price, oldPrice, credit, includes },
}) => {
  return (
    <div className={styles.card}>
      <header className="header">
        <div className="title">
          {Boolean(name) && <h3>{name}</h3>}

          {Boolean(description) && <p>{description}</p>}
        </div>
      </header>

      <div className="body">
        <div className="price">
          {Boolean(price) && <span>{price} ₽</span>}

          {Boolean(oldPrice) && <span className="old">{oldPrice} ₽</span>}
        </div>

        {Boolean(credit) && <price className="credit">{credit}</price>}

        {Boolean(includes) && (
          <div className="includes">
            <p>В тариф входит:</p>

            <ul>
              {includes.map((include) => (
                <li>{include}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <footer className="footer">
        <Button color="primary">Подробнее</Button>
      </footer>
    </div>
  );
};

export default TariffCard;
