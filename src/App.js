import React, { Component } from 'react';
import logo from './logo.svg';
import style from './App.css';
import CardListContainer from "./CardListContainer";

class App extends Component {
  constructor(props) {
    super(props);

    this._spellbook = props.spellbook;
  }

  render() {
    return (
      <div className={style.App}>
        <CardListContainer />
      </div>
    );
  }
}

export default App;
