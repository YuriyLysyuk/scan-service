import React from 'react';
import { format, parseISO } from 'date-fns';

import styles from './styles.module.scss';
import { getContent } from './helpers';

import Button from '../Button/Button';

const DocumentCard = ({ doc }) => {
  const {
    issueDate,
    url,
    source: { name: sourceName },
    attributes: { isTechNews, isAnnouncement, isDigest, wordCount },
    title: { text: title },
    content: { markup },
  } = doc;

  const date = format(parseISO(issueDate), 'dd.MM.yyyy');

  const { bgUrl, content } = getContent(markup);

  const hasTags = isTechNews || isAnnouncement || isDigest;

  return (
    <div className={styles.card}>
      <div className={styles.meta}>
        <span className={styles.date}>{date}</span>

        {Boolean(url) ? (
          <a className={styles.source} href={url}>
            {sourceName}
          </a>
        ) : (
          <span>{sourceName}</span>
        )}
      </div>

      <h3 className={styles.title}>{title}</h3>

      {hasTags && (
        <div className={styles.tags}>
          {isTechNews && (
            <span className={styles.tag}>Технические новости</span>
          )}

          {isAnnouncement && (
            <span className={styles.tag}>Анонсы и события</span>
          )}

          {isDigest && <span className={styles.tag}>Сводки новостей</span>}
        </div>
      )}

      {Boolean(bgUrl) && (
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${bgUrl})` }}
        ></div>
      )}

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <div className={styles.footer}>
        {Boolean(url) && (
          <Button
            className={styles.readMore}
            size="small"
            color="secondary"
            href={url}
            newWindow
          >
            Читать в источнике
          </Button>
        )}

        <p className={styles.wordCount}>Слов: {wordCount}</p>
      </div>
    </div>
  );
};

export default DocumentCard;
