import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './ChannelStatusVoteSwitch.scss';

const SelectedState = { NONE: Symbol(), LEFT: Symbol(), RIGHT: Symbol() };

export default class ChannelStatusVoteSwitch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: SelectedState.NONE,
    };
  }

  selectLeft = () => {
    this.setState({ selected: SelectedState.LEFT });
  };

  selectRight = () => {
    this.setState({ selected: SelectedState.RIGHT });
  };

  render() {
    const className = classNames(
      this.props.className,
      styles['vote-switch-container'],
    );

    const leftButtonClassName = classNames(styles['left-button'], {
      [styles['active']]: this.state.selected === SelectedState.LEFT,
    });
    const rightButtonClassName = classNames(styles['right-button'], {
      [styles['active']]: this.state.selected === SelectedState.RIGHT,
    });

    return (
      <div className={className}>
        <span className={styles['caption']}>Twój głos</span>
        <div className={styles['buttons']}>
          <button onClick={this.selectLeft} className={leftButtonClassName}>
            Reklama
          </button>
          <button onClick={this.selectRight} className={rightButtonClassName}>
            Program
          </button>
        </div>
      </div>
    );
  }
}
