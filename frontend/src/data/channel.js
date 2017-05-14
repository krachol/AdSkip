import PropTypes from 'prop-types';

export const ChannelStatus = {
  ADS: Symbol(),
  PROGRAM: Symbol(),
};

export function channelStatusToString(status) {
  switch (status) {
    case ChannelStatus.ADS:
      return 'Reklama';
    case ChannelStatus.PROGRAM:
      return 'Program';
    default:
      return '';
  }
}

export const ChannelPropTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  program: PropTypes.string,
  status: PropTypes.oneOf(Object.values(ChannelStatus)),
  watched: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      program: PropTypes.string.isRequired,
      status: PropTypes.oneOf(Object.values(ChannelStatus)).isRequired,
      watched: PropTypes.bool.isRequired,
    }),
  ),
};

export const MOCK_CHANNELS = [
  {
    id: 'polsat',
    name: 'Polsat',
    program: 'M jak Miłość',
    status: ChannelStatus.PROGRAM,
    watched: false,
  },
  {
    id: 'tvn',
    name: 'TVN',
    program: 'M jak Miłość',
    status: ChannelStatus.ADS,
    watched: false,
  },
  {
    id: 'tvp1',
    name: 'TVP 1',
    program: 'M jak Miłość',
    status: ChannelStatus.PROGRAM,
    watched: false,
  },
  {
    id: 'tvp2',
    name: 'TVP 2',
    program: 'M jak Miłość',
    status: ChannelStatus.PROGRAM,
    watched: true,
  },
  {
    id: 'canalplus',
    name: 'Canal+',
    program: 'M jak Miłość',
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
