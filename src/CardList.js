import React from 'react';
import style from './CardList.css';
import CardContainer from "./CardContainer";

const CardList = ({spellbook}) => {
  return (
    <ul className={style.list}>
      {spellbook.spells.map(spell => 
        <li>
          <CardContainer spell={spellbook.spell} onSpellChange={spellbook.updateSpell.bind(spell)} />
        </li>
      )}
    </ul>
  );
};

export default CardList;