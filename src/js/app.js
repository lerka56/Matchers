import { sortHeroesByHealth } from './sortHeroes.js';

// Демонстрация работы функции
const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'рыцарь', health: 90 },
];

console.log('Исходный массив:');
console.log(heroes);

console.log('\nОтсортированный массив:');
console.log(sortHeroesByHealth(heroes));