import { sortHeroesByHealth } from './sortHeroes.js';

describe('sortHeroesByHealth', () => {
  test('should sort heroes by health in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const sorted = sortHeroesByHealth(heroes);

    // Используем toEqual для глубокого сравнения объектов
    expect(sorted).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);

    // Проверяем, что toBe не сработает (сравнение по ссылке)
    expect(sorted).not.toBe([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
  });

  test('should not mutate original array', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
    ];

    const sorted = sortHeroesByHealth(heroes);

    // Исходный массив не должен измениться
    expect(heroes).toEqual([
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
    ]);

    // Отсортированный массив - новый объект
    expect(sorted).not.toBe(heroes);
  });

  test('should handle empty array', () => {
    expect(sortHeroesByHealth([])).toEqual([]);
  });

  test('should handle single hero', () => {
    const heroes = [{ name: 'маг', health: 100 }];
    expect(sortHeroesByHealth(heroes)).toEqual([{ name: 'маг', health: 100 }]);
  });

  test('should handle heroes with same health', () => {
    const heroes = [
      { name: 'герой1', health: 50 },
      { name: 'герой2', health: 50 },
      { name: 'герой3', health: 100 },
    ];

    const sorted = sortHeroesByHealth(heroes);

    expect(sorted).toEqual([
      { name: 'герой3', health: 100 },
      { name: 'герой1', health: 50 },
      { name: 'герой2', health: 50 },
    ]);
  });
});