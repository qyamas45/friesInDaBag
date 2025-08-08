import { Bag } from '../../objects/Bag.js';
import { Cursor } from '../../objects/Cursor.js';
import { spawnFriesTimer, getFries } from '../../objects/Fry.js';
import { collide } from '../../utils/collide.js';

let bag;

const cursor = new Cursor();
// Get the canvas element and its drawing context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
 
let draggingRect = null;

// Resize canvas to fill the window
function resizeCanvas() {
    const oldWidth = canvas.width;
    const oldHeight = canvas.height;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    bag = new Bag(canvas.width / 2, canvas.height / 2, canvas.width / 4, canvas.height / 2);

    const scaleX = canvas.width/oldWidth;
    const scaleY = canvas.height/oldHeight;

    //for(const fry of fries)
    //{
    //    fry.x *= scaleX;
    //    fry.y *= scaleY;
    //    fry.width *= scaleX;
    //    fry.height *= scaleY;
    //}
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
 
function animate(){
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bag.draw(ctx);
    const fries = getFries();
    for(let fry of fries)
    {
        fry.draw(ctx);
    }
    cursor.draw(ctx);
    requestAnimationFrame(animate);
}
 
canvas.addEventListener('mousedown', (event) => {
    const mouseX = event.offsetX;
    const mouseY = event.offsetY;
});
canvas.addEventListener("mousemove", (event) => {
    cursor.updatePosition(event.clientX, event.clientY);

    //collision detection of cursor/fries
    const fries = getFries();
    for(const fry of fries)
    {
        if(collide(cursor, fry))
        {

        }
    }   
});


spawnFriesTimer(10, 10000);

animate();