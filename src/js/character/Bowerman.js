import Character from './Character';

/**
 * Класс персонажа Bowerman.
 * @extends Character
 */
export default class Bowerman extends Character {

  constructor(name) {
    super(name, 'Bowman');

    this.setAttributes();
  }

  setAttributes() {
    this.attack = 25;
    this.defense = 25;
  }
}
