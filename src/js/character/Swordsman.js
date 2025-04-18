import Character from './Character';

/**
 * Класс персонажа Swordsman.
 * @extends Character
 */
export default class Swordsman extends Character {

  constructor(name) {
    super(name, 'Swordsman');

    this.setAttributes();
  }

  setAttributes() {
    this.attack = 40;
    this.defense = 10;
  }
}
