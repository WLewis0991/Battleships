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
		const square = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
		square.classList.add("hit");
		return this.hits++;
	}

	isSunk() {
		if (this.hits === this.length) {
			this.sunk = true;
			console.log(`${this.name} has been sunk!`);

			return true;
		}
		return false;
	}
}
