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

export const importFile = (file) => (dispatch, getState) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    const data = e.target.result;
    const spellArray = JSON.parse(data);
    dispatch(setSpells(spellArray));
  };

  reader.readAsText(file);
};

export const exportFile = () => (dispatch, getState) => {
  const state = getState();
  const data = JSON.stringify(
    state.sorting.map(spellId => state.spells[spellId]),
    null,
    4
  );
  const blob = new Blob([data], {type: "application/json"});
  const url = URL.createObjectURL(blob);

  var link = document.createElement("a");
  link.download = "spells.json";
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};
