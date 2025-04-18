import Character from './Character';

/**
 * Класс персонажа Undead.
 * @extends Character
 */
export default class Undead extends Character {

  constructor(name) {
    super(name, 'Undead');

    this.setAttributes();
  }
  
  setAttributes() {
    this.attack = 25;
    this.defense = 25;
  }
}
