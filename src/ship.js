export { Ship };

// Create Ship class
// Should create shipes right at the start, track hits, and if its been sunk.

class Ship {
	constructor(name, length, value) {
		this.name = name;
		this.length = length;
		this.hits = 0;
		this.sunk = false;
		this.coords = null;
		this.player = value;
	}

	hit(x, y) {
		this.hits++;
		return "hit";
	}

	isSunk() {
		if (this.hits === this.length) {
			this.sunk = true;
			console.log(`${this.name} has been sunk!`);
			let coords = this.coords;
			for (let i = 0; i < coords.length; i++) {
				const element = coords[i];
				let x = element[0];
				let y = element[1];
				const square = document.querySelectorAll(".square");

				square.forEach((sq) => {
					if (Number(sq.dataset.x) === x && Number(sq.dataset.y) === y) {
						console.log("ship");
						// Example:
						sq.classList.add("sunk");
					}
				});

				console.log(element);
			}
			return true;
		}
		return false;
	}
}
