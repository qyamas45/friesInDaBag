
// Get the canvas element and its drawing context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
// Resize canvas to fill the window
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}


resizeCanvas();
window.addEventListener('resize', resizeCanvas);


const squareSize = 50;
let mouseX = 0;
let mouseY = 0;

function drawSquare(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x - width / 2, y - height / 2, width, height);
}
function drawBag()
{
    //mainbody part 
    drawSquare(canvas.width/2-2, canvas.height/2-2, canvas.width/3, canvas.height/2, '#89745A');
    drawSquare(canvas.width/2-2, canvas.height/1.92, canvas.width/3.2, canvas.height/2.2, '#b59b7c');
}

function animate(){
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBag();
    drawSquare(mouseX, mouseY,squareSize, squareSize, 'blue');
    requestAnimationFrame(animate);
    drawBag();
}

canvas.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

animate();
//drawSquare(canvas.width/2-50, canvas.height/2-50, 20, 20, 'brown');
