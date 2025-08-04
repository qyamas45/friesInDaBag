export class Fry{
    constructor(x, y, width = 10, height = 30, color= "yellow")
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
    getBounds()
    {
        return{
            x: this.x,
            y:this.y,
            width: this.width,
            height: this.height
        };
    }
}