import React from 'react';

import styles from './styles.module.scss';

import { CONTACTS, COPYRIGHT } from '../../constants';

const { address, phone, email } = CONTACTS;

const FooterInfo = () => {
  return (
    <div className={styles.info}>
      <ul className={styles.contacts}>
        <li>{address}</li>
        <li>
          <a href={phone.link}>{phone.text}</a>
        </li>
        <li>
          <a href={email.link}>{email.text}</a>
        </li>
      </ul>

      <p className={styles.copyright}>{COPYRIGHT}</p>
    </div>
  );
};

export default FooterInfo;
