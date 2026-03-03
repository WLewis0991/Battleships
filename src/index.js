// Battleship
import "./styles.css";
import { Gameboard } from "./board.js";
import { Player } from "./player.js";

export { resetGame };

let player1;
let player2;

const start = document.getElementById("winner");
start.showModal();

const button = document.getElementById("reset");
button.addEventListener("click", () => {
	resetGame();
});

function resetGame() {
	console.log("button clicked");
	player1 = new Player("Will");
	player2 = new Player("Computer");
	player1.board.placeAllShips();
	player2.board.placeAllShips();
	console.log("ships placed");
	buildBoard();
	player2.board.markShips();
	console.log("board built");
}

const closeButton = document.getElementById("close");
closeButton.addEventListener("click", () => {
	const winner = document.getElementById("winner");
	winner.style.display="none"
	winner.close();
	resetGame();
});

function buildBoard() {
	const board = document.querySelector(".board");
	const enemyBoard = document.querySelector(".enemyBoard");
	board.innerHTML = "";
	enemyBoard.innerHTML = "";

	for (let i = 0; i < 10; i++) {
		const row = document.createElement("div");
		row.classList.add("row");

		for (let j = 0; j < 10; j++) {
			const square = document.createElement("div");
			square.classList.add("square");
			square.dataset.x = i;
			square.dataset.y = j;

			row.appendChild(square);
		}
		board.appendChild(row);
	}
	for (let i = 0; i < 10; i++) {
		const row = document.createElement("div");
		row.classList.add("row");

		for (let j = 0; j < 10; j++) {
			const square = document.createElement("div");
			square.classList.add("computer");
			square.dataset.x = i;
			square.dataset.y = j;

			row.appendChild(square);
		}
		enemyBoard.appendChild(row);
	}
}

const boardEl = document.querySelector(".board");

boardEl.addEventListener("click", (e) => {
	addListeners(e);
});

function addListeners(e) {
	if (!e.target.classList.contains("square")) return;

	const x = Number(e.target.dataset.x);
	const y = Number(e.target.dataset.y);

	const result = player1.board.recieveAttack(x, y);
	const message = document.getElementById("message");

	if (result === "hit") {
		e.target.classList.add("hit");
		message.innerText = `${player1.name} hit a ship!`;
		setTimeout(() => {
			player2.board.compAttack();
		}, 1000);
	}

	if (result === "miss") {
		e.target.classList.add("miss");
		message.innerText = `${player1.name} missed!`;
		setTimeout(() => {
			player2.board.compAttack();
		}, 1000);
	}

	if (result === "sunk") {
		e.target.classList.add("hit");
		player1.board.checkWin();
		setTimeout(() => {
			player2.board.compAttack();
		}, 1000);
	}

	if (result === "already") {
		console.log("Stop clicking the same square.");
	}
}
