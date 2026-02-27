// Battleship
import "./styles.css";
import { Player } from "./player.js";
import { Gameboard } from "./board.js";

const player1 = new Player("Will");
const player2 = new Player("Computer");
player1.board.placeAllShips();
player2.board.placeAllShips();
console.log(player1);
console.log(player2);

const button = document.getElementById("start");
button.addEventListener("click", () => {
	console.log("button clicked");
	buildBoard();
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
			square.classList.add("square");
			square.dataset.x = i;
			square.dataset.y = j;

			row.appendChild(square);
		}
		enemyBoard.appendChild(row);
	}
}

const boardEl = document.querySelector(".board");

boardEl.addEventListener("click", (e) => {
	if (!e.target.classList.contains("square")) return;

	const x = Number(e.target.dataset.x);
	const y = Number(e.target.dataset.y);

	const result = player1.board.recieveAttack(x, y);

	if (result === "hit") {
		e.target.classList.add("hit");
	}

	if (result === "miss") {
		e.target.classList.add("miss");
	}

	if (result === "already") {
		console.log("Stop clicking the same square.");
	}
});
