import React, { Component } from 'react';
import logo from './logo.svg';
import style from './App.css';
import CardList from "./CardList";

class App extends Component {
  constructor(props) {
    super(props);

    this._spellbook = props.spellbook;
  }

  render() {
    return (
      <div className={style.App}>
        <CardList cards={this._spellbook.spells} />
      </div>
    );
  }
}

export default App;
