import React, { Component } from 'react';
import {
  MOCK_CHANNELS,
  findUnwatchedChannels,
  findWatchedChannels,
  setChannelWatchState,
} from '../data/channel';

import ChannelList from '../components/ChannelList';

export default class ChannelContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { channels: MOCK_CHANNELS };
  }

  watchChannel = id => {
    return this.setState(prevState => {
      return {
        channels: setChannelWatchState(id, true, prevState.channels),
      };
    });
  };

  unwatchChannel = id => {
    return this.setState(prevState => {
      return {
        channels: setChannelWatchState(id, false, prevState.channels),
      };
    });
  };

  render() {
    return (
      <div>
        <ChannelList
          title="Obserwowane kanały"
          channels={findWatchedChannels(this.state.channels)}
          onWatchStateChange={this.unwatchChannel}
          placeholder="Brak obserwowanych kanałów"
        />
        <ChannelList
          title="Kanały"
          channels={findUnwatchedChannels(this.state.channels)}
          onWatchStateChange={this.watchChannel}
          placeholder="Brak dostępnych kanałów"
        />
      </div>
    );
  }
}
