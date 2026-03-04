export { addListeners };

import { player1, player2 } from "./index.js";

//Listeners and reponses to player clicking a square
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
		}, 2000);
	}

	if (result === "miss") {
		e.target.classList.add("miss");
		message.innerText = `${player1.name} missed!`;
		setTimeout(() => {
			player2.board.compAttack();
		}, 2000);
	}

	if (result === "sunk") {
		e.target.classList.add("hit");
		player1.board.checkWin();
		setTimeout(() => {
			player2.board.compAttack();
		}, 2000);
	}

	if (result === "already") {
		const message = document.getElementById("message");
		message.textContent = "You alerady tried there!"
		console.log("Stop clicking the same square.");
	}
}