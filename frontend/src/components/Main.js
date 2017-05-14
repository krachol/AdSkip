import React, { Component } from 'react';

import Header from 'layout/Header';
import Content from 'layout/Content';
import ChannelList from './ChannelList';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content>
          <ChannelList />
        </Content>
      </div>
    );
  }
}
