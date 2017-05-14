import React from 'react';
import { bool } from 'prop-types';
import styles from './ChannelListPlaceholder.scss';

export default function ChannelListPlaceholder({ children, active = false }) {
  if (!active || !children) {
    return null;
  }

  return (
    <li className={styles['channel-list-placeholder']}>
      {children}
    </li>
  );
}

ChannelListPlaceholder.propTypes = {
  active: bool,
};
