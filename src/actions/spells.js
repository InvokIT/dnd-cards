import { v4 as uuid } from "uuid";

export const createSpell = () => ({
    type: "SPELL_CREATE",
    spellId: uuid()
});

export const modifySpell = (spellId, attributeName, attributeValue) => ({
    type: "SPELL_MODIFY",
    spellId,
    attributeName,
    attributeValue
});