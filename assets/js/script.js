import { Bag } from '../../objects/Bag.js';
import { Cursor } from '../../objects/Cursor.js';
import { Fry } from '../../objects/Fry.js'
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
   const x = Math.random() * (canvas.width - 100);
   const y = Math.random() * (canvas.height - 100);
   const fry = new Fry(x,y);
   fries.push(fry);
}

function spawnFriesTimer(max, interval)
{
    let spawnCount = 0;
    const timer = setInterval(() => {
        if(spawnCount >= max)
        {
            clearInterval(timer);
        } else
        {
            createFry();
            spawnCount++;
        }
    }, interval);
    
}
function animate(){
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bag.draw(ctx);
    for(const fry of fries)
    {
        fry.draw(ctx);
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


spawnFriesTimer(10, 10000);

animate();