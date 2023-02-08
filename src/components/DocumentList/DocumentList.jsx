import React from 'react';

import styles from './styles.module.scss';

import Spinner from '../Spinner/Spinner';

import { useGetObjectSearchQuery } from '../../redux/api/scan';
import { getObjectSearchRequest } from '../../redux/api/requests';

const DocumentList = ({ actionData }) => {
  const request = getObjectSearchRequest(actionData);
  const { data, isLoading } = useGetObjectSearchQuery(request);

  return <div>{isLoading ? <Spinner /> : console.log(data)}</div>;
};

export default DocumentList;
