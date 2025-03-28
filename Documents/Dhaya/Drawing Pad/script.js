
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let brushColor = '#000000';  
let brushSize = 5;
let isDrawing = false;
let isErasing = false;  
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  draw(e);
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
  ctx.beginPath();
});
canvas.addEventListener('mousemove', draw);
document.getElementById('colorPicker').addEventListener('input', (e) => {
  if (!isErasing) { 
    brushColor = e.target.value;
  }
});

document.getElementById('brushSize').addEventListener('input', (e) => {
  brushSize = e.target.value;
});

function draw(e) {
  if (!isDrawing) return;
  ctx.lineWidth = brushSize;
  ctx.lineCap = 'round';
  ctx.strokeStyle = isErasing ? '#FFFFFF' : brushColor;
  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

document.getElementById('clearBtn').addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

document.getElementById('eraseBtn').addEventListener('click', () => {
  isErasing = !isErasing;
  document.getElementById('eraseBtn').textContent = isErasing ? 'Draw' : 'Eraser';
});

document.getElementById('saveBtn').addEventListener('click', () => {
  const dataURL = canvas.toDataURL();
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = 'drawing.png';
  link.click();
});
