
const bills = [275, 40, 430];

/* function check(bill) {
    const tip = bill < 50 && bill > 300 ? 15 / 100 * bill : 20 / 100 * bill;
    const total = tip + bill;
    return `The bill was ${bill}, the tip was ${tip} and the total money spend was ${total}.`
}
console.log(check(bills[0])); */ 

bills.forEach(bill => {
    const tip = bill < 50 && bill > 300 ? 15 / 100 * bill : 20 / 100 * bill;
const total = tip + bill;
console.log(`The bill was ${bill}, the tip was ${tip} and the total money spend was ${total}.`)
});