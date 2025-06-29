  // Get the canvas element and its drawing context
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  // Draw a blue square at position (50, 50) with width and height of 100
  ctx.fillStyle = 'blue';  // fill color
  ctx.fillRect(50, 50, 100, 100);  // x, y, width, height