import Demon from '../Demon';
import Character from '../Character';

describe('Demon', () => {
  let instance;

  beforeEach(() => {
    instance = new Demon('Робин');
  });

  test('Должен создать экземпляр класса', () => {
    expect(instance).toBeInstanceOf(Demon);
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

  test('Должен вернуть дефолтные значения attack и defense, если setAttributes не переопределен', () => {
    // Сохраняем оригинальный метод setAttributes
    const originalSetAttributes = Demon.prototype.setAttributes;
    // Мокаем метод setAttributes, чтобы он ничего не делал
    Demon.prototype.setAttributes = jest.fn(() => { });

    // Создаём новый экземпляр после мока
    const testInstance = new Demon('Тест');

    // Проверяем, что атрибуты остались значениями по умолчанию (0)
    expect(testInstance.attack).toBe(0);
    expect(testInstance.defense).toBe(0);

    // Восстанавливаем оригинальный метод
    Demon.prototype.setAttributes = originalSetAttributes;
  });
});
