"use strict"


const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
};
   

const [players1, players2] = game.players;


const [gk, ...fieldPlayers] = players1;

const allPlayers = players1.concat(players2);

const playersFinal = [...players1, 'Thiago', 'Cautinho', 'Perisic'];


const {team1, x: draw, team2} =  game.odds;

function printGoals(...players) {
    console.log(`${players.length} goals were scored`);
}

/* team1 < team2 && console.log('team1 is more likely to win');
team1 > team2 && console.log('team2 is more likely to win');
printGoals(...game.scored)
console.log(players1, players2);
console.log(gk, fieldPlayers);
console.log(allPlayers);
console.log(playersFinal);
console.log(team1, draw, team2); */

// Challenge #2

game.scored.map(el => console.log(`Goal 1: ${el}`));

function calcAvg(arr) {
    const sum = arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    return sum / arr.length;
};

const oddsArray = Object.values(game.odds);
console.log(calcAvg(oddsArray));

for (const [team, odd] of Object.entries(game.odds)) {
    const teamstr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamstr} ${odd}`);
}

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🟨 Yellow card'],
    [69, '🟥 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🟨 Yellow card'], 
]);


const events = [...new Set(gameEvents.values())];

const time = [...gameEvents.keys()].pop();

console.log(`An event happened, on 
average, every ${time / gameEvents.size} minutes`);


for (const [key, value] of gameEvents) {
    const str = key > 45 ? `[SECOND HALF] ${key}: ${value}` : `[FIRST HALF] ${key}: ${value}`;
    console.log(str);
}



console.log(events);

gameEvents.delete(64);

console.log(gameEvents);

