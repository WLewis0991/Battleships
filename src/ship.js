export { Ship };

// Create Ship class
// Should create shipes right at the start, track hits, and if its been sunk.

class Ship {
	constructor(name, length) {
		this.name = name;
		this.length = length;
		this.hits = 0;
		this.sunk = false;
		this.coords = null;
	}

	hit(x, y) {
		this.hits++;
		return "hit";
	}

	isSunk() {
		if (this.hits === this.length) {
			this.sunk = true;
			console.log(`${this.name} has been sunk!`);
			//			const coords = this.coords;
			//			for (let i = 0; i < coords.length; i++) {
			//				const element = coords[i];
			//				const x = element[0];
			//			const y = element[1];
			//				const square = document.querySelectorAll(".square");
			//
			//				square.forEach((sq) => {
			//					if (Number(sq.dataset.x) === x && Number(sq.dataset.y) === y) {
			//						sq.classList.add("sunk");
			//					}
			//				});
			//			}
			return "sunk";
		}
		return false;
	}
}
