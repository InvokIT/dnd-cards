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
    <datalist id="spell-casttimes">
      <option value="1 standard action" />
      <option value="1 full round" />
      <option value="1 minute" />
      <option value="10 minutes" />
    </datalist>
    <datalist id="spell-ranges">
      <option value="Touch" />
      <option value="100ft + 10ft/level" />
      <option value="25 ft. + 5 ft./2 levels" />
    </datalist>
  </div>
);