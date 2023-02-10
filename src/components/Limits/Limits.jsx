import React from 'react';

import styles from './styles.module.scss';

import Spinner from '../Spinner/Spinner';

import { useAuth } from '../../hooks/useAuth';
import { useGetAccountInfoQuery } from '../../redux/api/scan';

const Limits = () => {
  const { isLoggedIn } = useAuth();
  const { data: limits, isFetching } = useGetAccountInfoQuery();

  if (!isLoggedIn) return '';

  return (
    <div className={styles.limits}>
      {isFetching ? (
        <Spinner extClass={styles.spinner} />
      ) : (
        <>
          <p className={styles.text}>Использовано компаний</p>
          <p className={styles.used}>{limits?.usedCompanyCount}</p>
          <p className={styles.text}>Лимит по компаниям</p>
          <p className={styles.all}>{limits?.companyLimit}</p>
        </>
      )}
    </div>
  );
};

export default Limits;
