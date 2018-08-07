import React from 'react';
import style from "./AddCardButton.css";

const AddCardButton = ({onClick}) => (
  <article className={style.card}>
    <button onClick={onClick} title="Add new card">+</button>
  </article>
);

export default AddCardButton;