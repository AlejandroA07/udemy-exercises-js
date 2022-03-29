

const arr = [
    {firstName:"John", lastName:"Doe", age:46},
    {firstName:"Joanne", lastName:"Doe", age:43},
    {firstName:"Rafael", lastName:"Milanes", age:30},
    {firstName:"Luis", lastName:"Paz", age:33}
];

const sortedByAge = arr.sort((a, b) => (a.age > b.age ? 1 : -1));
console.log(sortedByAge)

 