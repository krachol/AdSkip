import React from 'react';
import classNames from 'classnames';
import { string } from 'prop-types';
import {
  ChannelStatus,
  ChannelPropTypes,
  channelStatusToString,
} from '../data/channel';

import styles from './ChannelStatusIndicator.scss';

export default function ChannelStatusIndicator(props) {
  const className = classNames(props.className, styles['status-indicator'], {
    [styles['ad']]: props.status === ChannelStatus.ADS,
    [styles['program']]: props.status === ChannelStatus.PROGRAM,
  });

  return <div className={className}>{channelStatusToString(props.status)}</div>;
}

ChannelStatusIndicator.propTypes = {
  status: ChannelPropTypes.status.isRequired,
  className: string,
};
