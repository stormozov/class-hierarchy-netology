import Character from '../Character';

describe('Character', () => {
  let instance;
  const throwsDict = {
    name: 'Имя должно быть строкой длиной от 2 до 10 символов.',
    type: 'Некорректный тип персонажа.',
  }

  beforeEach(() => {
    instance = new Character('Робин', 'Swordsman');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Должен создать экземпляр класса', () => {
    expect(instance).toBeInstanceOf(Character);
  });

  test('Должен вернуть undefined при вызове метода setAttributes', () => {
    expect(instance.setAttributes()).toBeUndefined();
  });

  test('Должен вернуть успешно установить новые значения атрибутов при вызове метода setAttributes', () => {
    instance.setAttributes = jest.fn(() => {
      instance.level = 10;
      instance.attack = 45;
    });

    instance.setAttributes();

    expect(instance.level).toBe(10);
    expect(instance.attack).toBe(45);
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

  test('Должен выдать ошибку при вводе имени не в виде строки', () => {
    expect(() => new Character(123, 'Swordsman')).toThrow(throwsDict.name);
  });

  test('Должен выдать ошибку при вводе имени меньше 2 символов', () => {
    expect(() => new Character('В', 'Swordsman')).toThrow(throwsDict.name);
  });

  test('Должен выдать ошибку при вводе имени больше 10 символов', () => {
    expect(() => new Character('Максимилиан', 'Swordsman')).toThrow(throwsDict.name);
  });

  test('Должен выдать ошибку при вводе типа не в виде строки', () => {
    expect(() => new Character('Робин', 123)).toThrow(throwsDict.type);
  });

  test('Должен выдать ошибку при вводе типа, которого нет в списке', () => {
    expect(() => new Character('Робин', 'Archer')).toThrow(throwsDict.type);
  });
});
