import React from 'react';

import styles from './styles.module.scss';

import Button from '../../components/Button/Button';

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
    </>
  );
};

export default UIPage;
