import Character from './Character';

/**
 * Класс персонажа Demon.
 * @extends Character
 */
export default class Demon extends Character {

  constructor(name) {
    super(name, 'Daemon');

    this.setAttributes();
  }

  setAttributes() {
    this.attack = 10;
    this.defense = 40;
  }
}
