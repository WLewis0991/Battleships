// Battleship

// Create Ship class
// Should create shipes right at the start, track hits, and if its been sunk.

class Ship {
	constructor(length) {
		this.length = length;
		this.hits = 0;
		this.sunk = false;
	}
}
const carrier = new Ship(5);
const battleship = new Ship(4);
const cruiser = new Ship(3);
const submarine = new Ship(3);
const destroyer = new Ship(2);

console.log(carrier);
console.log(battleship);
console.log(cruiser);
console.log(submarine);
console.log(destroyer);

// Create a Gameboard class
// Board needs cords to know where ships are and also if attack was made there.
// Board displays all attack and if shipsare hit/ sunk/ game over.

function initGameboard() {
	const boardSize = 10;
	const board = [];
	for (let i = 0; i < boardSize; i++) {
		board[i] = [];
		for (let j = 0; j < boardSize; j++) {
			board[i][j] = 0; // 0 = empty, 1 = ship, 2 = hit, 3 = miss
		}
	}
	board[8][1] = 1;
	board[8][0] = 2;
	board[8][2] = 3;

	console.log(board);
}
initGameboard();

//Create players
//Creation of both a real and computer player.
//Should track which players turn it is
