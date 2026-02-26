// Battleship
import "./styles.css";
import { Player } from "./player.js";
import { Gameboard } from "./board.js";

const player1 = new Player("Will");
player1.board.placeAllShips();
console.log(player1.board.board);
console.log(player1);

const button = document.getElementById("start");
button.addEventListener("click", () => {
	console.log("button clicked");
	buildBoard();
});

function buildBoard() {
	const board = document.querySelector(".board");
	board.innerHTML = "";

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
