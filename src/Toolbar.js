import React, { Component } from 'react';
import style from "./Toolbar.css";

class Toolbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className={style.toolbar}>
        <button>+</button>
        <input type="file" multiple>Import...</input>
      </section>
    );
  }
}