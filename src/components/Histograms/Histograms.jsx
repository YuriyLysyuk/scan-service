import React from 'react';
import { useActionData } from 'react-router-dom';

import styles from './styles.module.scss';

import Spinner from '../Spinner/Spinner';
import HistogramsSlider from '../HistogramsSlider/HistogramsSlider';

import { useGetObjectSearchHistogramsQuery } from '../../redux/api/scan';
import { getObjectSearchRequest } from '../../redux/api/requests';

const Histograms = () => {
  // const actionData = useActionData();
  const request = getObjectSearchRequest(actionData);
  const { data, isLoading } = useGetObjectSearchHistogramsQuery(request);

  return (
    <>
      <p className={styles.founded}>
        Найдено {isLoading ? <Spinner /> : data.total} вариантов
      </p>

      <HistogramsSlider
        isLoading={isLoading}
        slides={isLoading ? [] : data.data}
      />
    </>
  );
};

export default Histograms;
