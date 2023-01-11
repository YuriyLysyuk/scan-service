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

      <div className={styles.row}>
        <div>
          <h1>Заголовок 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            quidem nobis error distinctio ipsa sit praesentium expedita itaque
            fugit, voluptatem iste quis rerum est odit odio pariatur. Voluptate,
            esse consequatur.
          </p>
          <h2>Заголовок 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            quidem nobis error distinctio ipsa sit praesentium expedita itaque
            fugit, voluptatem iste quis rerum est odit odio pariatur. Voluptate,
            esse consequatur.
          </p>
          <h3>Заголовок 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            quidem nobis error distinctio ipsa sit praesentium expedita itaque
            fugit, voluptatem iste quis rerum est odit odio pariatur. Voluptate,
            esse consequatur.
          </p>
        </div>
      </div>
    </>
  );
};

export default UIPage;
