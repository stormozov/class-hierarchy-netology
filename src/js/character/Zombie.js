import Character from './Character';

/**
 * Класс персонажа Zombie.
 * @extends Character
 */
export default class Zombie extends Character {

  constructor(name) {
    super(name, 'Zombie');

    this.setAttributes();
  }

  setAttributes() {
    this.attack = 40;
    this.defense = 10;
  }
}
