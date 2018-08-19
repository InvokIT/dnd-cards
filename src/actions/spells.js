import { v4 as uuid } from "uuid";
import { sync as syncStorage } from "./storage";

export const createSpell = () => async (dispatch, getState) => {
    await dispatch({
        type: "SPELL_CREATE",
        spellId: uuid()
    });

    dispatch(syncStorage());
};

export const modifySpell = (spellId, attributeName, attributeValue) => async (dispatch, getState) => {
    await dispatch({
        type: "SPELL_MODIFY",
        spellId,
        attributeName,
        attributeValue
    });

    dispatch(syncStorage());
};

export const deleteSpell = (spellId) => async (dispatch, getState) => {
    await dispatch({
        type: "SPELL_DELETE",
        spellId
    });

    dispatch(syncStorage());
};

export const setSpells = (spellArray) => async (dispatch, getState) => {
    await dispatch({
        type: "SPELLS_SET",
        spells: spellArray
    });

    dispatch(syncStorage());
};
