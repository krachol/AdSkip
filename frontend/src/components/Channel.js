import React from 'react';
import { ChannelStatus, ChannelPropTypes } from '../data/channel';
import { func } from 'prop-types';

import styles from './Chanel.scss';
import ChannelStatusIndicator from './ChannelStatusIndicator';
import ChannelStatusVoteSwitch from './ChannelStatusVoteSwitch';
import ChannelWatchSwitch from './ChannelWatchSwitch';

export default function Channel(props) {
  return (
    <li className={styles['channel-list-element']}>
      <div className={styles['description-container']}>
        <ChannelWatchSwitch
          isWatched={props.watched}
          onWatchStateChange={props.onWatchStateChange}
        />
        <span className={styles['name']}>{props.name}</span>
        <span className={styles['program']}>{props.program}</span>
      </div>
      <div className={styles['status-indicator-container']}>
        <ChannelStatusIndicator status={props.status} />
      </div>
      <ChannelStatusVoteSwitch className={styles['vote-switch-container']} />
    </li>
  );
}

Channel.propTypes = {
  id: ChannelPropTypes.id.isRequired,
  name: ChannelPropTypes.name.isRequired,
  status: ChannelPropTypes.status.isRequired,
  program: ChannelPropTypes.program.isRequired,
  watched: ChannelPropTypes.watched.isRequired,
  onWatchStateChange: func.isRequired,
};
