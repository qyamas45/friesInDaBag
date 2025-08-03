export class Fry{
    constructor(x, y, width = 10, height = 10, color= "blue")
    {
        this.x = x;
        this.y = y; 
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}