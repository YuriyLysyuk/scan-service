import React from 'react';

import styles from './styles.module.scss';

import Spinner from '../Spinner/Spinner';
import HistogramsSlider from '../HistogramsSlider/HistogramsSlider';

import { useGetObjectSearchHistogramsQuery } from '../../redux/api/scan';
import { getObjectSearchRequest } from '../../redux/api/requests';

const Histograms = ({ actionData }) => {
  const request = getObjectSearchRequest(actionData);
  const { data, isLoading } = useGetObjectSearchHistogramsQuery(request);

  const total = isLoading ? (
    <Spinner extClass={styles.spinner} />
  ) : data ? (
    data.total
  ) : (
    0
  );

  return (
    <>
      <p className={styles.founded}>Найдено {total} вариантов</p>

      {data?.data && (
        <HistogramsSlider isLoading={isLoading} slides={data?.data} />
      )}
    </>
  );
};

export default Histograms;
