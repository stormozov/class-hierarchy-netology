import Magician from '../Magician';
import Character from '../Character';

describe('Magician', () => {
  let instance;

  beforeEach(() => {
    instance = new Magician('Робин');
  });

  test('Должен создать экземпляр класса', () => {
    expect(instance).toBeInstanceOf(Magician);
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
    expect(instance.attack).toBe(10);
    expect(instance.defense).toBe(40);
  });
});
