import { v4 as uuid } from "uuid";

class Spell {
  constructor() {
    this.id = uuid();
  }
}

class Spellbook {
  constructor() {
    this.spells = [];
  }

  newSpell() {
    const spell = new Spell();
    this.spells.splice(0, 0, spell);
    return spell;
  }

  importFromFile(file) {

  }

  exportToFile() {

  }

  clear() {
    this.spells = [];
  }
}

export default Spellbook;