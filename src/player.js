export { Player };
import { Gameboard } from "./board.js";

class Player {
	constructor(name) {
		this.name = name;
		this.board = new Gameboard();
		this.turn = true;
		this.sunkShips = 0;
	}
}
