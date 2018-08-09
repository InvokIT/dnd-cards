import React from 'react';
import style from "./NewSpellCard.css";

const NewSpellCard = ({onClick}) => (
  <article className={style.card}>
    <button onClick={onClick} title="Add new spell">+</button>
  </article>
);

export default NewSpellCard;