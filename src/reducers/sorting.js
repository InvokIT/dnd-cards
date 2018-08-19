import { without } from "lodash-es";

const initialState = [];

export default (state = initialState, action) => {
    const spellId = action.spellId;

    switch (action.type) {
        case "SPELL_CREATE":
            return [spellId, ...state];
        case "SPELL_DELETE":
            return without(state, spellId);
        case "SPELLS_SET":
            return action.spells.map(spell => spell.id);
        default:
            return state;
    }
};
