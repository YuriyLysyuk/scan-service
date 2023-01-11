import React from 'react';

import styles from './styles.module.scss';

import Button from '../../components/Button/Button';
import { ReactComponent as GoogleSVG } from '../../assets/images/google.svg';
import { ReactComponent as FacebookSVG } from '../../assets/images/facebook.svg';
import { ReactComponent as YandexSVG } from '../../assets/images/yandex.svg';

const UIPage = () => {
  return (
    <>
      <div className={styles.column}>
        <Button color="primary" size="big">
          Войти
        </Button>

        <Button color="primary" size="big" disabled>
          Войти
        </Button>

        <Button color="primary">Запросить данные</Button>

        <Button>Перейти в личный кабинет</Button>

        <Button color="secondary" size="small">
          Читать в источнике
        </Button>
      </div>

      <div className={styles.row}>
        <Button size="social">
          <GoogleSVG />
        </Button>

        <Button size="social">
          <FacebookSVG />
        </Button>

        <Button size="social">
          <YandexSVG />
        </Button>
      </div>
    </>
  );
};

export default UIPage;
