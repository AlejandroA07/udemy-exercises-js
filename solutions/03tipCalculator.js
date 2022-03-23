
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];


function calcTip(bill) {
    return bill > 50 && bill < 300 ? 15 / 100 * bill : 20 / 100 * bill;
}

const totals = [];
const tips = [];


bills.forEach(bill => {
    const tip = calcTip(bill);
    tips.push(tip);
    totals.push(bill + tip);
});

console.log(tips, totals);

function calcAvg(numbers) {
    const sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    return sum / numbers.length;
}

console.log(calcAvg(totals));

/* function check(bill) {
    const tip = bill < 50 && bill > 300 ? 15 / 100 * bill : 20 / 100 * bill;
    const total = tip + bill;
    return `The bill was ${bill}, the tip was ${tip} and the total money spend was ${total}.`
}
 */

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


