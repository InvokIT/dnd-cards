import { omit, keyBy } from "lodash-es";

const initialState = {};

const newSpell = (id) => ({id});

export default (state = initialState, action) => {
    const spellId = action.spellId;

    switch (action.type) {
        case "SPELL_CREATE":
            return {
                [spellId]: newSpell(spellId),
                ...state
            };
        case "SPELL_MODIFY":
            const spellAttrName = action.attributeName;
            const spellAttrValue = action.attributeValue;
            
            return {
                ...state,
                [spellId]: {
                    ...state[spellId],
                    ...{ [spellAttrName]:spellAttrValue }
                }
            };
        case "SPELL_DELETE":
            return omit(state, spellId);
        case "SPELLS_SET":
            return keyBy(action.spells, spell => spell.id);
        default:
            return state;
    }
};
