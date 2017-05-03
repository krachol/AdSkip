import React, { Component } from 'react';

import Button from 'ui/Button';
import style from './Main.scss';

export default class Main extends Component {
  render() {
    return (
      <div>
        <h1 className={style['Main__heading']}>Ad Skip</h1>
        <main>
          Running on <a href="https://reactjs.org">React.js</a>
          <Button>Hello</Button>
        </main>
      </div>
    );
  }
}
