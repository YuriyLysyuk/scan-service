import React, { useEffect, useState } from 'react';

import styles from './styles.module.scss';

import Spinner from '../Spinner/Spinner';
import Button from '../Button/Button';

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

  const canLoadMore = objectSearch.data && show < objectSearch.data.length;

  const handleShowMoreClick = (e) => {
    e.preventDefault();
    setShow(show + 10);
  };

  return (
    <div>
      {documents.data &&
        documents.data.map((doc) => <p key={doc.ok.id}>{doc.ok.title.text}</p>)}

      {canLoadMore && (
        <Button
          className={styles.loadMore}
          color="primary"
          onClick={handleShowMoreClick}
          disabled={documents.isFetching}
        >
          Показать больше
        </Button>
      )}
    </div>
  );
};

export default DocumentList;
