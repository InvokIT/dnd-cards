import { omit } from "lodash-es";
const initialState = {};

export default (state = initialState, action) => {
    const spellId = action.spellId;

    switch (action.type) {
        case "SPELL_CREATE":
            return { [spellId]:{ id:spellId }, ...state };
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
        default:
            return state;
    }
};
