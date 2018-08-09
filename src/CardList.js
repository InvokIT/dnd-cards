import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import style from './CardList.css';
import CardContainer from "./CardContainer";
import NewSpellCard from "./NewSpellCard";

const CardList = ({spellIds, onCreateSpellClicked}) => {
  return (
    <ul className={style.list}>
      <li className={classNames(style.listItem)}>
        <NewSpellCard onClick={onCreateSpellClicked} />
      </li>
      {spellIds.map(spellId => 
        <li className={style.listItem} key={spellId}>
          <CardContainer spellId={spellId} />
        </li>
      )}
    </ul>
  );
};

CardList.propTypes = {
  spellIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCreateSpellClicked: PropTypes.func.isRequired
};

export default CardList;