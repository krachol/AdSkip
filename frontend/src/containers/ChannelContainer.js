import React, { Component } from 'react';
import Push from 'push.js';
import {
  MOCK_CHANNELS,
  ChannelStatus,
  findUnwatchedChannels,
  findWatchedChannels,
  setChannelWatchState,
  setChannelStatus,
} from '../data/channel';

import ChannelList from '../components/ChannelList';

export default class ChannelContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { channels: MOCK_CHANNELS };
  }

  // Fake notification
  componentDidMount() {
    setTimeout(() => {
      this.setState(prevState => {
        const channel = prevState.channels[0];
        Push.create(`Kanał ${channel.name} zmienił status!`);

        return {
          channels: setChannelStatus(
            channel.id,
            ChannelStatus.ADS,
            prevState.channels,
          ),
        };
      });
    }, 5000);
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
