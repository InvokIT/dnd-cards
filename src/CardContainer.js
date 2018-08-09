import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Card from "./Card";
import { modifySpell } from "./actions/spells";

const mapStateToProps = (state, ownProps) => {
  const spellId = ownProps.spellId;
  const spell = state.spells[spellId];

  let schoolsAndDescriptors = spell.school;
  if (spell.subschool) {
    schoolsAndDescriptors += ` (${spell.subschool})`;
  }

  if (spell.descriptors && spell.descriptors.length > 0) {
    schoolsAndDescriptors += ` [${spell.descriptions.join(", ")}]`
  }

  return {
    ...spell,
    schoolsAndDescriptors: schoolsAndDescriptors,
  };
};

const handleAttributeChanged = (dispatch, spellId, event) => {
  const attrName = e.target.name;
  const attrValue = e.target.value;

  if (attrName === "schoolsAndDescriptors") {
    const [, school, subschool, descriptors] = /^(\w*)\s*(?:\((\w+)\))?\s*(?:\[(\w+(?:,\s*\w+))\])?/.exec(attrValue);
    dispatch(modifySpell(spellId, "school", school));
    dispatch(modifySpell(spellId, "subschool", subschool));
    dispatch(modifySpell(spellId, "descriptors", descriptors.split(',').map(v = v.trim())));
  }

  dispatch(modifySpell(spellId, attrName, attrValue));
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const spellId = ownProps.spellId;

  return {
    onAttributeChanged: (e) => handleAttributeChanged(dispatch, spellId, e);
  }
};

const CardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

CardContainer.propTypes = {
  spellId: PropTypes.string.isRequired
}

export default CardContainer;