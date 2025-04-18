import Character from './Character';

/**
 * Класс персонажа Magician.
 * @extends Character
 */
export default class Magician extends Character {

  constructor(name) {
    super(name, 'Magician');

    this.setAttributes();
  }

  setAttributes() {
    this.attack = 10;
    this.defense = 40;
  }
}
