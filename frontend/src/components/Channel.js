import React from 'react';
import classNames from 'classnames';
import { string, bool } from 'prop-types';
import styles from './Chanel.scss';

export default function Channel(props) {
  const statusClassName = classNames(styles['status'], {
    [styles['active']]: !props.ads,
  });

  return (
    <li className={styles['Channel__list-element']}>
      <div className={styles['Channel__name']}>
        {props.name}
      </div>
      <div className={statusClassName}>
        {props.ads ? 'Reklamy' : 'Film'}
      </div>
    </li>
  );
}

Channel.propTypes = {
  name: string.isRequired,
  ads: bool.isRequired,
};
