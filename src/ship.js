
import hitSoundFile from "./audio/hit.mp3"
export { Ship };



//Creation of ships , storage of coords for UI, and traccking of hits/sunk status
class Ship {
	constructor(name, length) {
		this.name = name;
		this.length = length;
		this.hits = 0;
		this.sunk = false;
		this.coords = null;
		this.hitSound =  new Audio(hitSoundFile);
	}

	hit(x, y) {
		this.hits++;
		this.hitSound.play().catch(() => {});
		this.hitSound.currentTime = 0;
		return "hit";
	}

	//Logging if ship is sunk
	isSunk() {
		if (this.hits === this.length) {
			this.sunk = true;
			const message = document.getElementById("message");
      		this.hitSound.play().catch(() => {});
			this.hitSound.currentTime = 0;
			message.innerText = `A ${this.name} has been sunk!`;
			console.log(`${this.name} has been sunk!`);
			return "sunk";
		}
		return false;
	}
}
