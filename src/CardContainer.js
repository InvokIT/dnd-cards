import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Card from "./Card";
import { modifySpell } from "./actions/spells";

const mapStateToProps = (state, ownProps) => {
  const spellId = ownProps.spellId;
  const spell = state.spells[spellId];

  return {...spell};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const spellId = ownProps.spellId;

  return {
    onAttributeChanged: (e) => dispatch(modifySpell(spellId, e.target.name, e.target.value))
  };
};

const CardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

CardContainer.propTypes = {
  spellId: PropTypes.string.isRequired
};

export default CardContainer;