import { loadSpells } from "./spells";

export const load = () => (dispatch, getState) => {
  const spellArray = JSON.parse(window.localStorage.getItem("spells"));
  dispatch(loadSpells(spellArray));
};

export const sync = () => (dispatch, getState) => {
  const state = getState();

  const spellArray = state.sorting.map(spellId => state.spells[spellId]);

  window.localStorage.setItem("spells", JSON.stringify(spellArray));

  dispatch(syncComplete());
};

export const syncComplete = () => ({
  type: "SYNC_COMPLETE"
});
