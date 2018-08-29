import React from 'react';
import PropTypes from "prop-types";
import './CardList.css';
import CardContainer from "./CardContainer";
import NewSpellCard from "./NewSpellCard";

const CardList = ({spellIds, onCreateSpellClicked}) => {
  return (
    <ul className="cardList">
      <li>
        <NewSpellCard onClick={onCreateSpellClicked} />
      </li>
      {spellIds.map(spellId => 
        <li key={spellId}>
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