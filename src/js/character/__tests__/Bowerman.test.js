import Bowerman from '../Bowerman';
import Character from '../Character';

describe('Bowerman', () => {
  let instance;
  
  beforeEach(() => {
    instance = new Bowerman('Робин');
  });
  
  test('Должен создать экземпляр класса', () => {
    expect(instance).toBeInstanceOf(Bowerman);
  });

  test('Должен наследоваться от класса Character', () => {
    expect(instance).toBeInstanceOf(Character);
  });

  test('Должен вывести атрибуты в консоль', () => {
    // Шпион на console.log
    const consoleSpy = jest.spyOn(console, 'log');

    instance.showAttributes();

    expect(consoleSpy).toHaveBeenCalledWith(
      `Имя: ${instance.name},\n` +
      `Тип: ${instance.type},\n` +
      `Здоровье: ${instance.health},\n` +
      `Уровень: ${instance.level},\n` +
      `Атака: ${instance.attack},\n` +
      `Защита: ${instance.defense}`
    );

    // Восстановление оригинальной функции console.log
    consoleSpy.mockRestore();
  });

  test('Должен установить атрибуты', () => {
    expect(instance.attack).toBe(25);
    expect(instance.defense).toBe(25);
  });
});
