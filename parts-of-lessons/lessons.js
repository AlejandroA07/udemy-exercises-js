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

// Strings
const airLine = 'Tap Air Portugal';

console.log(airLine.slice(0, airLine.indexOf(' ')));
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));
console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());
console.log(airLine.trim());
console.log(airLine.toLowerCase().trim());

function fixedEmail(email) {
  email.toLowerCase().trim();
}
// Replace
const priceGB = '288,97£';
// First argument is what u want to replace and second what to be instead.
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';

// /door/ is called a regular expression and the g stand for global.
console.log(announcement.replace(/door/g, 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

// Booleans
const plane = 'A320neo';
console.log(plane.includes('A320'));
console.log(plane.startsWith('A320'));
console.log(plane.endsWith('neo'));

console.log('Manuel Almeida'.split(' '));

const [firstName, lastName] = 'Manuel Almeida'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');

console.log(newName);


function capitalizeName(name) {
  const names = name.split(' ');
  const upperName = [];
  
  for (const nam of names) {
    upperName.push(nam.replace(nam[0], nam[0].toUpperCase()));
    //upperName.push(nam[0].toUpperCase() + nam.slice(1));
  }
  console.log(upperName.join(' '));
}

capitalizeName('jessica ann smith davis');

const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(30, '+'));

function maskCreditCard(number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}



console.log(maskCreditCard(5448769835468934))

