import React from 'react';
import { ChannelPropTypes } from '../data/channel';
import { func } from 'prop-types';

import styles from './ChannelWatchSwitch.scss';

export default function ChannelWatchSwitch(props) {
  return (
    <button
      onClick={props.onWatchStateChange}
      className={styles['watch-switch']}
    >
      {props.isWatched ? 'Usun' : 'Obserwuj'}
    </button>
  );
}

ChannelWatchSwitch.propTypes = {
  isWatched: ChannelPropTypes.watched,
  onWatchStateChange: func.isRequired,
};
