import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

import Spinner from '../Spinner/Spinner';
import Button from '../Button/Button';
import DocumentCard from '../DocumentCard/DocumentCard';

import { SEARCH_URL } from '../../constants';

import {
  useGetObjectSearchQuery,
  useGetDocumentsQuery,
} from '../../redux/api/scan';
import {
  getObjectSearchRequest,
  getDocumentsRequest,
} from '../../redux/api/requests';

const getIdsToShow = (docs = [], end) => {
  return docs.slice(0, end);
};

const DocumentList = ({ actionData }) => {
  const objectSearchRequest = getObjectSearchRequest(actionData);
  const objectSearch = useGetObjectSearchQuery(objectSearchRequest);

  const [skip, setSkip] = useState(true);
  const [show, setShow] = useState(10);
  const [idsToShow, setIdsToShow] = useState([]);

  const documentsRequest = getDocumentsRequest(idsToShow);
  const documents = useGetDocumentsQuery(documentsRequest, { skip });

  useEffect(() => {
    if (objectSearch.isSuccess) {
      setIdsToShow(getIdsToShow(objectSearch.data, show));
      setSkip(false);
    }
  }, [objectSearch.isSuccess, objectSearch.data, show]);

  if (objectSearch.isLoading) return <Spinner />;
  if (documents.isLoading) return <Spinner />;

  if (!documents.data) {
    return (
      <p>
        Ничего не найдено, попробуйте{' '}
        <Link to={SEARCH_URL}>изменить параметры поиска</Link>
      </p>
    );
  }

  const canLoadMore = objectSearch.data && show < objectSearch.data.length;

  const handleShowMoreClick = (e) => {
    e.preventDefault();
    setShow(show + 10);
  };

  return (
    <div className={styles.list}>
      {documents.data &&
        documents.data.map((doc) => (
          <DocumentCard key={doc.ok.id} doc={doc.ok} />
        ))}

      {canLoadMore && (
        <Button
          className={styles.loadMore}
          color="primary"
          onClick={handleShowMoreClick}
          disabled={documents.isFetching}
          isLoading={documents.isFetching}
        >
          Показать больше
        </Button>
      )}
    </div>
  );
};

export default DocumentList;
