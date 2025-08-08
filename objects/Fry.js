// fry.js
export class Fry {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(ctx) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

const fries = []; // Local list

function createFry() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const fry = new Fry(x, y, 20, 40);
    fries.push(fry);
}

export function spawnFriesTimer(max, interval) {
    let spawnCount = 0;
    const timer = setInterval(() => {
        if (spawnCount >= max) {
            clearInterval(timer);
        } else {
            createFry();
            spawnCount++;
        }
    }, interval);
}

// Let main.js get the fries list
export function getFries() {
    return fries;
}
