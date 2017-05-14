import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './Button.scss';

export default function Button(props) {
  const className = classNames(style['btn'], style[props.type]);

  return (
    <button className={className}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'error']),
};

Button.defaultProps = {
  type: 'primary',
};
