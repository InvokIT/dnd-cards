import { connect } from 'react-redux';
import CardList from "./CardList";
import { createSpell } from "./actions/spells";

const mapStateToProps = (state, ownProps) => {
  const sorting = state.sorting;

  return {
    spellIds: sorting
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCreateSpellClicked: (e) => dispatch(createSpell())
  };
};

const CardListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);

export default CardListContainer;