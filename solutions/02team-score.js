"use strict"

const scores = {
    dolphinScore1 : [96, 108, 89],
    koalaScore1 : [88, 91, 110],
    dolphinScore2 : [97, 112, 101],
    koalaScore2 : [109, 95, 123],
    dolphinScore3 : [97, 112, 101],
    koalaScore3 : [109, 95, 106],
}

// const sum = array.reduce((a, b) => a + b, 0);
//console.log(Object.keys(scores));
function calcAvg(numbers) {
    const sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    return sum / numbers.length;
}

function destructureObjToValues(obj, func) {

    let objValues = {};
    for (let [key, value] of Object.entries(obj)) {
        //console.log(`${key}: ${value}`);

        objValues[key] = func(value);
        
    }
    return objValues;
}

const avgObj = destructureObjToValues(scores, calcAvg)

function compareAvg(dolphins, koalas) {
    if (dolphins > koalas && dolphins >= 100) {
        console.log(`Dolphins Won`)
    } else if (koalas > dolphins && koalas >= 100) {
        console.log(`Koalas Won`)
    } else if (koalas == dolphins && koalas >= 100 && dolphins >= 100) {
        console.log(`It's a draw`)
    } else {
        console.log(`No team won`)
    }
}

compareAvg(avgObj.dolphinScore1, avgObj.koalaScore1);
compareAvg(avgObj.dolphinScore2, avgObj.koalaScore2);
compareAvg(avgObj.dolphinScore3, avgObj.koalaScore3);
