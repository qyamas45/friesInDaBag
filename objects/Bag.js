export class Bag {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(ctx) {
        // Draw main body
        ctx.fillStyle = '#89745A';
        ctx.fillRect(
            this.x - this.width / 2,
            this.y - this.height / 2,
            this.width,
            this.height
        );

        // Draw inner section
        ctx.fillStyle = '#b59b7c';
        ctx.fillRect(
            this.x - this.width / 2 * 1.02,
            this.y - this.height / 2 * 0.96,
            this.width * 0.95,
            this.height * 1.05
        );
    }
}
