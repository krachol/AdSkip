import React, { Component } from 'react';

import Header from 'layout/Header';
import Content from 'layout/Content';
import ChannelContainer from '../containers/ChannelContainer';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content>
          <ChannelContainer />
        </Content>
      </div>
    );
  }
}
