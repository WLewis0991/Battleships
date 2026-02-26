// Battleship
import { Gameboard } from "./board.js";

const board = new Gameboard();

board.placeAllShips();
board.recieveAttack(1, 1);
board.recieveAttack(2, 4);
board.recieveAttack(7, 3);
board.recieveAttack(2, 1);
board.recieveAttack(5, 7);
board.recieveAttack(2, 6);
board.recieveAttack(3, 1);
board.recieveAttack(4, 4);
console.log(board);
console.log(board.attempts);
