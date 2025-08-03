import { Bag } from '../../objects/Bag.js';
import { Cursor } from '../../objects/Cursor.js';
let bag;

const cursor = new Cursor();
// Get the canvas element and its drawing context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const fries = [];
let draggingRect = null;

// Resize canvas to fill the window
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    bag = new Bag(canvas.width / 2, canvas.height / 2, canvas.width / 3, canvas.height / 2);
}


resizeCanvas();
window.addEventListener('resize', resizeCanvas);
 
function createFry(fryx=0, fryy=0, width=10, height=50, color="#FFD700"){
    ctx.fillStyle = color;
    const fry = {
        x: Math.random() * (canvas.width - 100),
        y: Math.random() * (canvas.height - 60),
        width: width,
        height: height,
        color: color
    };
    fries.push(fry);
    animate();
}


function animate(){
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bag.draw(ctx);
    for(const rect of fries)
    {
        ctx.fillStyle = rect.color;
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    }
    
    cursor.draw(ctx);
    requestAnimationFrame(animate);
    //drawBag();
}
 
canvas.addEventListener('mousedown', (event) => {
    const mouseX = event.offsetX;
    const mouseY = event.offsetY;

    for(let i = 0; i < fries.length; i++)
    {
        const fry = fries[i];
    }
});
canvas.addEventListener("mousemove", (event) => {
    cursor.updatePosition(event.clientX, event.clientY);

});
let spawnCount = 0;
const maxSpawns = 10;
const spawnInt = setInterval(() => {
    if(spawnCount >= maxSpawns)
    {
        clearInterval(spawnInt);
    } else
    {
        createFry();
        spawnCount++;
    }
}, 100000);
animate();
 