
const bills = [275, 40, 430];

/* function check(bill) {
    const tip = bill < 50 && bill > 300 ? 15 / 100 * bill : 20 / 100 * bill;
    const total = tip + bill;
    return `The bill was ${bill}, the tip was ${tip} and the total money spend was ${total}.`
}
 */
function calcTip(bill) {
    return bill < 50 && bill > 300 ? 15 / 100 * bill : 20 / 100 * bill;
}

const totals = [];
const tips = [];
//tips.push(calcTip())
//tips.push(bills.map(el => calcTip(el)));
/* for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]))
}
for (let i = 0; i < bills.length; i++) {
    totals.push(bills[i] + tips[i]);

}
 */

/* function calcTipAndTotal(arr) {
    const total = [];
    const tips = [];
    for (let i = 0; i < arr.length; i++) {
        tips.push(calcTip(arr[i]));
        //total.push(tips[i] + arr[i])

    }
    return tips;
}

console.log(calcTipAndTotal(bills));
 */

bills.forEach(bill => {
    const tip = calcTip(bill);
    tips.push(tip);
    totals.push(bill + tip);
});

console.log(tips);
console.log(totals);