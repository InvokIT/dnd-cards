import React from "react";

export default () => (
  <div>
    <datalist id="spell-schools">
      <option value="Abjuration" />
      <option value="Conjuration" />
      <option value="Divination" />
      <option value="Enchantment" />
      <option value="Evocation" />
      <option value="Illusion" />
      <option value="Necromancy" />
      <option value="Transmutation" />
    </datalist>
    <datalist id="spell-subschools-conjuration">
      <option value="Calling" />
      <option value="Creation" />
      <option value="Healing" />
      <option value="Summoning" />
      <option value="Teleportation" />
    </datalist>
    <datalist id="spell-subschools-divination">
      <option value="Scrying" />
    </datalist>
    <datalist id="spell-subschools-enchantment">
      <option value="Charm" />
      <option value="Compulsion" />
    </datalist>
    <datalist id="spell-subschools-illusion">
      <option value="Disbelief" />
      <option value="Figment" />
      <option value="Glamer" />
      <option value="Pattern" />
      <option value="Phantasm" />
      <option value="Shadow" />
    </datalist>
    <datalist id="spell-saves">
      <option value="Fortitude negates" />
      <option value="Reflex negates" />
      <option value="Reflex halves" />
      <option value="Will negates" />
    </datalist>
  </div>
);