// Battleship
import "./styles.css";
import { Player } from "./player.js";

const player1 = new Player("Will");
player1.board.placeAllShips();
player1.board.compAttack();
player1.board.compAttack();
player1.board.compAttack();
player1.board.compAttack();

console.log(player1.board.board);
console.log(player1);
