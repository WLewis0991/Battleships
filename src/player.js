export { Player };

import { Gameboard } from "./board.js";

class Player {
	constructor(name) {
		this.name = name;
		this.board = new Gameboard(name);
		this.turn = true;
	}
}
