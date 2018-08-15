import React from 'react';
import "./NewSpellCard.css";
import { cardBackgroundImages } from "./resources";

const NewSpellCard = ({onClick}) => (
  <button onClick={onClick} title="Click to add a spell card" className="new-spell-card" style={{backgroundImage:`url(${cardBackgroundImages[0]})`}}>
    <span>Create Spell</span>
  </button>
);

export default NewSpellCard;