export { Player };

import { Gameboard } from "./board.js";

//Player creation. Turn doesnt matter until multiplayer is added
class Player {
	constructor(name) {
		this.name = name;
		this.board = new Gameboard(name);
		//this.turn = true;
	}
}
