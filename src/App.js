import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SpellsDataLists from "./SpellsDataLists";
import CardListContainer from "./CardListContainer";

class App extends Component {
  constructor(props) {
    super(props);

    this._spellbook = props.spellbook;
  }

  render() {
    return (
      <div className="app">
        <SpellsDataLists />
        <CardListContainer />
      </div>
    );
  }
}

export default App;
