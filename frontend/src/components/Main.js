import React, { Component } from 'react';
import style from './Main.scss';

console.log({ style });

export default class Main extends Component {
  render() {
    return (
      <div>
        <h1 className={style['Main__heading']}>Ad Skip</h1>
        <main>
          Running on <a href="https://reactjs.org">React.js</a>
        </main>
      </div>
    );
  }
}
