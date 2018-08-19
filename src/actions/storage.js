import { debounce } from "lodash-es";
import { setSpells } from "./spells";

export const load = () => (dispatch, getState) => {
  const spellArray = JSON.parse(window.localStorage.getItem("spells"));
  if (spellArray) {
    dispatch(setSpells(spellArray));
  }
};

const syncImpl = debounce((dispatch, getState) => {
  const state = getState();

  const spellArray = state.sorting.map(spellId => state.spells[spellId]);

  window.localStorage.setItem("spells", JSON.stringify(spellArray));

  dispatch(syncComplete());
}, 1000);

export const sync = () => (dispatch, getState) => {
  syncImpl(dispatch, getState);
};

export const syncComplete = () => ({
  type: "SYNC_COMPLETE"
});
