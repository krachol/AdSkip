import React, { Component } from 'react';
import { ChannelPropTypes } from '../data/channel';
import { func, string } from 'prop-types';

import styles from './ChannelList.scss';
import Channel from './Channel';
import ChannelListPlaceholder from './ChannelListPlaceholder';

export default class ChannelList extends Component {
  static propTypes = {
    channels: ChannelPropTypes.list.isRequired,
    onWatchStateChange: func.isRequired,
    placeholder: string,
    title: string.isRequired,
  };

  static defaultProps = {
    placeholder: null,
  };

  renderChannels(channels) {
    return channels.map(channel => {
      const onWatchStateChange = () => {
        this.props.onWatchStateChange(channel.id);
      };

      return (
        <Channel
          key={channel.id}
          onWatchStateChange={onWatchStateChange}
          {...channel}
        />
      );
    });
  }

  render() {
    return (
      <div className={styles['channel-list-container']}>
        <h1>{this.props.title}</h1>
        <ul className={styles['channel-list']}>
          {this.renderChannels(this.props.channels)}
          <ChannelListPlaceholder active={this.props.channels.length === 0}>
            {this.props.placeholder}
          </ChannelListPlaceholder>
        </ul>
      </div>
    );
  }
}
