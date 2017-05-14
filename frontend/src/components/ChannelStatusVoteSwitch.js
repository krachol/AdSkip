import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './ChannelStatusVoteSwitch.scss';

export default class ChannelStatusVoteSwitch extends Component {
  render() {
    const className = classNames(
      this.props.className,
      styles['vote-switch-container'],
    );

    return (
      <div className={className}>
        <span>Głosuj: </span>
        <button>Reklama</button>
        <button>Program</button>
      </div>
    );
  }
}
