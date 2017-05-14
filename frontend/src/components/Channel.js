import React from 'react';
import { ChannelStatus, ChannelPropTypes } from '../data/channel';
import { string, oneOf } from 'prop-types';

import styles from './Chanel.scss';
import ChannelStatusIndicator from './ChannelStatusIndicator';

export default function Channel(props) {
  return (
    <li className={styles['channel-list-element']}>
      <div className={styles['name']}>{props.name}</div>
      <ChannelStatusIndicator status={props.status} />
    </li>
  );
}

Channel.propTypes = {
  name: string.isRequired,
  status: ChannelPropTypes.status.isRequired,
};
