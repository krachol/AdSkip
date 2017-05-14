import React, { Component } from 'react';

import styles from './ChannelList.scss';
import Channel from './Channel';

export default class ChannelList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      channels: [
        { id: 'polsat', name: 'Polsat', ads: false },
        { id: 'tvn', name: 'TVN', ads: true },
        { id: 'tvp1', name: 'TVP 1', ads: false },
        { id: 'tvp2', name: 'TVP 2', ads: false },
        { id: 'canalplus', name: 'Canal+', ads: false },
      ],
    };
  }

  renderChannels(channels) {
    return channels.map(channel => {
      return <Channel key={channel.id} name={channel.name} ads={channel.ads} />;
    });
  }

  render() {
    return (
      <div className={styles['ChannelList']}>
        <h1>Kanały</h1>
        <ul className={styles['ChannelList__list']}>
          {this.renderChannels(this.state.channels)}
        </ul>
      </div>
    );
  }
}
