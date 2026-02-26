// Battleship
import { Gameboard } from "./board.js";
import { Player } from "./player.js";

const player1 = new Player("Will");
player1.board.placeAllShips();
console.log(player1.board.board);
console.log(player1);
