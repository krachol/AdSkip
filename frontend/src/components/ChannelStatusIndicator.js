import React from 'react';
import classNames from 'classnames';
import { oneOf } from 'prop-types';
import { ChannelStatus, ChannelPropTypes } from '../data/channel';
import styles from './ChannelStatusIndicator.scss';

const captions = {
  [ChannelStatus.ADS]: 'Reklamy',
  [ChannelStatus.PROGRAM]: 'Program',
};

export default function ChannelStatusIndicator(props) {
  const className = classNames(styles['status-indicator'], {
    [styles['ad']]: props.status === ChannelStatus.ADS,
    [styles['program']]: props.status === ChannelStatus.PROGRAM,
  });

  return <div className={className}>{captions[props.status]}</div>;
}

ChannelStatusIndicator.propTypes = {
  status: ChannelPropTypes.status.isRequired,
};
