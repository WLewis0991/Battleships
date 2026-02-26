import { Ship } from "./ship.js";

export { Gameboard };

class Gameboard {
	constructor() {
		this.board = [];
		this.ships = {
			carrier: new Ship("Carrier", 5),
			battleship: new Ship("Battleship", 4),
			cruiser: new Ship("Cruiser", 3),
			submarine: new Ship("Submarine", 3),
			destroyer: new Ship("Destroyer", 2),
		};

		this.initBoard();
	}

	initBoard() {
		for (let i = 0; i < 10; i++) {
			this.board[i] = [];
			for (let j = 0; j < 10; j++) {
				this.board[i][j] = 0;
			}
		}
	}

	placeAllShips() {
		for (const ship of Object.values(this.ships)) {
			this.generateAndPlaceShip(ship);
		}
	}

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
