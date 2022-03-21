"use strict"

const scores = {
    dolphinScore1 : [96, 108, 89],
    koalaScore1 : [88, 91, 110],
    dolphinScore2 : [97, 112, 101],
    koalaScore2 : [109, 95, 123],
    dolphinScore3 : [97, 112, 101],
    koalaScore3 : [109, 95, 108],
}

//console.log(Object.keys(scores));
function calcAvg(numbers) {
    const sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    return sum / numbers.lenght;
}

//for (const key of Object.keys(scores)) {}
