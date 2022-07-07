/* -------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------- */
/* ------------------------------ Coding Challenge 1 ------------------------------ */
/* -------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------- */

// const game = {
// 	team1: 'Bayern Munich',
// 	team2: 'Borrussia Dortmund',
// 	players: [
// 		[
// 			'Neuer',
// 			'Pavard',
// 			'Martinez',
// 			'Alaba',
// 			'Davies',
// 			'Kimmich',
// 			'Goretzka',
// 			'Coman',
// 			'Muller',
// 			'Gnarby',
// 			'Lewandowski',
// 		],
// 		[
// 			'Burki',
// 			'Schulz',
// 			'Hummels',
// 			'Akanji',
// 			'Hakimi',
// 			'Weigl',
// 			'Witsel',
// 			'Hazard',
// 			'Brandt',
// 			'Sancho',
// 			'Gotze',
// 		],
// 	],
// 	score: '4:0',
// 	scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
// 	date: 'Nov 9th, 2037',
// 	odds: {
// 		team1: 1.33,
// 		x: 3.25,
// 		team2: 6.5,
// 	},
// };

// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5.
// const {
// 	odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6.
// const printGoals = function (...players) {
// 	console.log(`${players.length} goals were scored`);
// };

// // printGoals("Davies", "Muller", "Lewandoski", "Kimmich");
// // printGoals("Davies", "Muller");
// printGoals(...game.scored);

// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win!');
// team2 < team1 && console.log('Team 2 is more likely to win!');

/* -------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------- */
/* ------------------------------ Coding Challenge 2 ------------------------------ */
/* -------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------- */

// const game = {
// 	team1: 'Bayern Munich',
// 	team2: 'Borrussia Dortmund',
// 	players: [
// 		[
// 			'Neuer',
// 			'Pavard',
// 			'Martinez',
// 			'Alaba',
// 			'Davies',
// 			'Kimmich',
// 			'Goretzka',
// 			'Coman',
// 			'Muller',
// 			'Gnarby',
// 			'Lewandowski',
// 		],
// 		[
// 			'Burki',
// 			'Schulz',
// 			'Hummels',
// 			'Akanji',
// 			'Hakimi',
// 			'Weigl',
// 			'Witsel',
// 			'Hazard',
// 			'Brandt',
// 			'Sancho',
// 			'Gotze',
// 		],
// 	],
// 	score: '4:0',
// 	scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
// 	date: 'Nov 9th, 2037',
// 	odds: {
// 		team1: 1.33,
// 		x: 3.25,
// 		team2: 6.5,
// 	},
// };

// // 1.
// for (const [i, player] of game.scored.entries()) {
// 	console.log(`Goal ${i + 1}: ${player}`);
// }

// // 2.
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) {
// 	average += odd;
// }
// average /= odds.length;
// console.log(average);

// // 3.
// for (const [team, odd] of Object.entries(game.odds)) {
// 	const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
// 	console.log(`Odd of ${teamStr} ${odd}`);
// }

/* -------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------- */
/* ------------------------------ Coding Challenge 3 ------------------------------ */
/* -------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------- */

// const gameEvents = new Map([
// 	[17, '⚽ GOAL'],
// 	[36, '🔁 Substitution'],
// 	[47, '⚽ GOAL'],
// 	[61, '🔁 Substitution'],
// 	[64, '🔶 Yellow card'],
// 	[69, '🔴 Red card'],
// 	[70, '🔁 Substitution'],
// 	[72, '🔁 Substitution'],
// 	[76, '⚽ GOAL'],
// 	[80, '⚽ GOAL'],
// 	[92, '🔶 Yellow card'],
// ]);

// /* ________Ma solution________ */

// // 1.
// let events = [...gameEvents];
// console.log(events);

// // 2.
// gameEvents.delete(64);
// console.log(gameEvents);
// events = [...gameEvents];
// console.log(events);

// // 3.
// console.log(`An event happened, on average, every ${90 / 10} minutes`);

// // 4.
// for (const [key, value] of gameEvents) {
// 	if (key <= 45) {
// 		console.log(`[FIRST HALF]${key}: ${value}`);
// 	} else {
// 		console.log(`[SECOND HALF]${key}: ${value}`);
// 	}
// }

/* ________Solution de Jonas________ */

// // 1.
// /* - Je veux des valeurs uniques => je dois utiliser new Set.
//    - Je veux uniquement les valeurs de Map (pas les Keys) => donc gameEvents.values()
//    - Je veux les stocker dans un Array => [... new Set(gameEvents.values())] */
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2.
// gameEvents.delete(64);

// // 3.
// console.log(
// 	`An event happened, on average, every ${90 / gameEvents.size} minutes`
// ); // An event happened, on average, every 9 minutes

// // 3. Bonus
// const time = [...gameEvents.keys()].pop();
// console.log(time); // 92
// console.log(
// 	`An event happened, on average, every ${time / gameEvents.size} minutes`
// ); // An event happened, on average, every 9.2 minutes

// // 4.
// for (const [min, event] of gameEvents) {
// 	const half = min <= 45 ? 'FIRST' : 'SECOND';
// 	console.log(`[${half} HALF] ${min}: ${event}`);
// }

/* -------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------- */
/* ------------------------------ Coding Challenge 4 ------------------------------ */
/* -------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------- */

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// const text = document.querySelector('textarea').value;

// document.querySelector('button').addEventListener('click', function () {
// 	const text = document.querySelector('textarea').value;
// 	const rows = text.split('\n');
// 	// console.log(rows);

// 	for (const [i, row] of rows.entries()) {
// 		const [first, second] = row.toLowerCase().trim().split('_');
// 		const output = `${first}${second.replace(
// 			second[0],
// 			second[0].toUpperCase()
// 		)}`;
// 		console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
// 	}
// });
