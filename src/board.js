import { Ship } from "./ship.js";
export { Gameboard };

class Gameboard {
	constructor() {
		this.board = [];
		this.attempts = [];
		this.shipsSunk = 0;

		// Playable ships
		this.ships = {
			carrier: new Ship("Carrier", 5),
			battleship: new Ship("Battleship", 4),
			cruiser: new Ship("Cruiser", 3),
			submarine: new Ship("Submarine", 3),
			destroyer: new Ship("Destroyer", 2),
		};

		this.initBoard();
	}
	//Creation of board.
	initBoard() {
		for (let i = 0; i < 10; i++) {
			this.board[i] = [];
			for (let j = 0; j < 10; j++) {
				this.board[i][j] = 0;
			}
		}
	}
	//CFunction to randomize computer attacks
	compAttack() {
		const x = Math.floor(Math.random() * 10);
		const y = Math.floor(Math.random() * 10);
		let coords = [x, y];
		let attempts = this.attempts;
		coords = JSON.stringify(coords);
		attempts = JSON.stringify(attempts);
		const attack = attempts.indexOf(coords);
		if (attack < 0) {
			this.recieveAttack(x, y);
		} else {
			this.compAttack();
		}
	}

	//Check if attack was a hit o miss
	recieveAttack(x, y) {
		const attack = this.board[x][y];
		if (attack === 0) {
			console.log("Miss!");
			this.board[x][y] = "2";
			this.attempts.push([x, y]);
			return "miss";
		}
		if (attack === 1) {
			this.checkHitShip(x, y);
			this.board[x][y] = "x";
			this.attempts.push([x, y]);
			return;
		} else {
			console.log("Already attacked");
			return "already";
		}
	}
	//Check which ship was hit and log hit or sink
	checkHitShip(x, y) {
		for (const ship of Object.values(this.ships)) {
			let coords = ship.coords;
			let attack = [x, y];
			coords = JSON.stringify(coords);
			attack = JSON.stringify(attack);
			const hit = coords.indexOf(attack);
			if (hit >= 0) {
				ship.hit(x, y);
				if (!ship.isSunk(x, y)) {
					console.log(`${ship.name} has been hit!`);
				} else {
					this.shipsSunk++;
				}
			}
		}
	}
	//goes through all ships and places them
	placeAllShips() {
		for (const ship of Object.values(this.ships)) {
			this.generateAndPlaceShip(ship);
		}
	}
	//Random ship placement
	generateAndPlaceShip(ship) {
		const length = ship.length;
		let position = [];
		let valid = false;

		while (!valid) {
			position = [];
			const horizontal = Math.random() >= 0.5;
			const x = Math.floor(Math.random() * 10);
			const y = Math.floor(Math.random() * 10);

			if (horizontal) {
				const startY = y + length > 10 ? y - (length - 1) : y;
				for (let i = 0; i < length; i++) {
					position.push([x, startY + i]);
				}
			} else {
				const startX = x + length > 10 ? x - (length - 1) : x;
				for (let i = 0; i < length; i++) {
					position.push([startX + i, y]);
				}
			}

			// Check if any position is already occupied
			valid = position.every(([row, col]) => this.board[row][col] === 0);
		}

		// Assign coords to the ship
		ship.coords = position;

		// Mark the board
		for (const [row, col] of position) {
			this.board[row][col] = 1;
		}
	}
}
