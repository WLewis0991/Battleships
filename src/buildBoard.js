export { buildBoard };


//Board being built for UI and dataset being added to access squares individually
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