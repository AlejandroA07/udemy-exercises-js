"use strict";

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}

// Sets
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
//console.log(staff);
//console.log(staffUnique);

// Maps

const rest = new Map();

rest
    .set('name', 'Classico Italiano')
    .set(1, 'Firenze, Italy').set('c', 929829)
    .set(true, 'We are open')
    .set(false, 'we are closed')
    .set('open', 11)
    .set('close', 23)
    .set('staff', ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'])
    // console.log(rest);
    // console.log(rest.get('name'));
    // console.log(rest.get(1));
    // console.log(rest.get(true));
    // console.log(rest.get(false));
    
    const time = 8;
    // console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// console.log(rest);
// console.log(rest.has('staff'));
// rest.delete(1)
// console.log(rest);
const arr = [1, 2];
rest.set(arr, 'Test');
// console.log(rest.get([1, 2])); = undefined
// console.log(rest.get(arr));
rest.set(document.querySelector('h1'), 'Heading');

const question = new Map([
    ['question', 'What is the best programming language in the world'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try again'],
]);

console.log(question);
console.log(Object.entries(openingHours));3

// convert objects to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap)

// No se porque esto funciona asi
for (const [key, value] of question) {
    typeof key === 'number' && console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

// convert Map to an array

console.log(...question)
