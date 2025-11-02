/**
 * Сортирует героев по уровню здоровья в порядке убывания
 * @param {Array} heroes - Массив героев
 * @returns {Array} Отсортированный массив героев
 */
export function sortHeroesByHealth(heroes) {
    return heroes.slice().sort((a, b) => b.health - a.health);
  }