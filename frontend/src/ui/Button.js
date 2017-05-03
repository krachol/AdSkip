import React from 'react';

import style from './Button.scss';

export default function(props) {
  return (
    <button className={style['btn']}>
      {props.children}
    </button>
  );
}
