import PropTypes from 'prop-types';

export const ChannelStatus = {
  ADS: Symbol(),
  PROGRAM: Symbol(),
};

export const ChannelPropTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.oneOf(Object.values(ChannelStatus)).isRequired,
      watched: PropTypes.bool.isRequired,
    }),
  ),
  status: PropTypes.oneOf(Object.values(ChannelStatus)),
};

export const MOCK_CHANNELS = [
  {
    id: 'polsat',
    name: 'Polsat',
    status: ChannelStatus.PROGRAM,
    watched: false,
  },
  { id: 'tvn', name: 'TVN', status: ChannelStatus.ADS, watched: false },
  {
    id: 'tvp1',
    name: 'TVP 1',
    status: ChannelStatus.PROGRAM,
    watched: false,
  },
  {
    id: 'tvp2',
    name: 'TVP 2',
    status: ChannelStatus.PROGRAM,
    watched: true,
  },
  {
    id: 'canalplus',
    name: 'Canal+',
    status: ChannelStatus.PROGRAM,
    watched: false,
  },
];

export function findUnwatchedChannels(channels) {
  return channels.filter(channel => !channel.watched);
}

export function findWatchedChannels(channels) {
  return channels.filter(channel => channel.watched);
}

export function setChannelWatchState(id, value, channels) {
  return channels.map(channel => {
    if (channel.id === id) {
      return Object.assign(channel, { watched: value });
    }

    return channel;
  });
}
