// Battleship
import "./styles.css";
import { Player } from "./player.js";
import { buildBoard } from "./buildBoard.js";
import { addListeners } from "./boardListeners.js";


export { resetGame, player1, player2 };


//Plaerys
let player1;
let player2;

//Start screen open on page load
const start = document.getElementById("winner");
//start.showModal();

//Event listener to load a new board/ replace ships
const button = document.getElementById("reset");
button.addEventListener("click", () => {
	resetGame();
});

//Event listener to close start/play again window and start a new game
const closeButton = document.getElementById("close");
closeButton.addEventListener("click", () => {
	const winner = document.getElementById("winner");
	winner.style.display="none"
	winner.close();
	resetGame();
});

//Board and listeners being applied to just player squares
const boardEl = document.querySelector(".board");

boardEl.addEventListener("click", (e) => {
	addListeners(e);
});

//Clear board, load player ships in new location
function resetGame() {
	console.log("button clicked");
	player1 = new Player("Player");
	player2 = new Player("Computer");
	player1.board.placeAllShips();
	player2.board.placeAllShips();
	console.log("ships placed, players created");
	buildBoard();
	player2.board.markShips();
	console.log("board built");
}

