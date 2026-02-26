// Battleship
import { Ship } from "./ship.js";
import { Gameboard } from "./board.js";

const board = new Gameboard();

// Create a Gameboard class
// Board needs cords to know swhere ships are and also if attack was made there.
// Board displays all attack and if shipsare hit/ sunk/ game over.

//Create players
//Creation of both a real and computer player.
//Should track which players turn it is

console.log(board);
console.log(board.placeAllShips());
console.log(board);
